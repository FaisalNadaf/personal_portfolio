/** @format */

import React, { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { hackathons } from "../../data/constants";
import HacakathonCard from "../cards/HacakathonCard";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import ScrollTimelineLine from "../ui/ScrollTimelineLine";
import SectionTopShimmer from "../ui/SectionTopShimmer";

const PAGE_SIZE = 3;

const Hackathon = () => {
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const timelineRef = useRef(null);

	const sorted = useMemo(
		() =>
			[...hackathons].sort(
				(a, b) => Number(b.winner === true) - Number(a.winner === true),
			),
		[],
	);

	const winnersCount = useMemo(
		() => sorted.filter((h) => h.winner).length,
		[sorted],
	);

	const remaining = sorted.length - visibleCount;

	return (
		<section
			id="Hackathon"
			className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 md:py-24">
			<SectionTopShimmer />
			<SectionHeader
				eyebrow="Hackathons"
				title="Building under pressure"
				description="Innovation in tight deadlines — collaborating with teams to ship working products in days."
			/>

			{/* Stats row */}
			<div className="mb-10 flex flex-wrap items-center justify-center gap-3">
				<span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-ink-secondary">
					<span className="h-1.5 w-1.5 rounded-full bg-accent" />
					{sorted.length} Hackathons
				</span>
				{winnersCount > 0 && (
					<span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
						<span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
						{winnersCount} Winner{winnersCount > 1 ? "s" : ""}
					</span>
				)}
			</div>

			<div
				ref={timelineRef}
				className="relative">
				<ScrollTimelineLine targetRef={timelineRef} />

				<VerticalTimeline lineColor="rgb(39 39 42)">
					{sorted.slice(0, visibleCount).map((experience, index) => (
						<HacakathonCard
							key={`hackathon-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>

			{visibleCount < sorted.length && (
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					className="mt-10 flex justify-center">
					<Button
						variant="secondary"
						withArrow
						onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}>
						Load more <span className="text-ink-muted">+{remaining}</span>
					</Button>
				</motion.div>
			)}
		</section>
	);
};

export default Hackathon;
