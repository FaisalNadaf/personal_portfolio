/** @format */

import React from "react";

const WinnerButton = ({
	children,
	onClick,
	type = "button",
	disabled = false,
	className = "",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 px-6 py-2 text-sm font-semibold capitalize text-zinc-900 shadow-md transition-all duration-300 hover:from-amber-200 hover:via-amber-300 hover:to-amber-400 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 ${className}`}>
			{children}
		</button>
	);
};

export default WinnerButton;
