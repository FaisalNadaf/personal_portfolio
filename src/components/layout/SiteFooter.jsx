/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Logo from "../ui/Logo";
import { BrandIcon } from "../ui/BrandIcons";
import { navLinks, site, socialLinks } from "../../data/site";
import { services } from "../../data/services";
import { featuredClientProjects } from "../../data/clientProjects";

const BUILD_YEAR = 2026;

function FooterColumn({ title, children }) {
	return (
		<div>
			<h2 className="text-sm font-semibold text-ink">{title}</h2>
			<ul className="mt-3 grid gap-1 text-sm">{children}</ul>
		</div>
	);
}

const footerLink = "inline-block py-1 text-ink-muted transition-colors hover:text-ink";

export default function SiteFooter() {
	// Prerendered with the build year; updated in the browser so it stays current.
	const [year, setYear] = useState(BUILD_YEAR);
	useEffect(() => setYear(new Date().getFullYear()), []);

	return (
		<footer className="border-t border-line bg-canvas-warm">
			<div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
				<div className="max-w-sm">
					<Logo />
					<p className="mt-5 text-sm leading-relaxed text-ink-muted">
						Full-stack developer in {site.location.city} ({site.location.altName}), Karnataka. Hire me as an
						ongoing virtual developer or for a defined freelance project.
					</p>
					<ul className="mt-5 grid gap-2 text-sm text-ink-muted">
						<li className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-ink-faint" aria-hidden="true" />
							{site.location.city}, {site.location.region}, {site.location.country}
						</li>
						<li>
							<a href={`tel:${site.phone.replace(/\s+/g, "")}`} className={`flex items-center gap-2 ${footerLink}`}>
								<Phone className="h-4 w-4 text-ink-faint" aria-hidden="true" />
								{site.phone}
							</a>
						</li>
					</ul>
					<ul className="mt-6 flex gap-2" aria-label="Social profiles">
						{socialLinks.map((s) => (
							<li key={s.key}>
								<a
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									className="grid h-10 w-10 place-items-center rounded-full text-ink-muted ring-1 ring-inset ring-line transition-colors hover:bg-white hover:text-ink">
									<BrandIcon name={s.key} className="h-[1.05rem] w-[1.05rem]" />
									<span className="visually-hidden">{s.label} (opens in a new tab)</span>
								</a>
							</li>
						))}
					</ul>
				</div>

				<FooterColumn title="Pages">
					{navLinks.map((l) => (
						<li key={l.to}>
							<Link to={l.to} className={footerLink}>
								{l.label}
							</Link>
						</li>
					))}
				</FooterColumn>

				<FooterColumn title="Services">
					{services.map((s) => (
						<li key={s.id}>
							<Link to={`/services#${s.id}`} className={footerLink}>
								{s.title}
							</Link>
						</li>
					))}
				</FooterColumn>

				<FooterColumn title="Selected client work">
					{featuredClientProjects.slice(0, 6).map((p) => (
						<li key={p.id}>
							<a href={p.url} target="_blank" rel="noopener noreferrer" className={footerLink}>
								{p.title}
								<span className="visually-hidden"> (opens in a new tab)</span>
							</a>
						</li>
					))}
					<li>
						<Link to="/client-projects" className="inline-block py-1 font-medium text-brand-700 hover:underline">
							All client projects
						</Link>
					</li>
				</FooterColumn>
			</div>

			<div className="border-t border-line">
				<div className="container-page flex flex-col gap-3 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
					<p>
						&copy; {year} {site.name}. All rights reserved.
					</p>
					<Link to="/privacy" className={footerLink}>
						Privacy policy
					</Link>
				</div>
			</div>
		</footer>
	);
}
