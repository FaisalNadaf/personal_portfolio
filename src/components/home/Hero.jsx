/** @format */

import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import BrowserFrame from "../ui/BrowserFrame";
import { clientImage, clientProjects } from "../../data/clientProjects";
import { awardCount } from "../../data/profile";
import { site } from "../../data/site";
import { useTilt } from "../../lib/useTilt";
import { track, EVENTS } from "../../lib/track";

const proof = [
	{ value: String(clientProjects.length), label: "client websites built" },
	{ value: String(awardCount), label: "hackathon and competition awards" },
	{ value: "Full-stack", label: `developer at ${site.currentRole.company}` },
	{ value: "Remote", label: "clients in India and the UAE" },
];

function HeroShowcase() {
	const ref = useRef(null);
	useTilt(ref, 3);
	const front = clientImage("school-excellence-program");
	const back = clientImage("mabda-group");

	return (
		<div ref={ref} className="relative mx-auto w-full max-w-xl lg:max-w-none [perspective:1400px]">
			<div className="tilt-surface relative aspect-[6/5] w-full">
				<BrowserFrame
					{...back}
					sizes="(min-width: 1024px) 34vw, 70vw"
					alt="Homepage of the Mabda Group website, a UAE industrial trade company"
					label="mabdaglobal.com"
					className="absolute right-0 top-0 w-[72%] -rotate-[0.5deg]"
				/>
				<BrowserFrame
					{...front}
					sizes="(min-width: 1024px) 38vw, 80vw"
					alt="Homepage of the School Excellence Program website for CBSE schools"
					label="School Excellence Program"
					priority
					className="absolute bottom-[6%] left-0 w-[80%]"
				/>
				<figure className="absolute -bottom-2 right-[3%] w-[24%] overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-frame">
					<img
						src="/images/personal/blinkit-clone-flutter-480.webp"
						width="480"
						height="603"
						alt="Grocery delivery app built in Flutter, home screen"
						loading="lazy"
						decoding="async"
						className="block aspect-[9/17] w-full object-cover object-top"
					/>
				</figure>
				<span className="absolute -left-2 top-[18%] hidden rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card sm:inline-flex">
					Live client sites
				</span>
			</div>
		</div>
	);
}

export default function Hero() {
	return (
		<section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_85%_-10%,theme(colors.brand.50),transparent_70%),radial-gradient(40rem_24rem_at_0%_0%,theme(colors.mist.50),transparent_70%)]"
			/>
			<div className="container-page grid items-center gap-14 pb-section pt-12 sm:pt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-12 lg:pt-20">
				<div>
					<p className="hero-rise inline-flex items-center gap-2 rounded-full border border-mint-100 bg-mint-50 px-3 py-1 text-xs font-medium text-mint-700">
						<span className="h-1.5 w-1.5 rounded-full bg-mint-700" aria-hidden="true" />
						Available for virtual and freelance work · {site.location.city}, India
					</p>

					<h1 id="hero-title" className="mt-6 text-display font-display text-ink">
						Your virtual developer for{" "}
						<span className="hero-highlight text-brand-700">websites, web apps</span> and AI-powered
						products
					</h1>

					<p className="mt-6 max-w-xl text-lead text-ink-muted">
						I&apos;m {site.name}, a full-stack developer in {site.location.city} ({site.location.altName}).
						Businesses, startups and founders hire me as an ongoing remote developer, or for a defined
						project: a company website, a custom web app, a Flutter mobile app or an AI feature.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
						<Button
							to="/contact?engagement=virtual-developer"
							size="lg"
							onClick={() => track(EVENTS.virtualDeveloperCta, { location: "hero" })}>
							Hire Me as a Virtual Developer
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</Button>
						<Button
							to="/contact?engagement=project"
							variant="secondary"
							size="lg"
							onClick={() => track(EVENTS.projectInquiryCta, { location: "hero" })}>
							Discuss Your Project
						</Button>
					</div>
					<Link to="/client-projects" className="link-arrow mt-5 text-sm">
						See the client websites I have built
						<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
					</Link>

					<dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
						{proof.map((p) => (
							<div key={p.label} className="flex flex-col-reverse justify-end">
								<dt className="mt-0.5 text-xs leading-snug text-ink-muted">{p.label}</dt>
								<dd className="text-lg font-semibold tracking-tight text-ink">{p.value}</dd>
							</div>
						))}
					</dl>
				</div>

				<HeroShowcase />
			</div>
		</section>
	);
}
