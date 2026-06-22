/** @format */

import React from "react";
import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Launch } from "@mui/icons-material";
import {
	timelineContentStyle,
	timelineContentArrowStyle,
	timelineIconStyle,
} from "../ui/timelineStyles";

const SMOOTH = [0.22, 0.61, 0.36, 1];

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.07, delayChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: SMOOTH },
	},
};

const chipSpring = {
	type: "spring",
	stiffness: 420,
	damping: 22,
};

const isCurrent = (date) =>
	typeof date === "string" && /present|current|now/i.test(date);

const ExperienceCard = ({ experience }) => {
	const current = isCurrent(experience?.date);

	return (
		<VerticalTimelineElement
			iconStyle={{
				...timelineIconStyle,
				...(current
					? {
							boxShadow:
								"0 0 0 4px rgb(24, 24, 27), 0 0 0 6px rgba(34,197,94,0.5), 0 0 24px rgba(34,197,94,0.4)",
						}
					: {}),
			}}
			icon={
				<img
					alt={experience?.company}
					src={experience?.img}
					className="h-full w-full rounded-full object-cover"
				/>
			}
			contentStyle={timelineContentStyle}
			contentArrowStyle={timelineContentArrowStyle}
			date={experience?.date}>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-40px" }}
				className="group/exp relative flex flex-col gap-4">
				{/* Header: logo + role + company + status */}
				<motion.div
					variants={itemVariants}
					className="flex items-start gap-4">
					<div className="relative shrink-0">
						<motion.img
							src={experience?.img}
							alt=""
							whileHover={{ scale: 1.06, rotate: -2 }}
							transition={{ type: "spring", stiffness: 300, damping: 18 }}
							className="h-14 w-14 rounded-xl object-cover ring-1 ring-zinc-800"
						/>
						{current && (
							<span className="absolute -right-1 -top-1 flex h-3 w-3">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
								<span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-zinc-900" />
							</span>
						)}
					</div>

					<div className="flex flex-1 flex-col">
						<h3 className="text-base font-semibold leading-tight text-ink-primary md:text-lg">
							{experience?.role}
						</h3>
						<p className="mt-0.5 text-sm font-medium text-ink-secondary">
							{experience?.company}
						</p>
						<div className="mt-1.5 flex flex-wrap items-center gap-2">
							<span className="text-xs text-ink-muted">{experience?.date}</span>
							{current && (
								<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
									<span className="h-1 w-1 rounded-full bg-emerald-400" />
									Current
								</span>
							)}
						</div>
					</div>
				</motion.div>

				{/* Divider */}
				{experience?.desc && (
					<motion.div
						variants={itemVariants}
						aria-hidden
						className="h-px w-full bg-gradient-to-r from-zinc-800/50 via-zinc-800 to-zinc-800/50"
					/>
				)}

				{/* Description */}
				{experience?.desc && (
					<motion.p
						variants={itemVariants}
						className="text-sm leading-relaxed text-ink-primary/90">
						{experience.desc}
					</motion.p>
				)}

				{/* Skills */}
				{experience?.skills?.length > 0 && (
					<motion.div variants={itemVariants}>
						<p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
							Tech & skills
						</p>
						<div className="flex flex-wrap gap-1.5">
							{experience.skills.map((skill, i) => (
								<motion.span
									key={i}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{
										...chipSpring,
										delay: 0.25 + i * 0.025,
									}}
									whileHover={{ y: -3, scale: 1.06 }}
									whileTap={{ scale: 0.96 }}
									className="cursor-default rounded-md border border-zinc-800 bg-zinc-950/40 px-2 py-1 text-xs font-medium text-zinc-300 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-ink-primary hover:shadow-glow-sm">
									{skill}
								</motion.span>
							))}
						</div>
					</motion.div>
				)}

				{/* Optional document link */}
				{experience?.doc && (
					<motion.a
						variants={itemVariants}
						href={experience.doc}
						target="_blank"
						rel="noreferrer"
						className="group/doc inline-flex w-fit items-center gap-1.5 self-start rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:border-accent/60 hover:bg-accent/15 hover:shadow-glow-sm">
						<Launch sx={{ fontSize: 14 }} />
						<span>View document</span>
						<span className="inline-block transition-transform duration-200 group-hover/doc:translate-x-0.5">
							→
						</span>
					</motion.a>
				)}
			</motion.div>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
