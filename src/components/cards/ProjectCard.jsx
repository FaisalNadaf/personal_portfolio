/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { GitHub, Launch } from "@mui/icons-material";
import Card from "../ui/Card";

const FALLBACK_IMG =
	"https://res.cloudinary.com/dcacqhspd/image/upload/v1734715008/Portfolio/projects/rnld60a7b9jyyqsjcv7j.jpg";

const TILT_OPTIONS = {
	max: 8,
	scale: 1,
	speed: 700,
	glare: true,
	"max-glare": 0.18,
	perspective: 1500,
};

const MAX_TAGS = 4;

const ProjectCard = ({ project }) => {
	const imgSrc =
		project.image && project.image !== "" ? project.image : FALLBACK_IMG;
	const hasLive = !!project.webapp;
	const hasGithub = !!project.github;
	const tags = project.tags ?? [];
	const visibleTags = tags.slice(0, MAX_TAGS);
	const extraTags = Math.max(0, tags.length - MAX_TAGS);

	return (
		<Tilt
			options={TILT_OPTIONS}
			className="h-full">
			<div className="h-full">
				<Card className="flex h-[480px] flex-col gap-4 p-5">
					{/* Top accent strip */}
					<div
						aria-hidden
						className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
					/>

					{/* Image — fixed height, never grows */}
					<div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-zinc-800">
						<img
							src={imgSrc}
							alt={project.title}
							loading="lazy"
							className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-indigo-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						/>

						{project.category && (
							<span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/15 bg-zinc-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-primary backdrop-blur-md">
								{project.category}
							</span>
						)}

						{project.date && (
							<span className="absolute right-3 top-3 inline-flex items-center rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-[10px] font-medium text-ink-secondary backdrop-blur-md">
								{project.date}
							</span>
						)}
					</div>

					{/* Body — fixed text heights via line-clamp */}
					<div className="flex min-h-0 flex-1 flex-col">
						<h3 className="line-clamp-2 min-h-[3rem] text-base font-semibold leading-tight text-ink-primary transition-colors duration-200 group-hover:text-accent md:text-lg">
							{project.title}
						</h3>
						<p className="mt-2 line-clamp-3 min-h-[3.75rem] text-sm leading-relaxed text-ink-secondary">
							{project.description}
						</p>
					</div>

					{/* Tags — fixed row, max 4 + overflow indicator */}
					<div className="flex h-7 flex-wrap items-center gap-1.5 overflow-hidden">
						{visibleTags.map((tag) => (
							<motion.span
								key={tag}
								whileHover={{ y: -2, scale: 1.04 }}
								transition={{ type: "spring", stiffness: 420, damping: 22 }}
								className="cursor-default rounded-md border border-zinc-800 bg-zinc-950/40 px-2 py-1 text-[11px] font-medium text-zinc-300 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-ink-primary">
								{tag}
							</motion.span>
						))}
						{extraTags > 0 && (
							<span className="rounded-md border border-zinc-800/60 bg-transparent px-2 py-1 text-[11px] font-medium text-ink-muted">
								+{extraTags}
							</span>
						)}
					</div>

					{/* Action row — always at bottom (mt-auto pushes it) */}
					<div className="mt-auto flex items-center gap-2 border-t border-zinc-800/60 pt-3">
						{hasGithub && (
							<a
								href={project.github}
								target="_blank"
								rel="noreferrer"
								aria-label="View source on GitHub"
								className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1.5 text-xs font-medium text-ink-secondary transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-ink-primary">
								<GitHub sx={{ fontSize: 14 }} />
								<span>Code</span>
							</a>
						)}
						{hasLive && (
							<a
								href={project.webapp}
								target="_blank"
								rel="noreferrer"
								aria-label="View live demo"
								className="group/btn relative ml-auto inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow-sm transition-all duration-200 hover:bg-accent-hover hover:shadow-glow">
								<span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
								<Launch sx={{ fontSize: 14 }} />
								<span className="relative">Live</span>
								<span className="relative inline-block transition-transform duration-200 group-hover/btn:translate-x-0.5">
									→
								</span>
							</a>
						)}
					</div>
				</Card>
			</div>
		</Tilt>
	);
};

export default ProjectCard;
