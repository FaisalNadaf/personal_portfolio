/** @format */

import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "../ui/BrandIcons";
import { personalImage } from "../../data/personalProjects";
import { track, EVENTS } from "../../lib/track";

export default function OpenSourceCard({ project }) {
	const img = personalImage(project.image);
	return (
		<article className="hover-lift card hover-zoom flex h-full flex-col overflow-hidden">
			<div className="aspect-[16/10] overflow-hidden border-b border-line bg-sand-50">
				<img
					src={img.src}
					srcSet={img.srcSet}
					sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
					alt={`Screenshot of the ${project.title}`}
					loading="lazy"
					decoding="async"
					className="block h-full w-full object-cover object-top"
				/>
			</div>
			<div className="flex flex-1 flex-col p-5">
				<h3 className="text-base font-semibold text-ink">{project.title}</h3>
				<p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
				<p className="mt-3 text-xs text-ink-muted">{project.tech.join(" · ")}</p>
				<div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4 text-sm">
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => track(EVENTS.personalProjectOpened, { project: project.id, target: "github" })}
						className="inline-flex items-center gap-1.5 py-1 font-medium text-ink-soft hover:text-ink">
						<BrandIcon name="github" className="h-4 w-4" />
						Source code<span className="visually-hidden">: {project.title} on GitHub (opens in a new tab)</span>
					</a>
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => track(EVENTS.personalProjectOpened, { project: project.id, target: "live" })}
							className="link-arrow">
							Live demo<span className="visually-hidden">: {project.title} (opens in a new tab)</span>
							<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
						</a>
					)}
				</div>
			</div>
		</article>
	);
}
