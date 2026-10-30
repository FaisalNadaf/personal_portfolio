/**
 * Services. `visual` selects the illustration in components/services/ServiceVisual.jsx.
 * `related` links to client project ids and personal project ids that show the
 * service in practice.
 */
export const services = [
	{
		id: "virtual-developer",
		cta: "Hire Me as a Virtual Developer",
		title: "Virtual Software Developer",
		summary:
			"Your roadmap is longer than your team's capacity, but a full-time hire is slow or too early. I join remotely as a dedicated developer and keep your product moving.",
		details: [
			"Pick up tickets from your backlog and ship features end to end",
			"Fix bugs, review pull requests and keep releases on schedule",
			"Work inside your Git workflow, sprints and communication tools",
			"Flexible, ongoing engagement agreed around your needs",
		],
		tech: ["React", "Next.js", "Node.js", "TypeScript"],
		visual: "sprint",
		tone: "lavender",
		related: { client: [], personal: ["meridian", "linkedin-copilot"] },
	},
	{
		id: "web-development",
		cta: "Discuss a website or web app",
		title: "Websites & Web Applications",
		summary:
			"An outdated or slow website costs you enquiries and credibility. I build fast, responsive company websites, landing pages and web apps that explain what you do and turn visitors into enquiries.",
		details: [
			"Company websites, product catalogues and landing pages",
			"Responsive layouts that work from small phones to wide screens",
			"Technical SEO foundations: metadata, structured data, sitemaps",
			"Multilingual sites, including English and Arabic",
		],
		tech: ["React", "Next.js", "Vite", "Tailwind CSS"],
		visual: "website",
		tone: "mist",
		related: {
			client: ["simran-technology", "school-excellence-program", "mabda-group", "konin-valves"],
			personal: [],
		},
	},
	{
		id: "full-stack-development",
		cta: "Discuss a custom application",
		title: "Full-Stack Development",
		summary:
			"Off-the-shelf tools rarely fit how your business actually works. I design the interface, API and database together to build dashboards, portals and admin panels around your process.",
		details: [
			"Custom dashboards, portals and internal tools",
			"Authentication, roles and permissions",
			"Database design with MongoDB or PostgreSQL",
			"Tested APIs with validation and clear error handling",
		],
		tech: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
		visual: "stack",
		tone: "sand",
		related: { client: [], personal: ["linkedin-copilot", "meridian"] },
	},
	{
		id: "mobile-app-development",
		cta: "Discuss a mobile app",
		title: "Mobile App Development",
		summary:
			"Your customers or staff need an app on their phone, and building separate Android and iOS apps is expensive. I build cross-platform Flutter apps, from offline-first tools to apps backed by your API.",
		details: [
			"Cross-platform apps from a single Flutter codebase",
			"Offline-first storage for field and clinic use",
			"Camera, voice and location features",
			"Integration with your backend and Firebase",
		],
		tech: ["Flutter", "Dart", "Firebase", "Riverpod"],
		visual: "mobile",
		tone: "mint",
		related: { client: [], personal: ["farm-sarthi-ai", "doctor-diary"] },
	},
	{
		id: "ai-integration",
		cta: "Discuss an AI feature",
		title: "AI Integration & Automation",
		summary:
			"AI demos are easy; useful AI features are not. I add assistants, smart replies, document and image analysis to real products, with guardrails so the AI never makes things up unchecked.",
		details: [
			"Assistants and copilots built on the Gemini API",
			"Reply, rewrite and summarisation features",
			"Image classification with trained models",
			"Guardrails, fallbacks and human control",
		],
		tech: ["Gemini API", "Python", "FastAPI", "TensorFlow"],
		visual: "ai",
		tone: "lavender",
		related: { client: [], personal: ["smartreply-ai", "farm-sarthi-ai", "meridian"] },
	},
	{
		id: "api-development",
		cta: "Discuss an API or integration",
		title: "API Development & Integrations",
		summary:
			"Your systems do not talk to each other, so people copy data by hand. I build documented REST APIs and connect your product to the services it depends on.",
		details: [
			"REST APIs with schema validation",
			"OAuth sign-in and third-party API integrations",
			"Background jobs, queues and webhooks",
			"Real-time features over WebSockets",
		],
		tech: ["Node.js", "Fastify", "FastAPI", "Zod", "JWT"],
		visual: "api",
		tone: "mist",
		related: { client: [], personal: ["linkedin-copilot", "gmail-email-tracker", "farm-sarthi-ai"] },
	},
	{
		id: "maintenance",
		cta: "Get help with an existing site or app",
		title: "Improvements & Maintenance",
		summary:
			"The original developer has moved on and every change feels risky. I take over existing websites and apps, fix what is broken, and improve speed and accessibility without a rewrite.",
		details: [
			"Bug fixing and dependency updates",
			"Performance and Core Web Vitals improvements",
			"Accessibility and responsive layout fixes",
			"New features added to the existing codebase",
		],
		tech: ["React", "Node.js", "Playwright", "Lighthouse"],
		visual: "maintenance",
		tone: "sand",
		related: { client: [], personal: [] },
	},
	{
		id: "technical-consulting",
		cta: "Ask for technical advice",
		title: "Technical Consulting & Support",
		summary:
			"Before you invest in a build, you want a straight answer on scope, stack and risk. I help you plan features, choose technology and review existing code so decisions are made with eyes open.",
		details: [
			"Scoping and planning for a new product or feature",
			"Choosing a stack that fits your team and budget",
			"Code and architecture reviews",
			"Development support for your in-house team",
		],
		tech: ["Architecture", "Code review", "Planning"],
		visual: "consulting",
		tone: "mint",
		related: { client: [], personal: [] },
	},
];

export const getService = (id) => services.find((s) => s.id === id);
