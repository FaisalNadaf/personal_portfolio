/** @format */

import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { School } from "@mui/icons-material";
import {
	timelineContentStyle,
	timelineContentArrowStyle,
	timelineIconStyle,
} from "../ui/timelineStyles";

const EducationCard = ({ education }) => {
	return (
		<VerticalTimelineElement
			iconStyle={timelineIconStyle}
			icon={
				<img
					alt={education?.school}
					src={education?.img}
					className="h-full w-full rounded-full object-cover"
				/>
			}
			contentStyle={timelineContentStyle}
			contentArrowStyle={timelineContentArrowStyle}
			date={education?.date}>
			<div className="flex flex-col gap-4">
				{/* Header: logo + school + degree */}
				<div className="flex items-start gap-4">
					<img
						src={education?.img}
						alt=""
						className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-zinc-800"
					/>
					<div className="flex flex-1 flex-col">
						<h3 className="text-base font-semibold leading-tight text-ink-primary md:text-lg">
							{education?.school}
						</h3>
						<p className="mt-0.5 text-sm font-medium text-ink-secondary">
							{education?.degree}
						</p>
						<span className="mt-1 text-xs text-ink-muted">
							{education?.date}
						</span>
					</div>
				</div>

				{/* Grade pill */}
				{education?.grade && (
					<div className="flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs">
						<School
							sx={{ fontSize: 14 }}
							className="text-accent"
						/>
						<span className="font-semibold text-accent">Grade</span>
						<span className="text-ink-primary">{education.grade}</span>
					</div>
				)}

				{/* Divider */}
				{education?.desc && (
					<div
						aria-hidden
						className="h-px w-full bg-gradient-to-r from-zinc-800/50 via-zinc-800 to-zinc-800/50"
					/>
				)}

				{/* Description */}
				{education?.desc && (
					<p className="text-sm leading-relaxed text-ink-primary/90">
						{education.desc}
					</p>
				)}
			</div>
		</VerticalTimelineElement>
	);
};

export default EducationCard;
