/**
 * Per-route metadata. Used by the prerender script (initial HTML head, sitemap)
 * and by <PageMeta> for client-side navigation.
 */
export const pages = {
	"/": {
		title: "Faisal Nadaf | Virtual & Freelance Developer in Belagavi",
		description:
			"Hire Faisal Nadaf, a full-stack developer in Belagavi (Belgaum), as your virtual developer or for freelance websites, web apps, mobile apps and AI features.",
		breadcrumb: null,
		priority: "1.0",
	},
	"/services": {
		title: "Web, App & AI Development Services in Belagavi | Faisal Nadaf",
		description:
			"Virtual developer support, websites, web apps, Flutter mobile apps, AI integration, APIs and maintenance from Belagavi (Belgaum), for clients in India and abroad.",
		breadcrumb: "Services",
		priority: "0.9",
	},
	"/client-projects": {
		title: "Client Website Projects: 17 Real-World Builds | Faisal Nadaf",
		description:
			"17 live websites built for businesses in education, manufacturing, trade, media and technology in Belagavi, across India and in the UAE, with real screenshots.",
		breadcrumb: "Client Projects",
		priority: "0.9",
	},
	"/personal-projects": {
		title: "Personal Software Projects: AI, Web & Mobile | Faisal Nadaf",
		description:
			"Products by Faisal Nadaf: a trading intelligence platform, an AI writing assistant for WhatsApp Web, a Flutter crop-disease app and open-source projects.",
		breadcrumb: "Personal Projects",
		priority: "0.8",
	},
	"/about": {
		title: "About Faisal Nadaf, Full-Stack Developer in Belagavi (Belgaum)",
		description:
			"Background, experience, education and hackathon awards of Faisal Nadaf, a full-stack developer at Cubiccode and freelance developer in Belagavi.",
		breadcrumb: "About",
		priority: "0.7",
	},
	"/contact": {
		title: "Hire a Full-Stack Developer in Belagavi | Contact Faisal Nadaf",
		description:
			"Hire me as a virtual developer or for a freelance website, web app, mobile app or AI project. Tell me what you need and I will reply personally.",
		breadcrumb: "Contact",
		priority: "0.8",
	},
	"/privacy": {
		title: "Privacy Policy | Faisal Nadaf",
		description: "How this website handles the information you send through the contact form.",
		breadcrumb: "Privacy Policy",
		priority: "0.3",
	},
};

export const notFoundPage = {
	title: "Page not found | Faisal Nadaf",
	description: "The page you were looking for does not exist.",
};

export const routes = Object.keys(pages);
