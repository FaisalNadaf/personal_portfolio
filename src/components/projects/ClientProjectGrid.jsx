/** @format */

import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import ClientProjectCard from "./ClientProjectCard";
import { clientProjects, clientCategories } from "../../data/clientProjects";
import { usePrefersReducedMotion } from "../../lib/useMediaQuery";
import { cn } from "../../utils/utils";

/**
 * Filterable grid of every client project. Filters are built from the data,
 * so a category only appears when at least one project belongs to it.
 * Filter changes animate with the View Transitions API where supported;
 * other browsers and reduced-motion users get an instant update.
 */
export default function ClientProjectGrid() {
	const [filter, setFilter] = useState("all");
	const reduce = usePrefersReducedMotion();

	const filters = useMemo(
		() => [
			{ id: "all", label: "All projects", count: clientProjects.length },
			...clientCategories
				.map((c) => ({ ...c, count: clientProjects.filter((p) => p.categories.includes(c.id)).length }))
				.filter((c) => c.count > 0),
		],
		[],
	);

	const choose = (id) => {
		if (id === filter) return;
		if (!reduce && typeof document !== "undefined" && document.startViewTransition) {
			document.startViewTransition(() => flushSync(() => setFilter(id)));
		} else {
			setFilter(id);
		}
	};

	const visible = filter === "all" ? clientProjects : clientProjects.filter((p) => p.categories.includes(filter));
	const activeLabel = filters.find((f) => f.id === filter)?.label;

	return (
		<>
			<div role="group" aria-label="Filter client projects by category" className="flex flex-wrap gap-2">
				{filters.map((f) => (
					<button
						key={f.id}
						type="button"
						aria-pressed={filter === f.id}
						onClick={() => choose(f.id)}
						className={cn(
							"inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-fast",
							filter === f.id
								? "bg-ink text-white"
								: "bg-white text-ink-soft ring-1 ring-inset ring-line hover:bg-sand-50 hover:text-ink",
						)}>
						{f.label}
						<span className={cn("text-xs", filter === f.id ? "text-white/80" : "text-ink-muted")}>{f.count}</span>
					</button>
				))}
			</div>

			<p className="visually-hidden" aria-live="polite">
				Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
				{filter !== "all" ? ` in ${activeLabel}` : ""}.
			</p>

			<ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{visible.map((p) => (
					<li key={p.id} style={{ viewTransitionName: `client-${p.id}` }}>
						<ClientProjectCard project={p} />
					</li>
				))}
			</ul>
		</>
	);
}
