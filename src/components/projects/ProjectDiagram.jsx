/** @format */

import { ArrowRight, ArrowDown } from "lucide-react";

/*
 * Architecture diagrams for personal projects that have no public screenshots.
 * Drawn for this site from each project's README and source layout, and
 * labelled as diagrams so they are never mistaken for product screenshots.
 */
const diagrams = {
	smartreply: {
		nodes: [
			{ label: "WhatsApp Web", sub: "message box" },
			{ label: "Extension", sub: "React · Lexical" },
			{ label: "Gemini API", sub: "user's own key" },
		],
		extras: ["Corrections and reply suggestions return to the editor", "Never sends on its own"],
	},
	farmsarthi: {
		nodes: [
			{ label: "Farmer app", sub: "Flutter" },
			{ label: "FastAPI backend", sub: "MongoDB · WebSockets" },
			{ label: "Disease model", sub: "TensorFlow / Keras" },
		],
		extras: ["Store dashboard app", "Feature-phone call simulator"],
	},
	linkedincopilot: {
		nodes: [
			{ label: "Web app", sub: "React · Vite" },
			{ label: "API", sub: "Express · Prisma" },
			{ label: "Gemini + LinkedIn APIs", sub: "official APIs only" },
		],
		extras: ["Publishing worker (BullMQ, Redis)", "Browser extension"],
	},
	emailtracker: {
		nodes: [
			{ label: "Gmail compose", sub: "browser extension" },
			{ label: "Tracking pixel", sub: "per email" },
			{ label: "Your server", sub: "Fastify · SQLite or Postgres" },
		],
		extras: ["Self-hosted: no third-party tracking service"],
	},
	doctordiary: {
		nodes: [
			{ label: "Flutter app", sub: "19 feature modules" },
			{ label: "State", sub: "Riverpod" },
			{ label: "On-device database", sub: "Drift · SQLite" },
		],
		extras: ["Secure storage", "Backup"],
	},
	healthaware: {
		nodes: [
			{ label: "Chat interface", sub: "English · Hindi · Kannada" },
			{ label: "Flask API", sub: "MongoDB · JWT" },
			{ label: "Gemini", sub: "streamed answers" },
		],
		extras: ["Rule-based fallback", "Admin panel"],
	},
	cybersafety: {
		nodes: [
			{ label: "Extension & voice", sub: "capture" },
			{ label: "Analysis API", sub: "FastAPI · Detoxify" },
			{ label: "Gemini", sub: "safe replies" },
		],
		extras: ["React and TypeScript dashboard"],
	},
};

export default function ProjectDiagram({ name, title }) {
	const d = diagrams[name];
	if (!d) return null;
	return (
		<figure className="diagram flex h-full flex-col justify-center rounded-2xl border border-line bg-[radial-gradient(theme(colors.line.DEFAULT)_1px,transparent_1px)] bg-sand-50 p-5 [background-size:16px_16px] sm:p-6">
			{/* Layout follows the diagram's own width (container query in index.css). */}
			<div className="diagram-flow flex flex-col items-stretch gap-2">
				{d.nodes.map((n, i) => (
					<div key={n.label} className="diagram-step flex flex-col items-center gap-2">
						<div className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-center shadow-card">
							<p className="text-sm font-semibold text-ink">{n.label}</p>
							<p className="mt-0.5 text-xs text-ink-muted">{n.sub}</p>
						</div>
						{i < d.nodes.length - 1 && (
							<>
								<ArrowRight className="diagram-arrow-right hidden h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
								<ArrowDown className="diagram-arrow-down h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
							</>
						)}
					</div>
				))}
			</div>
			{d.extras?.length > 0 && (
				<ul className="mt-4 flex flex-wrap justify-center gap-1.5">
					{d.extras.map((x) => (
						<li key={x} className="chip">
							{x}
						</li>
					))}
				</ul>
			)}
			<figcaption className="mt-4 text-center text-xs text-ink-muted">
				Architecture diagram of {title}, drawn from the project&apos;s source and README
			</figcaption>
		</figure>
	);
}
