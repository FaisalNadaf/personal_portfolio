/** @format */

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { Bio } from "../../data/constants";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import StarCanvas from "../canvas/Stars";
import MagnetoButton from "../MagnetoButton";
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
} from "../../utils/motion";
import Orb from "../costom/Orb";

const Hero = () => {
	const [orbActive, setOrbActive] = useState(false);
	return (
		<section
			id="About"
			className="relative isolate overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,70%_95%,0_100%)]">
			{/* Ambient blur orbs */}
			<div className="absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
			<div className="absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

			{/* Star canvas + decorative SVG bg */}
			<div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center md:justify-end">
				<div className="relative h-full w-full max-w-[1360px] px-0 md:px-8">
					<StarCanvas />
					<HeroBgAnimation />
				</div>
			</div>

			<motion.div
				{...headContainerAnimation}
				className="section-container py-20 md:py-10">
				<div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
					{/* Left: text */}
					<div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
						<motion.div {...headTextAnimation}>
							<span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
								</span>
								Available for work
							</span>

							<h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink-primary sm:text-5xl md:text-6xl">
								Hi, I am <br />
								<span className="text-gradient-accent">{Bio.name}</span>
							</h1>

							<div className="mt-4 flex items-center justify-center gap-3 text-2xl font-semibold text-ink-primary md:justify-start md:text-3xl">
								<span>I am a</span>
								<span className="text-accent">
									<Typewriter
										options={{
											strings: Bio.roles,
											autoStart: true,
											loop: true,
										}}
									/>
								</span>
							</div>
						</motion.div>

						<motion.p
							{...headContentAnimation}
							className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
							{Bio.description}
						</motion.p>

						<a
							href={Bio.resume}
							target="_blank"
							rel="noreferrer"
							className="mt-12 inline-flex self-center no-underline">
							<MagnetoButton text={"Resume"} />
						</a>
					</div>

					{/* Right: image with focused grid backdrop + orb */}
					<div className="order-1 flex justify-center md:order-2 md:justify-end">
						<motion.div
							{...headContentAnimation}
							onMouseEnter={() => setOrbActive(true)}
							onMouseLeave={() => setOrbActive(false)}
							className="relative">
							{/* Focused grid backdrop — sits behind the image with radial fade */}
							<div
								aria-hidden
								className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 bg-grid-lines mask-radial-fade"
							/>

							{/* WebGL Orb — sits ABOVE the image, additive-blended.
							    pointer-events-none lets Tilt receive mouse events on the image,
							    forceHoverState keeps the orb animating continuously. */}
							<div
								aria-hidden
								className="pointer-events-none absolute left-1/2 top-1/2 z-10 aspect-square w-[22rem] -translate-x-1/2 -translate-y-1/2 mix-blend-screen sm:w-[26rem] md:w-[34rem]">
								<Orb
									hoverIntensity={0.8}
									rotateOnHover
									hue={0}
									forceHoverState={orbActive}
									backgroundColor="#09090b"
								/>
							</div>

							<Tilt
								options={{
									max: 12,
									scale: 1.02,
									speed: 800,
								}}>
								<img
									src={HeroImg}
									alt="Faisal Nadaf"
									loading="eager"
									className="pointer-events-auto relative h-auto w-68 rounded-full border-2 border-accent/70 shadow-glow-lg ring-1 ring-white/10 sm:w-80 md:w-96"
								/>
							</Tilt>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
