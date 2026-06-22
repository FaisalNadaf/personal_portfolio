/** @format */

import React from "react";
import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";
import SectionHeader from "../ui/SectionHeader";
import SectionTopShimmer from "../ui/SectionTopShimmer";
import { achievements } from "../../data/constants.js";

const Achievements = () => {
	return (
		<section
			id="Achievements"
			className="relative w-full overflow-hidden py-16 md:py-24">
			<SectionTopShimmer />

			<div className="section-container">
				<SectionHeader
					eyebrow="Gallery"
					title="Moments & Achievements"
					description="A visual collection of milestones, recognitions, and meaningful work — drag to explore, click to enlarge."
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.97 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{
					duration: 0.9,
					ease: [0.22, 0.61, 0.36, 1],
				}}
				className="relative h-[85vh] w-full overflow-hidden border-y border-zinc-800/60 bg-zinc-950/40 shadow-2xl shadow-black/40">
				<DomeGallery
					images={achievements}
					fit={1}
					fitBasis="width"
					padFactor={0.08}
					minRadius={300}
					maxVerticalRotationDeg={0}
					segments={28}
					dragDampening={2.8}
					grayscale={false}
					overlayBlurColor="#09090b"
					openedImageWidth="min(60vw, 800px)"
					openedImageHeight="min(78vh, 760px)"
					openedImageBorderRadius="20px"
				/>

				{/* Hint pill */}
				<div className="pointer-events-none absolute bottom-6 left-1/2 z-[6] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs text-ink-secondary backdrop-blur-md">
					<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
					Drag to rotate · Click to enlarge
				</div>
			</motion.div>
		</section>
	);
};

export default Achievements;
