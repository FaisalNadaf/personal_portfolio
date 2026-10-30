/** @format */

import { ArrowUpRight, Trophy, Gauge, MessagesSquare, ShieldCheck, Accessibility } from "lucide-react";
import PageHeader from "../components/layout/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";
import TechStack from "../components/home/TechStack";
import CtaBand from "../components/home/CtaBand";
import { experiences, education, hackathons, awardCount, eventPhotos } from "../data/profile";
import { clientProjects } from "../data/clientProjects";
import { site } from "../data/site";

const principles = [
	{
		icon: MessagesSquare,
		title: "Direct communication",
		text: "You work with the person writing the code. Questions get answered quickly and progress is visible.",
	},
	{
		icon: ShieldCheck,
		title: "Honest about trade-offs",
		text: "I say what a choice costs before we make it, and I report results as they are, including the ones that did not work.",
	},
	{
		icon: Gauge,
		title: "Fast by default",
		text: "Optimised images, lean code and careful loading, so pages stay quick on everyday phones and networks.",
	},
	{
		icon: Accessibility,
		title: "Built for everyone",
		text: "Semantic markup, keyboard support and readable contrast are part of the work, not an afterthought.",
	},
];

const VISIBLE_EVENTS = 8;

function EventItem({ h }) {
	return (
		<li className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
			<p className="text-sm text-ink-muted">{h.date}</p>
			<div>
				<h3 className="flex flex-wrap items-center gap-2 text-base font-semibold text-ink">
					{h.event}
					{h.award && (
						<Tag tone="mint">
							<Trophy className="h-3 w-3" aria-hidden="true" /> Award
						</Tag>
					)}
				</h3>
				<p className="text-sm text-ink-muted">{h.venue}</p>
				<p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{h.summary}</p>
			</div>
		</li>
	);
}

