/** @format */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import ProjectDiagram from "../projects/ProjectDiagram";
import { featuredPersonalProjects, projectStatuses } from "../../data/personalProjects";

function Visual({ project }) {
	const v = project.visual;
	if (v.kind === "diagram") return <ProjectDiagram name={v.diagram} title={project.title} />;
	return (
		<figure className="overflow-hidden rounded-2xl border border-line bg-white">
			<img
				src={v.src}
				srcSet={v.srcSet}
				sizes="(min-width: 1024px) 30vw, 100vw"
				width={v.width}
				height={v.height}
				alt={v.alt}
				loading="lazy"
				decoding="async"
				className="block h-auto w-full"
			/>
		</figure>
	);
}

export default function PersonalHighlights() {
	return (
		<section aria-labelledby="products-title" className="section">
			<div className="container-page">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionHeading
						id="products-title"
						eyebrow="Products I have built"
						title="My own products and prototypes"
						description="Beyond client websites: products where I designed the architecture, wrote the tests and made the hard calls."
					/>
					<Link to="/personal-projects" className="link-arrow shrink-0 text-sm">
						All personal projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
					</Link>
				</div>

				<div className="mt-12 grid gap-5 lg:grid-cols-3">
					{featuredPersonalProjects.map((p, i) => (
						<article key={p.id} data-reveal style={{ "--reveal-index": i }} className="card flex flex-col gap-6 p-6">
							<Visual project={p} />
							<div className="flex flex-1 flex-col">
								<div className="flex flex-wrap items-center gap-2">
									<Tag tone={projectStatuses[p.status].tone}>{projectStatuses[p.status].label}</Tag>
								</div>
								<h3 className="mt-3 text-h3 font-semibold text-ink">{p.title}</h3>
								<p className="text-sm font-medium text-ink-muted">{p.kind}</p>
								<p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.problem}</p>
								<p className="mt-4 text-xs text-ink-muted">{p.tech.slice(0, 5).join(" · ")}</p>
								<Link to={`/personal-projects#${p.id}`} className="link-arrow mt-auto pt-5 text-sm">
									How {p.title} works <ArrowRight className="h-4 w-4" aria-hidden="true" />
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
