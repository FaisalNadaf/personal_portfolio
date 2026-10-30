/** @format */

import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register the custom font-size tokens from tailwind.config.js so tailwind-merge
// does not mistake `text-h2` for a text colour and drop it next to `text-ink`.
const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [{ text: ["display", "h1", "h2", "h3", "lead"] }],
		},
	},
});

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
