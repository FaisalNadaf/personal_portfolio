/** @format */

import { cn } from "../../utils/utils";

/**
 * Section heading block. `as` sets the heading level so pages keep a correct
 * outline (one h1 per page, h2 for sections).
 */
export default function SectionHeading({
	eyebrow,
	title,
	description,
	as: Heading = "h2",
	align = "left",
	id,
	className,
	children,
}) {
	return (
		<div
			className={cn(
				"max-w-2xl",
				align === "center" && "mx-auto text-center",
				className,
			)}>
			{eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
			<Heading
				id={id}
				className={cn(
					"font-semibold text-ink",
					Heading === "h1" ? "text-h1" : "text-h2",
				)}>
				{title}
			</Heading>
			{description && <p className="mt-4 text-lead text-ink-muted">{description}</p>}
			{children}
		</div>
	);
}