export default function AboutPage() {
	return (
		<>
			<PageHeader
				crumb="About"
				eyebrow="About"
				title={`${site.name}, full-stack developer in ${site.location.city} (${site.location.altName})`}
				description={`I build websites, web applications, mobile apps and AI features. By day I am a full-stack developer at ${site.currentRole.company}; alongside that I work with clients as a virtual developer and on freelance projects.`}
				aside={
					<div className="mx-auto w-full max-w-xs lg:max-w-sm">
						<div className="aspect-square overflow-hidden rounded-[2rem] border border-line bg-sand-100 shadow-frame">
							<img
								src="/images/faisal-nadaf-800.webp"
								srcSet="/images/faisal-nadaf-400.webp 400w, /images/faisal-nadaf-800.webp 800w"
								sizes="(min-width: 1024px) 24rem, 20rem"
								width="800"
								height="800"
								alt="Portrait of Faisal Nadaf"
								// React 18 passes the lowercase DOM attribute through unchanged.
								{...{ fetchpriority: "high" }}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				}>
				<div className="mt-8 flex flex-wrap gap-3">
					<Button to="/contact">Work with me</Button>
					<Button href={site.links.resume} external variant="secondary">
						View résumé
						<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
						<span className="visually-hidden">(opens in a new tab)</span>
					</Button>
				</div>
			</PageHeader>

			<section aria-labelledby="summary-title" className="section">
				<div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
					<SectionHeading id="summary-title" eyebrow="In short" title="What I bring to a project" />
					<div className="grid gap-5 text-lead text-ink-muted">
						<p>
							I have built {clientProjects.length} live websites for businesses in Belagavi, elsewhere in India and
							in the UAE, from manufacturers and trading companies to schools and newspapers. At {site.currentRole.company}{" "}
							I build and maintain full-stack applications with an agile team, with automated build and release
							pipelines.
						</p>
						<p>
							On my own I build products end to end: a trading intelligence platform with 257 automated tests, an
							AI writing assistant for WhatsApp Web, and Flutter apps for farmers and clinics. I have also taken part
							in {hackathons.length} hackathons and competitions and received {awardCount} awards.
						</p>
					</div>
				</div>
			</section>

			<section aria-labelledby="experience-title" className="section bg-canvas-warm">
				<div className="container-page">
					<SectionHeading id="experience-title" eyebrow="Experience" title="Where I have worked" />
					<ol className="relative mt-10 grid gap-5 border-l border-line-strong pl-6 sm:pl-8">
						{experiences.map((x) => (
							<li key={x.id} data-reveal className="relative">
								<span
									aria-hidden="true"
									className={`absolute -left-[1.94rem] top-6 h-3 w-3 rounded-full ring-4 ring-canvas-warm sm:-left-[2.44rem] ${x.current ? "bg-mint-700" : "bg-brand-300"}`}
								/>
								<article className="card p-6">
									<div className="flex flex-wrap items-start justify-between gap-3">
										<div>
											<h3 className="text-h3 font-semibold text-ink">{x.role}</h3>
											<p className="mt-0.5 font-medium text-ink-soft">{x.company}</p>
										</div>
										<div className="flex items-center gap-2">
											{x.current && <Tag tone="mint">Current</Tag>}
											<p className="text-sm text-ink-muted">{x.date}</p>
										</div>
									</div>
									<p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{x.description}</p>
									<ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
										{x.skills.map((s) => (
											<li key={s} className="chip">
												{s}
											</li>
										))}
									</ul>
									{x.website && (
										<a
											href={x.website}
											target="_blank"
											rel="noopener noreferrer"
											className="link-arrow mt-4 text-sm">
											Visit website<span className="visually-hidden">: {x.company} (opens in a new tab)</span>
											<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
										</a>
									)}
								</article>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section aria-labelledby="education-title" className="section">
				<div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
					<SectionHeading id="education-title" eyebrow="Education" title="Academic background" />
					<ul className="grid gap-4">
						{education.map((e) => (
							<li key={e.id} className="card p-6">
								<div className="flex flex-wrap items-start justify-between gap-2">
									<h3 className="text-base font-semibold text-ink">{e.degree}</h3>
									<p className="text-sm text-ink-muted">{e.date}</p>
								</div>
								<p className="mt-1 text-sm font-medium text-ink-soft">{e.school}</p>
								{e.detail && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{e.detail}</p>}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section aria-labelledby="awards-title" className="section bg-canvas-warm">
				<div className="container-page">
					<SectionHeading
						id="awards-title"
						eyebrow="Hackathons"
						title={`${awardCount} awards across ${hackathons.length} hackathons and competitions`}
						description="Events where I built working software against the clock, in sessions of 12 to 48 hours."
					/>
					<ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
						{eventPhotos.map((photo) => (
							<li key={photo.src} className="overflow-hidden rounded-2xl border border-line bg-white">
								<img
									src={photo.src}
									alt={photo.alt}
									width="800"
									height="600"
									loading="lazy"
									decoding="async"
									className="block aspect-[4/3] h-auto w-full object-cover"
								/>
							</li>
						))}
					</ul>
					<div className="mt-10 rounded-3xl border border-line bg-white px-6 sm:px-8">
						<ul className="divide-y divide-line">
							{hackathons.slice(0, VISIBLE_EVENTS).map((h) => (
								<EventItem key={`${h.event}-${h.date}`} h={h} />
							))}
						</ul>
						<details className="border-t border-line">
							<summary className="cursor-pointer py-4 text-sm font-medium text-brand-700">
								Show {hackathons.length - VISIBLE_EVENTS} earlier events
							</summary>
							<ul className="divide-y divide-line border-t border-line">
								{hackathons.slice(VISIBLE_EVENTS).map((h) => (
									<EventItem key={`${h.event}-${h.date}`} h={h} />
								))}
							</ul>
						</details>
					</div>
				</div>
			</section>

			<section aria-labelledby="principles-title" className="section">
				<div className="container-page">
					<SectionHeading id="principles-title" eyebrow="How I work" title="Principles I keep on every project" />
					<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{principles.map(({ icon: Icon, title, text }, i) => (
							<li key={title} data-reveal style={{ "--reveal-index": i }} className="card p-6">
								<span className="grid h-10 w-10 place-items-center rounded-xl bg-lavender-50 text-lavender-600">
									<Icon className="h-5 w-5" aria-hidden="true" />
								</span>
								<h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<TechStack />
			<div className="pt-section">
				<CtaBand />
			</div>
		</>
	);
}
