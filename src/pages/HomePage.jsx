/** @format */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/home/Hero";
import ServicesBento from "../components/home/ServicesBento";
import HiringModels from "../components/home/HiringModels";
import PersonalHighlights from "../components/home/PersonalHighlights";
import ProcessTimeline from "../components/home/ProcessTimeline";
import TechStack from "../components/home/TechStack";
import AboutPreview from "../components/home/AboutPreview";
import FaqSection from "../components/home/FaqSection";
import FeaturedCarousel from "../components/projects/FeaturedCarousel";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import ContactAside from "../components/contact/ContactAside";
import { clientProjects, featuredClientProjects } from "../data/clientProjects";

export default function HomePage() {
	return (
		<>
			<Hero />
			<ServicesBento />
			<HiringModels />

			<section aria-labelledby="work-title" className="section motion-contain-x">
				<div className="container-page mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionHeading
						id="work-title"
						eyebrow="Client work"
						title="Real websites for real businesses"
						description={`A selection of the ${clientProjects.length} live client websites I have built, from Belagavi manufacturers to companies in the UAE.`}
					/>
					<Link to="/client-projects" className="link-arrow shrink-0 text-sm">
						All {clientProjects.length} client projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
					</Link>
				</div>
				<FeaturedCarousel projects={featuredClientProjects} headingId="work-title" />
			</section>

			<PersonalHighlights />
			<ProcessTimeline />
			<TechStack />
			<AboutPreview />
			<FaqSection tinted />

			<section aria-labelledby="contact-title" className="section" id="contact">
				<div className="container-page">
					<SectionHeading
						id="contact-title"
						eyebrow="Contact"
						title="Tell me what you need"
						description="Describe the project or the help you are looking for. You will hear back from me personally."
					/>
					<div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
						<ContactForm />
						<ContactAside />
					</div>
				</div>
			</section>
		</>
	);
}
