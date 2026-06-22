/** @format */

import React from "react";

const baseCardClass =
	"card-spotlight group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-md shadow-black/20 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-zinc-700 hover:shadow-glow-sm";

const Card = React.forwardRef(function Card(
	{ as: Tag = "div", className = "", children, ...rest },
	ref,
) {
	return (
		<Tag
			ref={ref}
			className={`${baseCardClass} ${className}`}
			{...rest}>
			{children}
		</Tag>
	);
});

export default Card;
