/** @format */

import { ArrowRight, Check, MessageSquareText, PhoneCall, FileCheck2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { track, EVENTS } from "../../lib/track";

const models = [
	{
		id: "virtual-developer",
		label: "Ongoing",
		title: "Virtual Developer",
		intro:
			"A dedicated remote developer working on your product week after week, alongside your team or as your whole development capacity.",
		points: [
			"Feature development from your backlog",
			"Bug fixes, maintenance and dependency updates",
			"Work inside your repository, sprints and tools",
			"Regular updates on what shipped and what is next",
			"Flexible scope, agreed and reviewed together",
		],
		bestFor: "Startups and businesses with a steady stream of development work.",
		cta: { label: "Hire Me as a Virtual Developer", to: "/contact?engagement=virtual-developer", event: EVENTS.virtualDeveloperCta },
		tint: "from-brand-50 to-white border-brand-100",
		badge: "bg-brand-600 text-white",
	},
	{
		id: "project",
		label: "Project-based",
		title: "Freelance Project",
		intro:
			"A defined piece of work with a clear outcome: a new website, a web or mobile app, an API or an AI feature, delivered and handed over.",
		points: [
			"Requirements and scope agreed up front",
			"Design, development and integration",
			"Testing across devices and browsers",
			"Deployment to your hosting",
			"Handover with documentation and access",
		],
		bestFor: "Founders and companies with a specific product or website to build.",
		cta: { label: "Discuss Your Project", to: "/contact?engagement=project", event: EVENTS.projectInquiryCta },
		tint: "from-mint-50 to-white border-mint-100",
		badge: "bg-mint-700 text-white",
	},
];

const steps = [
	{ icon: MessageSquareText, title: "Send a short brief", text: "Use the contact form to describe what you need, even if it is still rough." },
	{ icon: PhoneCall, title: "Talk it through", text: "I reply with questions and we discuss the goals, scope and constraints." },
	{ icon: FileCheck2, title: "Agree the plan", text: "You get a clear plan with the approach and next steps before work begins." },
];

export default function HiringModels() {
	return (
		<section aria-labelledby="hiring-title" className="section bg-canvas-warm">
			<div className="container-page">
				<SectionHeading
					id="hiring-title"
					eyebrow="Ways to work together"
					title="Two simple ways to hire me"
					description="Choose ongoing support or a single project. Either way, we agree the scope and how we will work before anything starts."
					align="center"
				/>

				<div className="mt-12 grid gap-5 lg:grid-cols-2">
					{models.map((m, i) => (
						<article
							key={m.id}
							data-reveal
							style={{ "--reveal-index": i }}
							className={`flex flex-col rounded-3xl border bg-gradient-to-b p-7 shadow-card sm:p-9 ${m.tint}`}>
							<span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${m.badge}`}>{m.label}</span>
							<h3 className="mt-5 text-h2 font-semibold text-ink">{m.title}</h3>
							<p className="mt-3 text-ink-muted">{m.intro}</p>
							<ul className="mt-6 grid gap-3">
								{m.points.map((p) => (
									<li key={p} className="flex gap-3 text-[0.9375rem] text-ink-soft">
										<Check className="mt-0.5 h-5 w-5 shrink-0 text-mint-700" aria-hidden="true" />
										{p}
									</li>
								))}
							</ul>
							<p className="mt-6 border-t border-line pt-5 text-sm text-ink-muted">
								<span className="font-semibold text-ink">Best for: </span>
								{m.bestFor}
							</p>
							<div className="mt-6">
								<Button to={m.cta.to} onClick={() => track(m.cta.event, { location: "hiring-models" })}>
									{m.cta.label}
									<ArrowRight className="h-4 w-4" aria-hidden="true" />
								</Button>
							</div>
						</article>
					))}
				</div>

				<div className="mt-14">
					<h3 className="text-center text-h3 font-semibold text-ink">How to get started</h3>
					<ol className="mt-8 grid gap-5 md:grid-cols-3">
						{steps.map(({ icon: Icon, title, text }, i) => (
							<li key={title} data-reveal style={{ "--reveal-index": i }} className="card flex gap-4 p-5">
								<span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
									<Icon className="h-5 w-5" aria-hidden="true" />
								</span>
								<div>
									<p className="text-xs font-semibold text-ink-muted">Step {i + 1}</p>
									<p className="mt-0.5 font-semibold text-ink">{title}</p>
									<p className="mt-1 text-sm text-ink-muted">{text}</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
