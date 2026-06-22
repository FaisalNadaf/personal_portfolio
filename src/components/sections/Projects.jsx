/** @format */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/constants.js";
import ProjectCard from "../cards/ProjectCard";
import CanvasCursor from "../cursor/CanvasCursor";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

const FILTERS = [
	{ key: "all", label: "All" },
	{ key: "web app", label: "Web Apps" },
	{ key: "android app", label: "Android Apps" },
	{ key: "machine learning", label: "AI / ML" },
	{ key: "hackathon", label: "Hackathon" },
];

const PAGE_SIZE = 6;

const SMOOTH = [0.22, 0.61, 0.36, 1];

const gridVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.07, delayChildren: 0.05 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.97 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.55, ease: SMOOTH },
	},
	exit: {
		opacity: 0,
		y: -12,
		scale: 0.97,
		transition: { duration: 0.25, ease: SMOOTH },
	},
};

const Projects = () => {
	const [filter, setFilter] = useState("all");
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const filtered = useMemo(
		() =>
			filter === "all" ? projects : (
				projects.filter((p) => p.category === filter)
			),
		[filter],
	);

	const handleFilter = (key) => {
		setFilter(key);
		setVisibleCount(PAGE_SIZE);
	};

	return (
		<section
			id="Projects"
			className="relative isolate section-container py-16 md:py-24">
			{/* Blob cursor — sits BEHIND content as a decorative layer.
			    listens on window for mousemove so it works regardless of layering. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<CanvasCursor />
			</div>

			<div className="relative z-10">
				<SectionHeader
					eyebrow="Projects"
					title="Things I've built"
					description="A selection of products, hackathon builds, and freelance work spanning web, mobile, and AI."
				/>

				{/* Filter pills */}
				<div className="mb-12 flex flex-wrap justify-center gap-2">
					{FILTERS.map((f) => {
						const active = filter === f.key;
						return (
							<motion.button
								key={f.key}
								onClick={() => handleFilter(f.key)}
								whileTap={{ scale: 0.96 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 22,
								}}
								className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
									active ?
										"bg-accent text-white shadow-glow"
									:	"border border-zinc-800 bg-zinc-900/50 text-ink-secondary hover:border-zinc-700 hover:text-ink-primary"
								}`}>
								{f.label}
							</motion.button>
						);
					})}
				</div>

				{/* Cards grid */}
				<motion.div
					variants={gridVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-60px" }}
					key={filter}
					className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
					<AnimatePresence mode="popLayout">
						{filtered.slice(0, visibleCount).map((project, i) => (
							<motion.div
								key={`${filter}-${i}`}
								variants={cardVariants}
								initial="hidden"
								animate="show"
								exit="exit"
								layout
								className="h-full">
								<ProjectCard project={project} />
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{visibleCount < filtered.length && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						className="mt-12 flex justify-center">
						<Button
							variant="secondary"
							size="md"
							withArrow
							onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}>
							Load more
						</Button>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default Projects;
