/** @format */

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Renders an animated gradient line + pulsing tracker dot that fills/moves
 * based on the user's scroll position within the parent timeline.
 *
 * Drop inside a relatively-positioned wrapper that contains the
 * `<VerticalTimeline>`. Pass that wrapper's ref as `targetRef`.
 */
const ScrollTimelineLine = ({ targetRef }) => {
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start 80%", "end 20%"],
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		restDelta: 0.001,
	});

	const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);
	const dotY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

	return (
		<>
			{/* Animated gradient line — fills as user scrolls */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute left-[18px] top-0 z-[2] h-full w-1 origin-top rounded-full bg-gradient-to-b from-accent via-indigo-400 to-purple-400 shadow-[0_0_12px_rgba(59,130,246,0.4)] md:left-1/2 md:-ml-0.5"
				style={{ scaleY: lineScaleY }}
			/>

			{/* Glowing tracker dot — follows scroll position */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute left-[18px] z-[3] -translate-x-1/2 md:left-1/2"
				style={{ top: dotY }}>
				<span className="relative flex h-3 w-3">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
					<span className="relative inline-flex h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.7)] ring-2 ring-zinc-950" />
				</span>
			</motion.div>
		</>
	);
};

export default ScrollTimelineLine;
