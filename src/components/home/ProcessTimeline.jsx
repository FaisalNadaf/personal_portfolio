/** @format */

import { Search, ClipboardList, PenTool, Code2, FlaskConical, Rocket, RefreshCw } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { processSteps } from "../../data/process";

const icons = { Search, ClipboardList, PenTool, Code2, FlaskConical, Rocket, RefreshCw };

/** Connected step timeline: vertical on small screens, a horizontal rail on wide ones. */
export default function ProcessTimeline({ headingLevel = "h2" }) {
	return (
		<section aria-labelledby="process-title" className="section">
			<div className="container-page">
				<SectionHeading
					as={headingLevel}
					id="process-title"
					eyebrow="Process"
					title="A clear path from first message to launch"
					description="The same steps for a one-off project or the first weeks of an ongoing engagement, so you always know what happens next."
				/>
				<ol className="relative mt-12 grid gap-8 xl:grid-cols-7 xl:gap-4">
					<span
						aria-hidden="true"
						className="absolute bottom-2 left-[1.375rem] top-2 w-px bg-gradient-to-b from-brand-200 via-line-strong to-mint-100 xl:bottom-auto xl:left-6 xl:right-6 xl:top-[1.375rem] xl:h-px xl:w-auto xl:bg-gradient-to-r"
					/>
					{processSteps.map((step, i) => {
						const Icon = icons[step.icon];
						return (
							<li
								key={step.id}
								data-reveal
								style={{ "--reveal-index": i }}
								className="relative grid grid-cols-[2.75rem_1fr] gap-4 xl:grid-cols-1 xl:gap-5">
								<span className="relative z-[1] grid h-11 w-11 place-items-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-card">
									<Icon className="h-5 w-5" aria-hidden="true" />
								</span>
								<div>
									<p className="text-xs font-semibold text-ink-muted">Step {i + 1}</p>
									<h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.text}</p>
								</div>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
