/** @format */

import { MapPin, Phone, Clock } from "lucide-react";
import { BrandIcon } from "../ui/BrandIcons";
import { site } from "../../data/site";

export default function ContactAside() {
	return (
		<aside className="grid content-start gap-5 lg:sticky lg:top-24 lg:self-start">
			<div className="card p-6">
				<h3 className="text-base font-semibold text-ink">Prefer to reach out directly?</h3>
				<ul className="mt-4 grid gap-3 text-sm">
					<li>
						<a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-ink-soft hover:text-ink">
							<span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
								<Phone className="h-4 w-4" aria-hidden="true" />
							</span>
							{site.phone}
						</a>
					</li>
					<li>
						<a
							href={site.links.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 text-ink-soft hover:text-ink">
							<span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
								<BrandIcon name="linkedin" className="h-4 w-4" />
							</span>
							Message me on LinkedIn
							<span className="visually-hidden"> (opens in a new tab)</span>
						</a>
					</li>
					<li>
						<a
							href={site.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 text-ink-soft hover:text-ink">
							<span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
								<BrandIcon name="github" className="h-4 w-4" />
							</span>
							See my code on GitHub
							<span className="visually-hidden"> (opens in a new tab)</span>
						</a>
					</li>
					<li className="flex items-center gap-3 text-ink-soft">
						<span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
							<MapPin className="h-4 w-4" aria-hidden="true" />
						</span>
						{site.location.city} ({site.location.altName}), {site.location.region}. Working remotely with clients in India and abroad.
					</li>
				</ul>
			</div>
			<div className="card p-6">
				<h3 className="flex items-center gap-2 text-base font-semibold text-ink">
					<Clock className="h-4 w-4 text-brand-700" aria-hidden="true" />
					What happens next
				</h3>
				<ol className="mt-4 grid gap-3 text-sm text-ink-muted">
					<li>
						<span className="font-semibold text-ink">1.</span> I read your message and usually reply within 24 hours.
					</li>
					<li>
						<span className="font-semibold text-ink">2.</span> We talk through your goals, scope and timeline.
					</li>
					<li>
						<span className="font-semibold text-ink">3.</span> You receive a plan with the approach and next steps.
					</li>
				</ol>
			</div>
		</aside>
	);
}
