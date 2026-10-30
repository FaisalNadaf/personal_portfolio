/** @format */

import { Check, Lock } from "lucide-react";
import ProjectDiagram from "./ProjectDiagram";
import Tag from "../ui/Tag";
import { projectStatuses } from "../../data/personalProjects";
import { cn } from "../../utils/utils";

function Visual({ project }) {
	const v = project.visual;
	if (v.kind === "diagram") return <ProjectDiagram name={v.diagram} title={project.title} />;
	return (
		<figure className="overflow-hidden rounded-2xl border border-line bg-white">
			<img
				src={v.src}
				srcSet={v.srcSet}
				sizes="(min-width: 1024px) 45vw, 100vw"
				width={v.width}
				height={v.height}
				alt={v.alt}
				loading="lazy"
				decoding="async"
				className="block h-auto w-full"
			/>
			{v.caption && <figcaption className="border-t border-line px-4 py-2.5 text-xs text-ink-muted">{v.caption}</figcaption>}
		</figure>
	);
}

/**
 * Personal project: the problem, what was built, the technology and the
 * evidence behind it. `layout="wide"` puts the visual beside the text.
 */
export default function PersonalProjectCard({ project, layout = "stacked", headingLevel: H = "h3", reverse = false }) {
	const status = projectStatuses[project.status];
	const wide = layout === "wide";
	return (
		<article
			data-reveal
			className={cn(
				"card grid gap-7 p-6 sm:p-8",
				wide && "lg:grid-cols-2 lg:items-center lg:gap-10",
			)}>
			<div className={cn(wide && reverse && "lg:order-2")}>
				<Visual project={project} />
			</div>
			<div>
				<div className="flex flex-wrap items-center gap-2">
					<Tag tone={status.tone}>{status.label}</Tag>
					<span className="text-xs font-medium text-ink-muted">{project.kind}</span>
				</div>
				<H className="mt-3 text-h3 font-semibold text-ink">{project.title}</H>
				<p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{project.problem}</p>
				<ul className="mt-5 grid gap-2">
					{project.features.map((f) => (
						<li key={f} className="flex gap-2.5 text-sm text-ink-soft">
							<Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-700" aria-hidden="true" />
							{f}
						</li>
					))}
				</ul>
				<ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
					{project.tech.map((t) => (
						<li key={t} className="chip">
							{t}
						</li>
					))}
				</ul>
				{project.evidence && (
					<p className="mt-5 rounded-xl bg-sand-50 p-4 text-sm leading-relaxed text-ink-soft">
						<span className="font-semibold text-ink">Evidence: </span>
						{project.evidence}
					</p>
				)}
				{project.note && (
					<p className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
						<Lock className="h-3.5 w-3.5" aria-hidden="true" />
						{project.note}
					</p>
				)}
			</div>
		</article>
	);
}
