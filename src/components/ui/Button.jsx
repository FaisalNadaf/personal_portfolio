/** @format */

import React from "react";

const variants = {
	primary:
		"bg-accent text-white hover:bg-accent-hover hover:shadow-glow focus-visible:ring-accent",
	secondary:
		"border border-zinc-700 bg-zinc-900/40 text-ink-primary backdrop-blur-sm hover:border-accent hover:text-accent hover:bg-accent/5 focus-visible:ring-zinc-500",
	ghost:
		"bg-transparent text-ink-secondary hover:bg-white/5 hover:text-ink-primary focus-visible:ring-zinc-500",
};

const sizes = {
	sm: "px-4 py-1.5 text-sm",
	md: "px-5 py-2 text-sm",
	lg: "px-6 py-3 text-base",
};

const Button = ({
	as: Tag = "button",
	variant = "primary",
	size = "md",
	withArrow = false,
	className = "",
	children,
	...rest
}) => {
	const base =
		"group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60";

	return (
		<Tag
			className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
			{...rest}>
			{variant === "primary" && (
				<span
					aria-hidden
					className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
				/>
			)}
			<span className="relative z-[1]">{children}</span>
			{withArrow && (
				<span
					aria-hidden
					className="relative z-[1] inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5">
					→
				</span>
			)}
		</Tag>
	);
};

export default Button;
