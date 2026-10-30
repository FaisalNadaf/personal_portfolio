/** @format */

import { ArrowUpRight } from "lucide-react";
import { clientImage, getClientProject } from "../../data/clientProjects";
import { track, EVENTS } from "../../lib/track";
import { cn } from "../../utils/utils";

/* Asymmetric layout for the strongest projects: one large, three supporting. */
const tiles = [
	{ id: "mabda-group", span: "lg:col-span-7 lg:row-span-2", large: true, tone: "bg-ink text-white" },
	{ id: "school-excellence-program", span: "lg:col-span-5", tone: "bg-brand-50" },
	{ id: "simran-technology", span: "lg:col-span-5", tone: "bg-sand-100" },
	{ id: "lbs-kidz", span: "lg:col-span-12 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center", tone: "bg-mint-50", row: true },
];

export default function ClientBento() {
	return (
		<div className="grid gap-5 lg:grid-cols-12">
			{tiles.map((t, i) => {
				const p = getClientProject(t.id);
				const img = clientImage(p.id);
				const dark = t.tone.includes("bg-ink");
				return (
					<article
						key={t.id}
						data-reveal
						style={{ "--reveal-index": i }}
						className={cn(
							"hover-zoom group relative overflow-hidden rounded-3xl border border-line",
							t.large && "lg:flex lg:flex-col",
							t.tone,
							t.span,
						)}>
						<div className={cn("p-6 sm:p-8", t.row && "lg:order-2")}>
							<p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", dark ? "text-brand-200" : "text-brand-700")}>
								Featured client
							</p>
							<h3 className={cn("mt-2 font-semibold", t.large ? "text-h2" : "text-h3", dark ? "text-white" : "text-ink")}>
								<a
									href={p.url}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => track(EVENTS.clientProjectOpened, { project: p.id, location: "bento" })}
									className="after:absolute after:inset-0 after:content-['']">
									{p.title}
									<span className="visually-hidden"> (opens the live website in a new tab)</span>
								</a>
							</h3>
							<p className={cn("mt-2 max-w-xl text-sm leading-relaxed", dark ? "text-white/75" : "text-ink-muted")}>
								{p.description}
							</p>
							<span
								aria-hidden="true"
								className={cn("mt-4 inline-flex items-center gap-1 text-sm font-medium", dark ? "text-white" : "text-brand-700")}>
								View live website <ArrowUpRight className="h-4 w-4" />
							</span>
						</div>
						<div
							className={cn(
								"px-6 pb-6 sm:px-8 sm:pb-8",
								t.row && "lg:order-1 lg:py-8 lg:pr-0",
								t.large && "lg:flex lg:min-h-0 lg:flex-1 lg:flex-col",
							)}>
							<div
								className={cn(
									"overflow-hidden rounded-xl border border-white/10 shadow-frame",
									t.large && "lg:min-h-0 lg:flex-1 [&>img]:lg:h-full [&>img]:lg:object-cover [&>img]:lg:object-top",
								)}>
								<img
									src={img.src}
									srcSet={img.srcSet}
									sizes={t.large ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
									width={img.width}
									height={img.height}
									alt={`Homepage of the ${p.title} website`}
									loading="lazy"
									decoding="async"
									className="block h-auto w-full"
								/>
							</div>
						</div>
					</article>
				);
			})}
		</div>
	);
}
