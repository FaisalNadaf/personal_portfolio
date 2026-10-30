/**
 * Dependency-free scroll reveal controller (progressive enhancement).
 * Pairs with the [data-reveal] rules in src/index.css.
 *
 * - Content is visible by default. CSS hides [data-reveal] only after this
 *   controller adds `reveal-ready` to <html>, so a script failure never hides content.
 * - Elements already in view at start are marked revealed first, so nothing
 *   above the fold flickers.
 * - Elements that enter together are staggered via --reveal-index.
 * - Reduced motion is handled in CSS.
 * - destroy() is idempotent and safe under React Strict Mode double effects.
 */

const READY_CLASS = "reveal-ready";
const REVEALED_CLASS = "is-revealed";
let activeControllers = 0;

export function createReveal(options = {}) {
	const noop = { refresh() {}, destroy() {} };
	if (typeof window === "undefined" || !("IntersectionObserver" in window)) return noop;

	const {
		root = document,
		selector = "[data-reveal]",
		rootMargin = "0px 0px -8% 0px",
		threshold = 0.12,
		watch = false,
	} = options;

	const tracked = new WeakSet();
	let destroyed = false;

	const observer = new IntersectionObserver(
		(entries) => {
			let index = 0;
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target;
				el.style.setProperty("--reveal-index", String(index++));
				el.classList.add(REVEALED_CLASS);
				observer.unobserve(el);
			}
		},
		{ rootMargin, threshold },
	);

	const scan = () => {
		if (destroyed) return;
		const viewportHeight = window.innerHeight;
		root.querySelectorAll(selector).forEach((el) => {
			if (tracked.has(el)) return;
			tracked.add(el);
			const rect = el.getBoundingClientRect();
			if (rect.top < viewportHeight && rect.bottom > 0) {
				// Never hide something the reader can already see.
				el.classList.add(REVEALED_CLASS);
				return;
			}
			observer.observe(el);
		});
	};

	scan();
	activeControllers++;
	document.documentElement.classList.add(READY_CLASS);

	let mutationObserver;
	let frame = 0;
	if (watch && "MutationObserver" in window) {
		mutationObserver = new MutationObserver(() => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				scan();
			});
		});
		mutationObserver.observe(root === document ? document.body : root, {
			childList: true,
			subtree: true,
		});
	}

	return {
		refresh: scan,
		destroy() {
			if (destroyed) return;
			destroyed = true;
			observer.disconnect();
			mutationObserver?.disconnect();
			if (frame) cancelAnimationFrame(frame);
			activeControllers = Math.max(0, activeControllers - 1);
			// Last controller gone: drop the hidden state so nothing stays invisible.
			if (activeControllers === 0) document.documentElement.classList.remove(READY_CLASS);
		},
	};
}
