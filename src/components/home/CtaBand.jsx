/** @format */

import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { track, EVENTS } from "../../lib/track";

export default function CtaBand({
	title = "Have something to build, or a backlog that keeps growing?",
	text = "Tell me what you need. I reply to every message and help you choose the right way to work together.",
}) {
	return (
		<section aria-labelledby="cta-title" className="pb-section">
			<div className="container-page">
				<div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12">
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-20%,rgba(91,103,236,0.45),transparent_70%)]"
					/>
					<div className="relative mx-auto max-w-2xl">
						<h2 id="cta-title" className="text-h2 font-semibold text-white">
							{title}
						</h2>
						<p className="mt-4 text-lead text-white/75">{text}</p>
						<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
							<Button
								to="/contact?engagement=virtual-developer"
								size="lg"
								className="bg-white text-ink shadow-none hover:bg-brand-50"
								onClick={() => track(EVENTS.virtualDeveloperCta, { location: "cta-band" })}>
								Hire Me as a Virtual Developer
								<ArrowRight className="h-4 w-4" aria-hidden="true" />
							</Button>
							<Button
								to="/contact?engagement=project"
								size="lg"
								variant="dark"
								className="ring-1 ring-inset ring-white/25 hover:bg-white/10"
								onClick={() => track(EVENTS.projectInquiryCta, { location: "cta-band" })}>
								Discuss Your Project
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
