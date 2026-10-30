/** @format */

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import ServiceVisual from "../components/services/ServiceVisual";
import HiringModels from "../components/home/HiringModels";
import ProcessTimeline from "../components/home/ProcessTimeline";
import CtaBand from "../components/home/CtaBand";
import { services } from "../data/services";
import { getClientProject, clientImage } from "../data/clientProjects";
import { personalProjects } from "../data/personalProjects";
import { track, EVENTS } from "../lib/track";
import { cn } from "../utils/utils";

const toneBg = { lavender: "bg-lavender-50", mist: "bg-mist-50", sand: "bg-sand-100", mint: "bg-mint-50" };

function RelatedWork({ service }) {
	const clients = service.related.client.map(getClientProject).filter(Boolean);
	const personal = service.related.personal.map((id) => personalProjects.find((p) => p.id === id)).filter(Boolean);
	if (!clients.length && !personal.length) return null;
	return (
		<div className="mt-8">
			<h3 className="text-sm font-semibold text-ink">Related work</h3>
			<ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
				{clients.map((p) => {
					const img = clientImage(p.id);
					return (
						<li key={p.id}>
							<a
								href={p.url}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => track(EVENTS.clientProjectOpened, { project: p.id, location: "services" })}
								className="flex items-center gap-3 rounded-xl border border-line bg-white p-2 pr-3 text-sm text-ink-soft transition-colors hover:border-line-strong hover:text-ink">
								<img
									src={img.src}
									alt=""
									width="72"
									height="50"
									loading="lazy"
									className="h-[50px] w-[72px] shrink-0 rounded-md object-cover object-top"
								/>
								<span className="min-w-0 flex-1 truncate font-medium">{p.title}</span>
								<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
								<span className="visually-hidden">(opens the live website in a new tab)</span>
							</a>
						</li>
					);
				})}
				{personal.map((p) => (
					<li key={p.id}>
						<Link
							to={`/personal-projects#${p.id}`}
							className="flex h-full items-center gap-3 rounded-xl border border-line bg-white p-3 text-sm text-ink-soft transition-colors hover:border-line-strong hover:text-ink">
							<span className="min-w-0 flex-1">
								<span className="block font-medium text-ink">{p.title}</span>
								<span className="block truncate text-xs text-ink-muted">{p.kind}</span>
							</span>
							<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function ServicesPage() {
	return (
		<>
			<PageHeader
				crumb="Services"
				eyebrow="Services"
				title="Web, app and AI development services from Belagavi"
				description="I work with businesses, startups and founders in Belagavi (Belgaum), across India and abroad, either as an ongoing virtual developer or on defined freelance projects.">
				<nav aria-label="Services on this page" className="mt-8">
					<ul className="flex flex-wrap gap-2">
						{services.map((s) => (
							<li key={s.id}>
								<a href={`#${s.id}`} className="chip hover:border-line-strong hover:text-ink">
									{s.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</PageHeader>

			<div className="container-page divide-y divide-line">
				{services.map((s, i) => (
					<section
						key={s.id}
						id={s.id}
						aria-labelledby={`${s.id}-title`}
						className="grid scroll-mt-24 grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
						<div className={cn(i % 2 === 1 && "lg:order-2")}>
							<p className="text-sm font-semibold text-brand-700">
								{String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
							</p>
							<h2 id={`${s.id}-title`} className="mt-2 text-h2 font-semibold text-ink">
								{s.title}
							</h2>
							<p className="mt-4 text-lead text-ink-muted">{s.summary}</p>
							<h3 className="mt-8 text-sm font-semibold text-ink">What this includes</h3>
							<ul className="mt-3 grid gap-2.5">
								{s.details.map((d) => (
									<li key={d} className="flex gap-3 text-[0.9375rem] text-ink-soft">
										<Check className="mt-0.5 h-5 w-5 shrink-0 text-mint-700" aria-hidden="true" />
										{d}
									</li>
								))}
							</ul>
							<p className="mt-6 text-sm text-ink-muted">
								<span className="font-semibold text-ink">Technologies: </span>
								{s.tech.join(", ")}
							</p>
							<RelatedWork service={s} />
							<div className="mt-8">
								<Button
									to={s.id === "virtual-developer" ? "/contact?engagement=virtual-developer" : "/contact?engagement=project"}
									variant={i === 0 ? "primary" : "secondary"}
									onClick={() =>
										track(s.id === "virtual-developer" ? EVENTS.virtualDeveloperCta : EVENTS.projectInquiryCta, {
											location: `services-${s.id}`,
										})
									}>
									{s.cta}
									<ArrowRight className="h-4 w-4" aria-hidden="true" />
								</Button>
							</div>
						</div>
						<div className={cn("rounded-3xl p-6 sm:p-10", toneBg[s.tone], i % 2 === 1 && "lg:order-1")}>
							<ServiceVisual visual={s.visual} className="w-full" />
						</div>
					</section>
				))}
			</div>

			<HiringModels />
			<ProcessTimeline />
			<CtaBand />
		</>
	);
}
