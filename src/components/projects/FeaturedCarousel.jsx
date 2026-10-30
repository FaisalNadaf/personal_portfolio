/** @format */

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { clientImage, clientCategories } from "../../data/clientProjects";
import { usePrefersReducedMotion } from "../../lib/useMediaQuery";
import { track, EVENTS } from "../../lib/track";
import Tag from "../ui/Tag";

const categoryLabel = (id) => clientCategories.find((c) => c.id === id)?.label ?? id;

/**
 * Featured client work. Native horizontal scrolling with scroll snapping:
 * touch swipe, trackpad and keyboard all work without intercepting page scroll.
 * Previous/next buttons move one slide; there is no autoplay.
 */
export default function FeaturedCarousel({ projects, headingId }) {
	const trackRef = useRef(null);
	const [active, setActive] = useState(0);
	const reduce = usePrefersReducedMotion();

	// The active slide is the one whose start is closest to the snap position.
	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const pad = parseFloat(getComputedStyle(track).paddingLeft || "0");
			const target = track.scrollLeft + pad;
			let best = 0;
			let bestDist = Infinity;
			[...track.children].forEach((slide, i) => {
				const dist = Math.abs(slide.offsetLeft - target);
				if (dist < bestDist) {
					bestDist = dist;
					best = i;
				}
			});
			// At the end of the track the last slide may not reach the snap point.
			if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) best = track.children.length - 1;
			setActive(best);
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		track.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			track.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);

	const go = useCallback(
		(i) => {
			const track = trackRef.current;
			const slide = track?.children[Math.max(0, Math.min(projects.length - 1, i))];
			if (!slide) return;
			// The track is the slides' offsetParent, so offsetLeft is measured from its edge.
			track.scrollTo({
				left: slide.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft || "0"),
				behavior: reduce ? "auto" : "smooth",
			});
		},
		[projects.length, reduce],
	);

	const onKeyDown = (e) => {
		if (e.key === "ArrowRight") {
			e.preventDefault();
			go(active + 1);
		} else if (e.key === "ArrowLeft") {
			e.preventDefault();
			go(active - 1);
		}
	};

	return (
		<div role="region" aria-roledescription="carousel" aria-labelledby={headingId}>
			<div className="container-page mb-6 flex items-center justify-between gap-4">
				<p className="text-sm text-ink-muted" aria-live="polite">
					<span className="font-semibold text-ink">{active + 1}</span> / {projects.length}
					<span className="visually-hidden">: {projects[active]?.title}</span>
				</p>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => go(active - 1)}
						disabled={active === 0}
						className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-inset ring-line-strong transition-colors hover:bg-sand-50 disabled:opacity-40">
						<ArrowLeft className="h-5 w-5" aria-hidden="true" />
						<span className="visually-hidden">Previous project</span>
					</button>
					<button
						type="button"
						onClick={() => go(active + 1)}
						disabled={active === projects.length - 1}
						className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-inset ring-line-strong transition-colors hover:bg-sand-50 disabled:opacity-40">
						<ArrowRight className="h-5 w-5" aria-hidden="true" />
						<span className="visually-hidden">Next project</span>
					</button>
				</div>
			</div>

			<div
				ref={trackRef}
				tabIndex={0}
				onKeyDown={onKeyDown}
				aria-label="Featured client projects. Use the arrow keys to move between projects."
				className="snap-track scrollbar-none relative flex gap-5 overflow-x-auto px-[var(--track-pad)] pb-4 [--snap-padding:var(--track-pad)] [--track-pad:clamp(1.25rem,0.8rem_+_2vw,2rem)] xl:[--track-pad:calc((100%_-_76rem)/2_+_2rem)]">
				{projects.map((p, i) => {
					const img = clientImage(p.id);
					return (
						<div
							key={p.id}
							data-index={i}
							role="group"
							aria-roledescription="slide"
							aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
							className="w-[88%] shrink-0 sm:w-[78%] lg:w-[64%]">
							<article className="grid h-full overflow-hidden rounded-3xl border border-line bg-white shadow-card lg:grid-cols-[1.45fr_1fr]">
								<a
									href={p.url}
									target="_blank"
									rel="noopener noreferrer"
									tabIndex={-1}
									aria-hidden="true"
									onClick={() => track(EVENTS.clientProjectOpened, { project: p.id, location: "carousel" })}
									className="hover-zoom block overflow-hidden border-b border-line bg-sand-50 lg:border-b-0 lg:border-r">
									<img
										src={img.src}
										srcSet={img.srcSet}
										sizes="(min-width: 1024px) 40vw, 85vw"
										width={img.width}
										height={img.height}
										alt=""
										loading="lazy"
										decoding="async"
										className="block h-full w-full object-cover object-top"
									/>
								</a>
								<div className="flex flex-col p-6 sm:p-8">
									<div className="flex flex-wrap gap-1.5">
										{p.categories.map((c) => (
											<Tag key={c} tone="brand">
												{categoryLabel(c)}
											</Tag>
										))}
										{p.location && <Tag tone="sand">{p.location}</Tag>}
									</div>
									<h3 className="mt-4 text-h3 font-semibold text-ink">{p.title}</h3>
									<p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{p.description}</p>
									{p.tech.length > 0 && (
										<p className="mt-4 text-xs text-ink-muted">
											<span className="font-semibold text-ink-soft">Built with: </span>
											{p.tech.join(", ")}
										</p>
									)}
									<a
										href={p.url}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => track(EVENTS.clientProjectOpened, { project: p.id, location: "carousel" })}
										className="link-arrow mt-auto pt-6 text-sm">
										View live website<span className="visually-hidden">: {p.title} (opens in a new tab)</span>
										<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
									</a>
								</div>
							</article>
						</div>
					);
				})}
			</div>
		</div>
	);
}
