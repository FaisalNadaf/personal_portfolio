/**
 * Personal projects. Facts come from each project's own README, manifests and
 * source on the owner's machine (inspected 2026-10-19), or from the public
 * GitHub repositories already linked from the previous portfolio. Links are
 * included only where they returned HTTP 200 on 2026-10-19.
 *
 * visual.kind:
 *   "screenshot" - a real capture of the project's UI
 *   "preview"    - a real render of the project's own UI preview files
 *   "diagram"    - an architecture diagram drawn for this site (labelled as such)
 */

export const projectStatuses = {
	product: { label: "Completed product", tone: "mint" },
	prototype: { label: "Working prototype", tone: "mist" },
	hackathon: { label: "Hackathon prototype", tone: "lavender" },
	academic: { label: "Academic project", tone: "sand" },
	openSource: { label: "Open-source project", tone: "sand" },
};

export const personalProjects = [
	{
		id: "meridian",
		title: "Meridian",
		kind: "Trading intelligence platform",
		status: "product",
		problem:
			"Trading signals are often black boxes, and AI tools happily invent numbers. Meridian computes market structure, liquidity and confluence with deterministic rules, and uses an LLM only to explain a decision, never to make it.",
		features: [
			"BUY, SELL or WAIT decision engine with account risk limits",
			"Backtesting on real Binance market data",
			"Dashboard, in-page browser overlay and TradingView indicator",
			"Gemini copilot with a guardrail that rejects invented numbers",
		],
		evidence:
			"257 automated tests, GitHub Actions CI and more than ten architecture decision records. Its own backtests found no edge that survives trading costs, and the README says so plainly.",
		tech: ["TypeScript", "Fastify", "MongoDB", "React", "Manifest V3", "Pine Script v6", "Vitest"],
		visual: {
			kind: "preview",
			src: "/images/personal/meridian-decision-cards-700.webp",
			srcSet:
				"/images/personal/meridian-decision-cards-700.webp 700w, /images/personal/meridian-decision-cards-1400.webp 1400w",
			width: 1412,
			height: 730,
			alt: "Meridian decision cards showing BUY, SELL and WAIT signals with the evidence behind each one",
			caption: "Decision cards rendered from real engine output on Binance BTCUSDT data (repository preview).",
		},
		links: [],
		note: "Private repository. Not publicly released.",
		featured: true,
	},
	{
		id: "smartreply-ai",
		title: "SmartReply AI",
		kind: "Chrome extension for WhatsApp Web",
		status: "product",
		problem:
			"Typing clear, correct messages quickly is hard, especially when switching between languages. SmartReply AI corrects text as you type and suggests replies inside WhatsApp Web, using the person's own Gemini API key.",
		features: [
			"Corrections as you type, with one-click undo and three correction modes",
			"Tab completion and a reply button on any message",
			"Rewrite tools with Hindi, Kannada, Marathi and Hinglish support",
			"Never sends a message on its own",
		],
		evidence:
			"Version 1.0.0 is packaged, with unit tests and Playwright end-to-end tests. A Chrome Web Store listing is in preparation.",
		tech: ["React 19", "TypeScript", "Vite", "Lexical", "Manifest V3", "Gemini API", "Playwright"],
		visual: { kind: "diagram", diagram: "smartreply" },
		links: [],
		note: "Private repository. Not yet published on the Chrome Web Store.",
		featured: true,
	},
	{
		id: "farm-sarthi-ai",
		title: "Farm Sarthi AI",
		kind: "AI crop-health ecosystem",
		status: "hackathon",
		problem:
			"Farmers need fast answers when a crop looks sick, and many do not own a smartphone. Farm Sarthi AI detects rice leaf diseases from a photo, shows remedies and connects farmers to nearby stores, including through a feature-phone call flow.",
		features: [
			"Flutter farmer app: scan a leaf, see the diagnosis and remedies",
			"Trained Keras model for rice leaf disease detection",
			"Store dashboard with leads, inventory, orders and a disease hotspot map",
			"Feature-phone caller simulator for farmers without smartphones",
		],
		evidence:
			"Three apps served by one FastAPI backend with about 46 REST routes and WebSocket endpoints.",
		tech: ["Flutter", "FastAPI", "TensorFlow", "OpenCV", "MongoDB", "WebSockets"],
		visual: { kind: "diagram", diagram: "farmsarthi" },
		links: [],
		note: "Built for a hackathon. Private repository.",
		featured: true,
	},
	{
		id: "linkedin-copilot",
		title: "LinkedIn Copilot",
		kind: "AI career and content platform",
		status: "prototype",
		problem:
			"Growing a professional presence takes hours of writing, tracking and follow-up. LinkedIn Copilot brings profile analysis, AI-assisted posts, job matching and application tracking into one compliance-first workspace that uses only official LinkedIn APIs.",
		features: [
			"Profile and resume analyzer",
			"AI content studio with scheduled publishing through a background worker",
			"Job matching and an application board",
			"Career copilot chat powered by Gemini",
		],
		evidence: "26 application pages, unit tests and Playwright end-to-end specs, Docker Compose setup.",
		tech: ["React", "Vite", "Tailwind CSS", "Express", "Prisma", "BullMQ", "Redis", "Gemini API"],
		visual: { kind: "diagram", diagram: "linkedincopilot" },
		links: [],
		note: "Private repository.",
	},
	{
		id: "gmail-email-tracker",
		title: "Gmail Email Tracker",
		kind: "Self-hosted email open tracking",
		status: "product",
		problem:
			"Commercial trackers send your email metadata to a third party. This tool adds a 'Track this email' option to Gmail and records opens on a server you run yourself, with honest documentation of what a tracking pixel can and cannot tell you.",
		features: [
			"Gmail compose integration through a browser extension",
			"Self-hosted Fastify server with SQLite or PostgreSQL",
			"Documentation on privacy and limitations",
		],
		evidence: "Unit tests and a one-command verification script.",
		tech: ["Fastify", "SQLite", "PostgreSQL", "React", "Tailwind CSS", "Manifest V3", "Vitest"],
		visual: { kind: "diagram", diagram: "emailtracker" },
		links: [],
		note: "Private repository.",
	},
	{
		id: "doctor-diary",
		title: "Doctor Diary",
		kind: "Offline-first clinic management app",
		status: "prototype",
		problem:
			"Independent clinicians need patient records that work without an internet connection. Doctor Diary keeps patients, appointments, notes, reminders and finances on the device.",
		features: [
			"Patients, appointments and calendar views",
			"Medical records with voice notes",
			"Reminders, finance and reports",
			"Local database with secure storage and backup",
		],
		evidence: "19 feature modules, version 2.0.0.",
		tech: ["Flutter", "Riverpod", "Drift", "SQLite"],
		visual: { kind: "diagram", diagram: "doctordiary" },
		links: [],
		note: "Private repository.",
	},
	{
		id: "healthaware",
		title: "HealthAware",
		kind: "AI public health chatbot",
		status: "academic",
		problem:
			"Reliable health information is harder to find in regional languages. HealthAware answers public health questions in English, Hindi and Kannada, streaming Gemini answers with a rule-based fallback.",
		features: ["Streaming AI answers with a fallback path", "Admin panel", "Three languages"],
		evidence: "Final-year project with API documentation.",
		tech: ["Python", "Flask", "MongoDB", "Gemini API", "JWT"],
		visual: { kind: "diagram", diagram: "healthaware" },
		links: [],
		note: "Academic project. Private repository.",
	},
	{
		id: "cyber-safety-suite",
		title: "Cyber Safety Suite",
		kind: "Conversation safety analysis",
		status: "hackathon",
		problem:
			"Online harassment is not always obvious word by word. The suite analyses conversations for toxicity, manipulation, gaslighting and escalation, and suggests safe replies.",
		features: ["Toxicity and manipulation analysis", "Gemini-powered safe replies", "Browser extension and voice capture"],
		evidence: "FastAPI backend with a React and TypeScript frontend.",
		tech: ["FastAPI", "Detoxify", "React", "TypeScript", "Tailwind CSS", "Gemini API"],
		visual: { kind: "diagram", diagram: "cybersafety" },
		links: [],
		note: "Built for a hackathon. Private repository.",
	},
];

