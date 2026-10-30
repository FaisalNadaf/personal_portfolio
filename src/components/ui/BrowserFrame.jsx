/** @format */

import { cn } from "../../utils/utils";

/**
 * Minimal browser chrome around a real website screenshot. The image keeps its
 * intrinsic aspect ratio (width/height attributes) so nothing shifts on load.
 */
export default function BrowserFrame({
	src,
	srcSet,
	sizes = "(min-width: 1024px) 50vw, 100vw",
	width = 1440,
	height = 1000,
	alt,
	label,
	priority = false,
	className,
	imgClassName,
}) {
	return (
		<figure className={cn("browser-frame", className)}>
			<div className="flex h-7 items-center gap-1.5 border-b border-line bg-sand-50 px-3" aria-hidden="true">
				<span className="h-2 w-2 rounded-full bg-[#F87171]" />
				<span className="h-2 w-2 rounded-full bg-[#FBBF24]" />
				<span className="h-2 w-2 rounded-full bg-[#34D399]" />
				{label && (
					<span className="ml-2 truncate rounded-md bg-white px-2 py-0.5 text-[0.6875rem] text-ink-muted ring-1 ring-line">
						{label}
					</span>
				)}
			</div>
			<img
				src={src}
				srcSet={srcSet}
				sizes={sizes}
				width={width}
				height={height}
				alt={alt}
				loading={priority ? "eager" : "lazy"}
				decoding={priority ? "sync" : "async"}
				{...(priority ? { fetchpriority: "high" } : {})}
				className={cn("block h-auto w-full", imgClassName)}
			/>
		</figure>
	);
}
