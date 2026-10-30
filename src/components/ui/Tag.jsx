/** @format */

import { cn } from "../../utils/utils";

const tones = {
	neutral: "border-line bg-white text-ink-soft",
	brand: "border-brand-100 bg-brand-50 text-brand-700",
	mist: "border-mist-100 bg-mist-50 text-mist-600",
	lavender: "border-lavender-100 bg-lavender-50 text-lavender-600",
	mint: "border-mint-100 bg-mint-50 text-mint-700",
	sand: "border-sand-200 bg-sand-50 text-ink-soft",
};

export default function Tag({ tone = "neutral", className, children }) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
				tones[tone],
				className,
			)}>
			{children}
		</span>
	);
}