/** Earlier public projects with real screenshots and working GitHub links. */
export const openSourceProjects = [
	{
		id: "school-management",
		title: "School Management App",
		description:
			"Role-based school platform with dashboards for students, teachers and admins: attendance, grades and announcements.",
		tech: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS"],
		image: "school-management",
		github: "https://github.com/FaisalNadaf/school-management",
	},
	{
		id: "social-media-mern",
		title: "Social Media Platform",
		description:
			"MERN social platform with email-verified sign-up, posts, comments and friend connections.",
		tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Redux"],
		image: "social-media-mern",
		github: "https://github.com/FaisalNadaf/Social_Media_WebApp",
		live: "https://faisal-socialmedia.netlify.app/",
	},
	{
		id: "mern-chat-app",
		title: "Real-time Chat App",
		description: "Chat application with JWT authentication, live messaging and online presence over Socket.io.",
		tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Zustand"],
		image: "mern-chat-app",
		github: "https://github.com/FaisalNadaf/CHAT_APP",
	},
	{
		id: "online-code-editor",
		title: "Online Code Editor",
		description: "Multi-language code editor with a React frontend wired to a compiler API for running code.",
		tech: ["React", "Node.js", "Compiler API"],
		image: "online-code-editor",
		github: "https://github.com/FaisalNadaf/code_editor_oneCompiler",
	},
	{
		id: "blinkit-clone-flutter",
		title: "Grocery Delivery App (Flutter)",
		description: "Blinkit-inspired grocery app with product listings, categories, cart and address selection.",
		tech: ["Flutter", "Dart", "GetX"],
		image: "blinkit-clone-flutter",
		github: "https://github.com/FaisalNadaf/blinkit_clone_flutter",
	},
	{
		id: "hotel-booking",
		title: "Hotel Booking Platform",
		description: "Booking platform with authentication, room availability, bookings and an admin panel.",
		tech: ["Express", "Passport.js", "MongoDB", "EJS"],
		image: "hotel-booking",
		github: "https://github.com/FaisalNadaf/hotel-rent",
	},
	{
		id: "ecommerce-flutter",
		title: "E-commerce App (Flutter)",
		description: "Shopping app with product browsing, search, cart and authentication.",
		tech: ["Flutter", "Dart", "GetX", "Firebase"],
		image: "ecommerce-flutter",
		github: "https://github.com/FaisalNadaf/e_commerce_flutter",
	},
	{
		id: "youtube-clone",
		title: "YouTube Clone",
		description: "Video browsing app with search, video details and comments using external APIs.",
		tech: ["React", "Redux", "REST APIs"],
		image: "youtube-clone",
		github: "https://github.com/FaisalNadaf/You_Tube_React",
	},
	{
		id: "expense-tracker",
		title: "Expense Tracker",
		description: "Expense tracker with categories, monthly summaries and budget tracking.",
		tech: ["React", "Redux", "JavaScript"],
		image: "expense-tracker",
		github: "https://github.com/FaisalNadaf/Expense-Tracker-React",
		live: "https://faisal-expensetracker.netlify.app",
	},
	{
		id: "weather-app",
		title: "Weather App",
		description: "Weather search with temperature, humidity and conditions for any location.",
		tech: ["React", "Tailwind CSS", "Weather API"],
		image: "weather-app",
		github: "https://github.com/FaisalNadaf/weather-app-react",
		live: "https://faisal-weatherapp.netlify.app",
	},
];

export const personalImage = (name) => ({
	src: `/images/personal/${name}-480.webp`,
	srcSet: `/images/personal/${name}-480.webp 480w, /images/personal/${name}-960.webp 960w`,
});

export const featuredPersonalProjects = personalProjects.filter((p) => p.featured);
