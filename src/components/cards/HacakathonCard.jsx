/** @format */

import React from "react";
import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { EmojiEvents } from "@mui/icons-material";
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

const chipSpring = { type: "spring", stiffness: 420, damping: 22 };

const HacakathonCard = ({ experience }) => {
	const isWinner = !!experience?.winner;

	return (
		<VerticalTimelineElement
			iconStyle={{
				...timelineIconStyle,
				...(isWinner
					? {
							boxShadow:
								"0 0 0 4px rgb(24, 24, 27), 0 0 0 6px rgba(251, 191, 36, 0.5), 0 0 28px rgba(251, 191, 36, 0.5)",
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
				className="relative flex flex-col gap-4">
				{/* Header */}
				<motion.div
					variants={itemVariants}
					className="flex items-start justify-between gap-3">
					<div className="flex items-start gap-4">
						<motion.img
							src={experience?.img}
							alt=""
							whileHover={{ scale: 1.06, rotate: -2 }}
							transition={{ type: "spring", stiffness: 300, damping: 18 }}
							className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-zinc-800"
						/>
						<div className="flex flex-col">
							<h3 className="text-base font-semibold leading-tight text-ink-primary md:text-lg">
								{experience?.role}
							</h3>
							<p className="mt-0.5 text-sm font-medium text-ink-secondary">
								{experience?.company}
							</p>
							<span className="mt-1 text-xs text-ink-muted">
								{experience?.date}
							</span>
						</div>
					</div>

					{isWinner && (
						<motion.span
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ ...chipSpring, delay: 0.3 }}
							className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-400/20 to-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.25)]">
							<EmojiEvents sx={{ fontSize: 14 }} />
							Winner
						</motion.span>
					)}
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
			</motion.div>
		</VerticalTimelineElement>
	);
};

export default HacakathonCard;
