/** @format */

import React, { useRef } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data/constants.js";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";
import SectionHeader from "../ui/SectionHeader";
import ScrollTimelineLine from "../ui/ScrollTimelineLine";
import SectionTopShimmer from "../ui/SectionTopShimmer";

const Education = () => {
	const timelineRef = useRef(null);

	return (
		<section
			id="Education"
			className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 md:py-24">
			<SectionTopShimmer />
			<SectionHeader
				eyebrow="Education"
				title="My academic journey"
				description="The institutions and milestones that shaped how I think and build."
			/>

			<div
				ref={timelineRef}
				className="relative">
				<ScrollTimelineLine targetRef={timelineRef} />

				<VerticalTimeline lineColor="rgb(39 39 42)">
					{education.map((item, index) => (
						<EducationCard
							key={`education-${index}`}
							education={item}
						/>
					))}
				</VerticalTimeline>
			</div>

			<div className="mt-12">
				<EarthCanvas />
			</div>
		</section>
	);
};

export default Education;
