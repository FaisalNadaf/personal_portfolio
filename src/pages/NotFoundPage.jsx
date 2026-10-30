/** @format */

import { ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";
import { navLinks } from "../data/site";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<section className="section">
			<div className="container-page max-w-2xl text-center">
				<p className="eyebrow justify-center">Error 404</p>
				<h1 className="mt-3 text-h1 font-semibold text-ink">This page could not be found</h1>
				<p className="mt-4 text-lead text-ink-muted">
					The link may be old or mistyped. These pages might help instead:
				</p>
				<ul className="mt-8 flex flex-wrap justify-center gap-2">
					{navLinks.map((l) => (
						<li key={l.to}>
							<Link to={l.to} className="chip px-3.5 py-2 text-sm hover:border-line-strong hover:text-ink">
								{l.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="mt-10">
					<Button to="/" variant="secondary">
						<ArrowLeft className="h-4 w-4" aria-hidden="true" />
						Back to the homepage
					</Button>
				</div>
			</div>
		</section>
	);
}
