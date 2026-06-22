/** @format */

import React from "react";
import { motion } from "framer-motion";

/**
 * Decorative animated accent strip pinned to the top edge of a section.
 * Parent must be `position: relative`.
 */
const SectionTopShimmer = () => (
	<motion.div
		aria-hidden
		className="pointer-events-none absolute inset-x-0 top-0 h-px"
		style={{
			background:
				"linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.7) 50%, transparent 100%)",
			backgroundSize: "200% 100%",
		}}
		animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
		transition={{
			duration: 4,
			repeat: Infinity,
			ease: "linear",
		}}
	/>
);

export default SectionTopShimmer;
