import { useEffect } from "react";
import { useFinePointer, usePrefersReducedMotion } from "./useMediaQuery";

/**
 * Gentle pointer-driven tilt. Writes --tilt-x / --tilt-y on the element; CSS
 * applies the transform. Disabled for touch input and reduced motion.
 */
export function useTilt(ref, max = 4) {
	const fine = useFinePointer();
	const reduce = usePrefersReducedMotion();

	useEffect(() => {
		const el = ref.current;
		if (!el || !fine || reduce) return;
		let frame = 0;
		const reset = () => {
			cancelAnimationFrame(frame);
			el.style.setProperty("--tilt-x", "0deg");
			el.style.setProperty("--tilt-y", "0deg");
		};
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - 0.5;
			const y = (e.clientY - r.top) / r.height - 0.5;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				el.style.setProperty("--tilt-x", `${(-y * max).toFixed(2)}deg`);
				el.style.setProperty("--tilt-y", `${(x * max).toFixed(2)}deg`);
			});
		};
		el.addEventListener("pointermove", onMove);
		el.addEventListener("pointerleave", reset);
		return () => {
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerleave", reset);
			reset();
		};
	}, [ref, fine, reduce, max]);
}
