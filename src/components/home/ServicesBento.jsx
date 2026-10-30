/** @format */

import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ServiceVisual from "../services/ServiceVisual";
import { services } from "../../data/services";
import { cn } from "../../utils/utils";
import { track, EVENTS } from "../../lib/track";

const toneBg = {
	lavender: "bg-lavender-50/60",
	mist: "bg-mist-50/70",
	sand: "bg-sand-50",
	mint: "bg-mint-50/60",
};

/* Layout per service: grid span and where the visual sits. */
const layout = {
	"virtual-developer": { span: "lg:col-span-7", direction: "row", details: true },
	"web-development": { span: "lg:col-span-5", direction: "top" },
	"full-stack-development": { span: "lg:col-span-4", direction: "bottom" },
	"mobile-app-development": { span: "lg:col-span-4", direction: "top" },
	"ai-integration": { span: "lg:col-span-4", direction: "bottom" },
	"api-development": { span: "lg:col-span-6", direction: "row" },
	maintenance: { span: "lg:col-span-6", direction: "row" },
	"technical-consulting": { span: "lg:col-span-12", direction: "row", details: true },
};

function ServiceCard({ service, index }) {
	const { span, direction, details } = layout[service.id];
	const visual = <ServiceVisual visual={service.visual} className="w-full" />;
	const isRow = direction === "row";

	return (
		<article
			data-reveal
			style={{ "--reveal-index": index % 3 }}
			className={cn(
				"hover-lift card flex flex-col gap-6 overflow-hidden p-6 sm:p-7 md:col-span-1",
				toneBg[service.tone],
				span,
				isRow && "lg:flex-row lg:items-center",
				service.id === "technical-consulting" && "md:col-span-2",
			)}>
			{direction === "top" && visual}
			<div className={cn("flex flex-1 flex-col", isRow && "lg:max-w-md")}>
				<h3 className="text-h3 font-semibold text-ink">{service.title}</h3>
				<p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">{service.summary}</p>
				{details && (
					<ul className="mt-4 grid gap-2">
						{service.details.map((d) => (
							<li key={d} className="flex gap-2.5 text-sm text-ink-soft">
								<Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-700" aria-hidden="true" />
								{d}
							</li>
						))}
					</ul>
				)}
				<ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
					{service.tech.map((t) => (
						<li key={t} className="chip">
							{t}
						</li>
					))}
				</ul>
				<Link
					to={`/services#${service.id}`}
					onClick={() => track(EVENTS.serviceExplored, { service: service.id })}
					className="link-arrow mt-5 text-sm">
					Explore {service.title}
					<ArrowRight className="h-4 w-4" aria-hidden="true" />
				</Link>
			</div>
			{direction !== "top" && <div className={cn(isRow && "lg:w-[46%] lg:shrink-0")}>{visual}</div>}
		</article>
	);
}

export default function ServicesBento() {
	return (
		<section aria-labelledby="services-title" className="section">
			<div className="container-page">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionHeading
						id="services-title"
						eyebrow="Services"
						title="Development help for the way your business works"
						description="Ongoing remote development or a single defined project, across websites, web apps, mobile apps and AI."
					/>
					<Link to="/services" className="link-arrow shrink-0 text-sm">
						All services in detail <ArrowRight className="h-4 w-4" aria-hidden="true" />
					</Link>
				</div>
				<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
					{services.map((s, i) => (
						<ServiceCard key={s.id} service={s} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
