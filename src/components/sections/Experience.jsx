/** @format */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data/constants.js";
import ExperienceCard from "../cards/ExperienceCard";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import ScrollTimelineLine from "../ui/ScrollTimelineLine";
import SectionTopShimmer from "../ui/SectionTopShimmer";

const PAGE_SIZE = 3;

const Experience = () => {
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const timelineRef = useRef(null);
	const remaining = experiences.length - visibleCount;
	const visible = experiences.slice(0, visibleCount);

	return (
		<section
			id="Experience"
			className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 md:py-24">
			<SectionTopShimmer />
			<SectionHeader
				eyebrow="Experience"
				title="Where I've worked"
				description="A timeline of internships, freelance work, and the teams I've shipped real software with."
			/>

			<div
				ref={timelineRef}
				className="relative">
				<ScrollTimelineLine targetRef={timelineRef} />

				<VerticalTimeline lineColor="rgb(39 39 42)">
					<AnimatePresence initial={false}>
						{visible.map((experience, index) => (
							<ExperienceCard
								key={`experience-${experience.id ?? index}`}
								experience={experience}
							/>
						))}
					</AnimatePresence>
				</VerticalTimeline>
			</div>

			{visibleCount < experiences.length && (
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

export default Experience;
