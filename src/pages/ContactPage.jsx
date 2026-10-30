/** @format */

import PageHeader from "../components/layout/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactAside from "../components/contact/ContactAside";
import FaqSection from "../components/home/FaqSection";

export default function ContactPage() {
	return (
		<>
			<PageHeader
				crumb="Contact"
				eyebrow="Hire me"
				title="Hire a full-stack developer for your project or team"
				description="Tell me what you want to build or improve. Choose ongoing virtual developer support or a freelance project, or ask for help deciding."
			/>
			<section aria-labelledby="form-title" className="section" id="inquiry">
				<div className="container-page grid gap-8 lg:grid-cols-[1.6fr_1fr]">
					<div>
						<h2 id="form-title" className="mb-6 text-h3 font-semibold text-ink">
							Project or engagement inquiry
						</h2>
						<ContactForm />
					</div>
					<div className="lg:pt-14">
						<ContactAside />
					</div>
				</div>
			</section>
			<FaqSection tinted />
		</>
	);
}
