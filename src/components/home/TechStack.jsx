/** @format */

import { Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { techStack } from "../../data/techStack";

export default function TechStack({ headingLevel = "h2" }) {
	return (
		<section aria-labelledby="stack-title" className="section bg-canvas-warm">
			<div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
				<SectionHeading
					as={headingLevel}
					id="stack-title"
					eyebrow="Technology"
					title="Tools I use to build and ship"
					description="Every technology here is used in the client websites, products or roles shown on this site."
				/>
				<dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
					{techStack.map((group) => (
						<div key={group.group} data-reveal>
							<dt className="text-sm font-semibold text-ink">{group.group}</dt>
							<dd className="mt-3">
								<ul className="flex flex-wrap gap-2">
									{group.items.map((t) => (
										<li
											key={t.name}
											className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-1.5 text-sm text-ink-soft">
											{t.logo ? (
												<img
													src={`/images/tech/${t.logo}.svg`}
													alt=""
													width="16"
													height="16"
													loading="lazy"
													className="h-4 w-4"
												/>
											) : (
												<Sparkles className="h-4 w-4 text-lavender-600" aria-hidden="true" />
											)}
											{t.name}
										</li>
									))}
								</ul>
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
