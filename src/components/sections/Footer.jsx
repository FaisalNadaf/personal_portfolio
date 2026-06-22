/** @format */

import React from "react";
import {
	FacebookRounded,
	Instagram,
	LinkedIn,
	Twitter,
} from "@mui/icons-material";
import { Bio } from "../../data/constants.js";

const NAV_LINKS = [
	{ href: "#About", label: "About" },
	{ href: "#Skills", label: "Skills" },
	{ href: "#Experience", label: "Experience" },
	{ href: "#Projects", label: "Projects" },
	{ href: "#Education", label: "Education" },
];

const SOCIAL = [
	{ href: Bio.facebook, label: "Facebook", Icon: FacebookRounded },
	{ href: Bio.twitter, label: "Twitter", Icon: Twitter },
	{ href: Bio.linkedin, label: "LinkedIn", Icon: LinkedIn },
	{ href: Bio.insta, label: "Instagram", Icon: Instagram },
];

const Footer = () => {
	return (
		<footer className="relative z-10 border-t border-zinc-800/80 bg-bg/50 pb-10">
			<div className="section-container flex flex-col items-center gap-6 py-10 text-center">
				<a
					href="#About"
					className="text-lg font-semibold text-accent transition-colors hover:text-accent-hover">
					Faisal Nadaf
				</a>

				<nav>
					<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-sm text-ink-secondary transition-colors hover:text-ink-primary">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex items-center gap-2">
					{SOCIAL.map(({ href, label, Icon }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
							className="flex h-10 w-10 items-center justify-center rounded-full text-ink-secondary transition-all duration-200 hover:bg-accent/10 hover:text-accent">
							<Icon fontSize="small" />
						</a>
					))}
				</div>

				<p className="text-xs text-ink-muted">
					&copy; {new Date().getFullYear()} Faisal Nadaf. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
