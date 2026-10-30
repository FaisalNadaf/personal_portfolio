/** @format */

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../../utils/utils";

/** Header for inner pages: visible breadcrumb, the page's single h1 and intro. */
export default function PageHeader({ crumb, eyebrow, title, description, children, aside, className }) {
	return (
		<section className={cn("relative isolate overflow-hidden border-b border-line bg-canvas-warm", className)}>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_22rem_at_100%_0%,theme(colors.brand.50),transparent_70%)]"
			/>
			<div className={cn("container-page py-12 sm:py-16", aside && "grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]")}>
				<div>
					<nav aria-label="Breadcrumb">
						<ol className="flex items-center gap-1.5 text-sm text-ink-muted">
							<li>
								<Link to="/" className="inline-block py-1 hover:text-ink">
									Home
								</Link>
							</li>
							<li aria-hidden="true">
								<ChevronRight className="h-3.5 w-3.5" />
							</li>
							<li aria-current="page" className="font-medium text-ink">
								{crumb}
							</li>
						</ol>
					</nav>
					{eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
					<h1 className={cn("max-w-3xl text-h1 font-semibold text-ink", eyebrow ? "mt-3" : "mt-8")}>{title}</h1>
					{description && <p className="mt-5 max-w-2xl text-lead text-ink-muted">{description}</p>}
					{children}
				</div>
				{aside}
			</div>
		</section>
	);
}
