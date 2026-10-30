/** @format */

import PageHeader from "../components/layout/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import PersonalProjectCard from "../components/projects/PersonalProjectCard";
import OpenSourceCard from "../components/projects/OpenSourceCard";
import Tag from "../components/ui/Tag";
import CtaBand from "../components/home/CtaBand";
import { personalProjects, openSourceProjects, projectStatuses } from "../data/personalProjects";

const products = personalProjects.filter((p) => p.status === "product" || p.status === "prototype");
const experiments = personalProjects.filter((p) => p.status === "hackathon" || p.status === "academic");

export default function PersonalProjectsPage() {
	return (
		<>
			<PageHeader
				crumb="Personal Projects"
				eyebrow="Products I have built"
				title="Personal projects: AI tools, web platforms and mobile apps"
				description="Software I designed and built on my own time, from a tested trading intelligence platform to Chrome extensions and Flutter apps. Each project is labelled with its real status.">
				<ul className="mt-8 flex flex-wrap gap-2" aria-label="Status labels used on this page">
					{Object.values(projectStatuses).map((s) => (
						<li key={s.label}>
							<Tag tone={s.tone}>{s.label}</Tag>
						</li>
					))}
				</ul>
			</PageHeader>

			<section aria-labelledby="products-title" className="section">
				<div className="container-page">
					<SectionHeading
						id="products-title"
						title="Products and working prototypes"
						description="Complete, tested software. Most of these repositories are private, so the visuals are either renders of the project's own preview files or architecture diagrams."
					/>
					<div className="mt-10 grid gap-6">
						{products.map((p, i) => (
							<div key={p.id} id={p.id} className="scroll-mt-24">
								<PersonalProjectCard project={p} layout="wide" reverse={i % 2 === 1} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section aria-labelledby="experiments-title" className="section bg-canvas-warm">
				<div className="container-page">
					<SectionHeading
						id="experiments-title"
						title="Hackathon and academic builds"
						description="Built against the clock or for coursework, and working end to end."
					/>
					<div className="mt-10 grid gap-6 lg:grid-cols-3">
						{experiments.map((p) => (
							<div key={p.id} id={p.id} className="scroll-mt-24">
								<PersonalProjectCard project={p} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section aria-labelledby="oss-title" className="section">
				<div className="container-page">
					<SectionHeading
						id="oss-title"
						title="Open-source projects on GitHub"
						description="Earlier projects with public source code. Live demos are linked only where they are still online."
					/>
					<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{openSourceProjects.map((p) => (
							<li key={p.id} data-reveal>
								<OpenSourceCard project={p} />
							</li>
						))}
					</ul>
				</div>
			</section>

			<CtaBand title="Want something like this built for your business?" />
		</>
	);
}
