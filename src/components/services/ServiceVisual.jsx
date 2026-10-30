/** @format */

import { Monitor, Server, Database, Sparkles, Check, GitPullRequest, CircleDot } from "lucide-react";
import BrowserFrame from "../ui/BrowserFrame";
import { clientImage } from "../../data/clientProjects";
import { cn } from "../../utils/utils";

/*
 * Visuals for the service cards. "website" and "mobile" use real screenshots of
 * delivered work; the others are simple illustrations of the service itself and
 * are hidden from assistive technology as decoration.
 */

function Sprint() {
	const cols = [
		{ title: "Backlog", items: ["w-3/4", "w-1/2", "w-2/3"] },
		{ title: "In progress", items: ["w-2/3", "w-4/5"] },
		{ title: "Shipped", items: ["w-1/2", "w-3/4", "w-2/3"], done: true },
	];
	return (
		<div aria-hidden="true" className="grid grid-cols-3 gap-2 rounded-xl border border-lavender-100 bg-white/80 p-3">
			{cols.map((c) => (
				<div key={c.title} className="rounded-lg bg-lavender-50 p-2">
					<p className="mb-2 text-[0.625rem] font-semibold uppercase tracking-wider text-lavender-600">{c.title}</p>
					<div className="grid gap-1.5">
						{c.items.map((w, i) => (
							<div key={i} className="flex items-center gap-1.5 rounded-md bg-white p-1.5 shadow-card">
								{c.done ? (
									<Check className="h-3 w-3 shrink-0 text-mint-700" />
								) : (
									<CircleDot className="h-3 w-3 shrink-0 text-lavender-600" />
								)}
								<span className={cn("h-1.5 rounded-full bg-sand-200", w)} />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

function Stack() {
	const layers = [
		{ icon: Monitor, label: "Interface", tint: "bg-mist-50 text-mist-600" },
		{ icon: Server, label: "API", tint: "bg-lavender-50 text-lavender-600" },
		{ icon: Database, label: "Database", tint: "bg-mint-50 text-mint-700" },
	];
	return (
		<div aria-hidden="true" className="grid gap-2">
			{layers.map(({ icon: Icon, label, tint }, i) => (
				<div key={label} className="relative">
					<div className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2.5 shadow-card">
						<span className={cn("grid h-7 w-7 place-items-center rounded-lg", tint)}>
							<Icon className="h-4 w-4" />
						</span>
						<span className="text-sm font-medium text-ink">{label}</span>
						<span className="ml-auto h-1.5 w-12 rounded-full bg-sand-200" />
					</div>
					{i < layers.length - 1 && <span className="mx-auto block h-2 w-px bg-line-strong" />}
				</div>
			))}
		</div>
	);
}

function Ai() {
	return (
		<div aria-hidden="true" className="grid gap-2 rounded-xl border border-lavender-100 bg-white p-3">
			<div className="ml-auto w-3/4 rounded-2xl rounded-br-md bg-sand-100 p-2.5">
				<span className="block h-1.5 w-5/6 rounded-full bg-sand-200" />
				<span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-sand-200" />
			</div>
			<div className="w-4/5 rounded-2xl rounded-bl-md border border-lavender-100 bg-lavender-50 p-2.5">
				<span className="mb-1.5 inline-flex items-center gap-1 text-[0.625rem] font-semibold uppercase tracking-wider text-lavender-600">
					<Sparkles className="h-3 w-3" /> AI suggestion
				</span>
				<span className="block h-1.5 w-full rounded-full bg-lavender-100" />
				<span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-lavender-100" />
			</div>
		</div>
	);
}

function Api() {
	return (
		<pre
			aria-hidden="true"
			className="overflow-hidden rounded-xl bg-ink p-4 font-mono text-[0.6875rem] leading-relaxed text-[#C9D3F5]">
			<span className="text-[#7EE2B8]">POST</span> /api/enquiries{"\n"}
			<span className="text-[#98A2B3]">{"{"} &quot;name&quot;: &quot;…&quot;, &quot;service&quot;: &quot;web&quot; {"}"}</span>
			{"\n\n"}
			<span className="text-[#7EE2B8]">201</span> Created{"\n"}
			<span className="text-[#98A2B3]">{"{"} &quot;id&quot;: &quot;enq_…&quot;, &quot;status&quot;: &quot;received&quot; {"}"}</span>
		</pre>
	);
}

function Maintenance() {
	const items = ["Dependencies updated", "Layout fixed on small phones", "Images compressed", "Accessibility issues resolved"];
	return (
		<ul aria-hidden="true" className="grid gap-2 rounded-xl border border-line bg-white p-3">
			{items.map((t) => (
				<li key={t} className="flex items-center gap-2 text-xs text-ink-soft">
					<span className="grid h-5 w-5 place-items-center rounded-full bg-mint-50">
						<Check className="h-3 w-3 text-mint-700" />
					</span>
					{t}
				</li>
			))}
		</ul>
	);
}

function Consulting() {
	return (
		<div aria-hidden="true" className="grid gap-2 rounded-xl border border-line bg-white p-3">
			<div className="flex items-center gap-2 text-xs font-medium text-ink">
				<GitPullRequest className="h-4 w-4 text-brand-600" /> Architecture review
			</div>
			<div className="grid grid-cols-2 gap-2">
				{["Option A", "Option B"].map((o, i) => (
					<div key={o} className={cn("rounded-lg border p-2", i === 0 ? "border-brand-200 bg-brand-50" : "border-line")}>
						<p className="text-[0.625rem] font-semibold uppercase tracking-wider text-ink-muted">{o}</p>
						<span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-sand-200" />
						<span className="mt-1 block h-1.5 w-3/5 rounded-full bg-sand-200" />
					</div>
				))}
			</div>
		</div>
	);
}

export default function ServiceVisual({ visual, className }) {
	switch (visual) {
		case "website":
			return (
				<BrowserFrame
					{...clientImage("simran-technology")}
					sizes="(min-width: 1024px) 30vw, 90vw"
					alt="Simran Technology product catalogue website, built for a Belgaum crane manufacturer"
					label="Client website"
					className={className}
					imgClassName="aspect-video object-cover object-top"
				/>
			);
		case "mobile":
			return (
				<figure className={cn("mx-auto w-[46%] max-w-[11rem] overflow-hidden rounded-[1.6rem] border-[6px] border-ink bg-ink shadow-frame", className)}>
					<img
						src="/images/personal/ecommerce-flutter-480.webp"
						width="480"
						height="608"
						alt="Shopping app built in Flutter, home screen with product categories"
						loading="lazy"
						decoding="async"
						className="block aspect-[9/16] w-full object-cover object-top"
					/>
				</figure>
			);
		case "sprint":
			return <div className={className}><Sprint /></div>;
		case "stack":
			return <div className={className}><Stack /></div>;
		case "ai":
			return <div className={className}><Ai /></div>;
		case "api":
			return <div className={className}><Api /></div>;
		case "maintenance":
			return <div className={className}><Maintenance /></div>;
		case "consulting":
			return <div className={className}><Consulting /></div>;
		default:
			return null;
	}
}
