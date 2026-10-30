/** @format */

import { ArrowUpRight } from "lucide-react";
import { clientImage, clientCategories } from "../../data/clientProjects";
import { track, EVENTS } from "../../lib/track";
import { cn } from "../../utils/utils";

const categoryLabel = (id) => clientCategories.find((c) => c.id === id)?.label ?? id;
const hostOf = (url) => new URL(url).host.replace(/^www\./, "");

/**
 * Client website card: real homepage screenshot, verified name, description,
 * categories and a link to the live site. The whole card is one link target
 * (the title link is stretched), so there is a single tab stop per project.
 */
export default function ClientProjectCard({ project, className, headingLevel: H = "h3", sizes }) {
	const img = clientImage(project.id);
	return (
		<article className={cn("hover-lift card hover-zoom group relative flex h-full flex-col overflow-hidden", className)}>
			<div className="relative aspect-[1440/1000] overflow-hidden border-b border-line bg-sand-50">
				<img
					src={img.src}
					srcSet={img.srcSet}
					sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
					width={img.width}
					height={img.height}
					alt={`Homepage of the ${project.title} website`}
					loading="lazy"
					decoding="async"
					className="block h-full w-full object-cover object-top"
				/>
			</div>
			<div className="flex flex-1 flex-col p-5">
				<p className="text-xs font-medium text-brand-700">
					{project.categories.map(categoryLabel).join(" · ")}
				</p>
				<H className="mt-1.5 text-base font-semibold text-ink">
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => track(EVENTS.clientProjectOpened, { project: project.id, location: "grid" })}
						className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-brand-600">
						{project.title}
						<span className="visually-hidden"> (opens the live website in a new tab)</span>
					</a>
				</H>
				<p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
				<div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
					<span className="min-w-0 truncate text-ink-muted">{hostOf(project.url)}</span>
					<span className="inline-flex shrink-0 items-center gap-1 font-medium text-brand-700" aria-hidden="true">
						View live website <ArrowUpRight className="h-4 w-4" />
					</span>
				</div>
			</div>
		</article>
	);
}
