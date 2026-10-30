/** @format */

import { Link } from "react-router-dom";
import { cn } from "../../utils/utils";

// Labels may wrap on very narrow screens (min-height, not a fixed height).
const base =
	"inline-flex select-none items-center justify-center gap-2 rounded-full text-center font-medium leading-snug transition-[background-color,color,box-shadow,transform] duration-fast ease-standard active:scale-[0.98] motion-reduce:transform-none disabled:cursor-not-allowed disabled:opacity-60 [&>svg]:shrink-0";

const variants = {
	primary:
		"bg-brand-600 text-white shadow-[0_1px_2px_rgba(16,24,40,0.1),inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-brand-700",
	secondary: "bg-white text-ink ring-1 ring-inset ring-line-strong hover:bg-sand-50 hover:ring-ink/25",
	soft: "bg-brand-50 text-brand-700 hover:bg-brand-100",
	ghost: "text-ink-soft hover:bg-sand-100 hover:text-ink",
	dark: "bg-ink text-white hover:bg-ink-soft",
};

const sizes = {
	sm: "min-h-9 px-4 py-1.5 text-sm",
	md: "min-h-11 px-5 py-2.5 text-[0.9375rem]",
	lg: "min-h-12 px-6 py-3 text-base",
};

const buttonClasses = ({ variant = "primary", size = "md", className } = {}) =>
	cn(base, variants[variant], sizes[size], className);

/**
 * Renders a router Link (`to`), an anchor (`href`) or a button.
 * External anchors open in a new tab with safe rel attributes.
 */
export default function Button({ to, href, external = false, variant, size, className, children, ...rest }) {
	const classes = buttonClasses({ variant, size, className });
	if (to) {
		return (
			<Link to={to} className={classes} {...rest}>
				{children}
			</Link>
		);
	}
	if (href) {
		return (
			<a
				href={href}
				className={classes}
				{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
				{...rest}>
				{children}
			</a>
		);
	}
	return (
		<button type="button" className={classes} {...rest}>
			{children}
		</button>
	);
}
