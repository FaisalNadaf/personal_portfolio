/** @format */

import React from "react";

const SectionHeader = ({ title, description, eyebrow }) => {
	return (
		<header className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
			{eyebrow && (
				<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
					<span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
					{eyebrow}
				</span>
			)}
			<h2 className="text-3xl font-bold tracking-tight text-ink-primary md:text-4xl">
				{title}
			</h2>
			<div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
			{description && (
				<p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
					{description}
				</p>
			)}
		</header>
	);
};

export default SectionHeader;
