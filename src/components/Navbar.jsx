/** @format */

import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { Bio } from "../data/constants";
import SvgTextLoader from "./SvgTextLoader";

const NAV_LINKS = [
	{ href: "#About", label: "About" },
	{ href: "#Skills", label: "Skills" },
	{ href: "#Experience", label: "Experience" },
	{ href: "#Projects", label: "Projects" },
	{ href: "#Achievements", label: "Achievements" },
	{ href: "#Certifications", label: "Certifications" },
	{ href: "#Education", label: "Education" },
	{ href: "#Contact", label: "Contact" },
];

const navLinkClass =
	"whitespace-nowrap text-sm font-medium text-ink-primary/90 hover:text-accent transition-colors duration-200";

// Smooth, slightly anticipatory ease — feels premium without being slow
const SMOOTH_EASE = "ease-[cubic-bezier(0.22,0.61,0.36,1)]";
const TRANSITION = `transition-all duration-[600ms] ${SMOOTH_EASE}`;

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const close = () => setIsOpen(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav className="sticky top-0 z-40 w-full">
			{/* Outer wrapper — animates inset (top + side margins) */}
			<div
				className={`px-4 sm:px-6 ${TRANSITION} ${
					scrolled ? "pt-4 md:pt-5" : "pt-0"
				}`}>
				<div
					className={`mx-auto ${TRANSITION} ${
						scrolled ? "max-w-6xl" : "max-w-container"
					}`}>
					<div
						className={`relative flex items-center justify-between border-white/5 bg-bg/70 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/55 ${TRANSITION} ${
							scrolled
								? "h-14 rounded-full border shadow-xl shadow-black/40 ring-1 ring-white/10"
								: "h-16 rounded-none border-b md:h-20"
						}`}>
						<LinkR
							to="/"
							className="flex items-center"
							aria-label="Home">
							<SvgTextLoader />
						</LinkR>

						<ul className="hidden items-center gap-5 lg:flex xl:gap-7">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className={navLinkClass}>
										{link.label}
									</a>
								</li>
							))}
						</ul>

						<div className="hidden lg:flex">
							<a
								href={Bio.github}
								target="_blank"
								rel="noreferrer"
								className={`inline-flex items-center rounded-full border border-accent/60 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-glow ${
									scrolled ? "px-4 py-1.5" : "px-5 py-2"
								}`}>
								Github
							</a>
						</div>

						<button
							type="button"
							aria-label={isOpen ? "Close menu" : "Open menu"}
							aria-expanded={isOpen}
							onClick={() => setIsOpen((v) => !v)}
							className="inline-flex items-center justify-center rounded-md p-2 text-ink-primary lg:hidden">
							{isOpen ? <CloseRounded /> : <MenuRounded />}
						</button>

						{/* Mobile dropdown — anchored to the inner pill */}
						<div
							className={`absolute left-0 right-0 top-full mt-2 origin-top overflow-hidden rounded-2xl border border-white/5 bg-bg-elevated/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
								isOpen
									? "pointer-events-auto translate-y-0 opacity-100"
									: "pointer-events-none -translate-y-2 opacity-0"
							}`}>
							<ul className="flex flex-col gap-1 p-4">
								{NAV_LINKS.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											onClick={close}
											className="block rounded-md px-3 py-2 text-base font-medium text-ink-primary/90 hover:bg-white/5 hover:text-accent">
											{link.label}
										</a>
									</li>
								))}
								<li className="mt-2">
									<a
										href={Bio.github}
										target="_blank"
										rel="noreferrer"
										onClick={close}
										className="block rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
										Github Profile
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
