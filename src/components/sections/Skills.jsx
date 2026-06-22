/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { skills } from "../../data/constants";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const SMOOTH = [0.22, 0.61, 0.36, 1];

const containerVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.1, delayChildren: 0.15 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: SMOOTH },
	},
};

const TILT_OPTIONS = {
	max: 8,
	scale: 1,
	speed: 700,
	glare: true,
	"max-glare": 0.15,
	perspective: 1500,
};

const Skills = () => {
	return (
		<section
			id="Skills"
			className="section-container py-16 md:py-24">
			<SectionHeader
				eyebrow="Skills"
				title="What I work with"
				description="Technologies and tools I've been building with over the past 2+ years."
			/>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-80px" }}
				className="grid gap-6 md:grid-cols-2 lg:gap-8">
				{skills.map((group, i) => (
					<motion.div
						key={`skill-group-${i}`}
						variants={cardVariants}>
						<Tilt options={TILT_OPTIONS}>
							<div>
								<Card className="relative overflow-hidden p-7 md:p-8">
									{/* Top accent strip */}
									<div
										aria-hidden
										className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
									/>

									{/* Soft corner glow on hover */}
									<div
										aria-hidden
										className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
									/>

									{/* Header — glowing accent dot + title */}
									<div className="relative mb-6 flex items-center justify-center gap-2.5">
										<span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
										<h3 className="text-lg font-semibold tracking-tight text-ink-primary md:text-xl">
											{group.title}
										</h3>
										<span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
									</div>

									{/* Skill chips */}
									<div className="relative flex flex-wrap justify-center gap-2.5">
										{group.skills.map((item, j) => (
											<motion.div
												key={`skill-${i}-${j}`}
												whileHover={{ y: -2, scale: 1.03 }}
												whileTap={{ scale: 0.97 }}
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 22,
												}}
												className="group/chip inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-ink-primary hover:shadow-glow-sm">
												{item.image && (
													<img
														src={item.image}
														alt=""
														className="h-5 w-5 object-contain transition-transform duration-200 group-hover/chip:scale-110"
													/>
												)}
												<span className="font-medium">{item.name}</span>
											</motion.div>
										))}
									</div>
								</Card>
							</div>
						</Tilt>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Skills;
