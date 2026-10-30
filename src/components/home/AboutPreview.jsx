/** @format */

import { ArrowRight, Briefcase, Globe2, Trophy, GraduationCap } from "lucide-react";
import Button from "../ui/Button";
import { site } from "../../data/site";
import { clientProjects } from "../../data/clientProjects";
import { awardCount, hackathons } from "../../data/profile";

const facts = [
	{
		icon: Briefcase,
		title: `Full-Stack Developer at ${site.currentRole.company}`,
		text: "Building and shipping web applications in an agile team, with CI/CD and Git workflows.",
	},
	{
		icon: Globe2,
		title: `${clientProjects.length} client websites`,
		text: "For businesses in Belagavi, elsewhere in India and in the UAE, across education, industry, trade and media.",
	},
	{
		icon: Trophy,
		title: `${awardCount} awards across ${hackathons.length} hackathons and competitions`,
		text: "Rapid builds under time pressure, from AI privacy tools to agriculture apps.",
	},
	{
		icon: GraduationCap,
		title: "Bachelor of Computer Applications",
		text: "KLE's RLS Institute (Autonomous), Belagavi.",
	},
];

export default function AboutPreview() {
	return (
		<section aria-labelledby="about-title" className="section">
			<div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
				<div className="relative mx-auto w-full max-w-sm lg:max-w-none" data-reveal>
					<div className="aspect-square overflow-hidden rounded-[2rem] border border-line bg-sand-100 shadow-frame">
						<img
							src="/images/faisal-nadaf-800.webp"
							srcSet="/images/faisal-nadaf-400.webp 400w, /images/faisal-nadaf-800.webp 800w"
							sizes="(min-width: 1024px) 34vw, 90vw"
							width="800"
							height="800"
							alt="Portrait of Faisal Nadaf"
							loading="lazy"
							decoding="async"
							className="h-full w-full object-cover"
						/>
					</div>
					<p className="absolute -bottom-4 left-6 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-card">
						{site.location.city} ({site.location.altName}), Karnataka
					</p>
				</div>

				<div>
					<p className="eyebrow">About</p>
					<h2 id="about-title" className="mt-3 text-h2 font-semibold text-ink">
						A developer you can work with directly
					</h2>
					<p className="mt-4 text-lead text-ink-muted">
						I&apos;m {site.name}. You talk to the person who writes the code, from the first question to
						the final release. I work across the whole stack, from interfaces to APIs, databases, mobile
						apps and AI features, and I care about sites that load fast and work for everyone.
					</p>
					<ul className="mt-8 grid gap-5 sm:grid-cols-2">
						{facts.map(({ icon: Icon, title, text }) => (
							<li key={title} className="flex gap-3">
								<span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
									<Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
								</span>
								<div>
									<p className="text-sm font-semibold text-ink">{title}</p>
									<p className="mt-1 text-sm text-ink-muted">{text}</p>
								</div>
							</li>
						))}
					</ul>
					<div className="mt-8">
						<Button to="/about" variant="secondary">
							More about my background
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
