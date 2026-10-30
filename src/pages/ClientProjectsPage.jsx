/** @format */

import PageHeader from "../components/layout/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import ClientBento from "../components/projects/ClientBento";
import ClientProjectGrid from "../components/projects/ClientProjectGrid";
import CtaBand from "../components/home/CtaBand";
import { clientProjects } from "../data/clientProjects";

export default function ClientProjectsPage() {
	return (
		<>
			<PageHeader
				crumb="Client Projects"
				eyebrow="Real-world client work"
				title={`${clientProjects.length} live websites built for businesses`}
				description="Education providers, manufacturers, trading companies, publishers and technology firms in Belagavi, elsewhere in India and in the UAE. Every screenshot below is the real homepage, and every card links to the live site."
			/>

			<section aria-labelledby="featured-title" className="section">
				<div className="container-page">
					<SectionHeading id="featured-title" eyebrow="Featured" title="Selected projects" />
					<div className="mt-10">
						<ClientBento />
					</div>
				</div>
			</section>

			<section aria-labelledby="all-title" className="section bg-canvas-warm">
				<div className="container-page">
					<SectionHeading
						id="all-title"
						eyebrow="All client projects"
						title="Browse by industry"
						description="Technology labels appear only where the live site itself shows clear evidence of the framework used."
					/>
					<div className="mt-8">
						<ClientProjectGrid />
					</div>
					<p className="mt-10 text-sm text-ink-muted">
						Homepage screenshots were captured from the live websites on 19 October 2026 at a 1440 by 1000
						desktop viewport. The sites may have changed since. Some projects are hosted on preview or staging
						addresses.
					</p>
				</div>
			</section>

			<CtaBand title="Need a website like these?" text="Tell me about your business and what your website needs to do. I will reply with questions and a clear plan." />
		</>
	);
}
