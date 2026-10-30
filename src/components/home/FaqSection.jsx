/** @format */

import { Plus } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "../../data/faqs";

/** Native <details> accordion: works without JavaScript and is fully crawlable. */
export default function FaqSection({ headingLevel = "h2", tinted = false }) {
	return (
		<section aria-labelledby="faq-title" className={`section ${tinted ? "bg-canvas-warm" : ""}`}>
			<div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
				<SectionHeading
					as={headingLevel}
					id="faq-title"
					eyebrow="FAQ"
					title="Questions clients ask before hiring"
					description="Straight answers about how I work. If yours is not here, ask it in the contact form."
				/>
				<div className="divide-y divide-line border-y border-line">
					{faqs.map((f) => (
						<details key={f.q} className="faq-item group">
							<summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-semibold text-ink">
								<h3 className="text-base font-semibold">{f.q}</h3>
								<span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand-100 text-ink-soft group-hover:bg-sand-200">
									<Plus className="h-4 w-4" aria-hidden="true" />
								</span>
							</summary>
							<p className="pb-6 pr-12 text-[0.9375rem] leading-relaxed text-ink-muted">{f.a}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
