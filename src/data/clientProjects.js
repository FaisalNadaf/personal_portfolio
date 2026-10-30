/**
 * Real-world client websites. Single source for the carousel, bento, grid and
 * filters. Names, descriptions and technology labels come from inspecting each
 * live homepage (title, headings, visible content and framework markers) on
 * 2026-10-19. Technologies are listed only where the page itself showed clear
 * evidence. Screenshots: public/images/clients/<id>-{720,1440}.webp, captured
 * with scripts/capture-client-screenshots.cjs at 1440x1000.
 */

export const clientCategories = [
	{ id: "education", label: "Education" },
	{ id: "industrial", label: "Industrial & Engineering" },
	{ id: "trade", label: "Corporate & Trade" },
	{ id: "media", label: "Media & Publishing" },
	{ id: "technology", label: "Technology & Software" },
	{ id: "energy", label: "Renewable Energy" },
	{ id: "ecommerce", label: "E-commerce" },
];

export const clientProjects = [
	{
		id: "school-excellence-program",
		title: "School Excellence Program",
		url: "https://school-execlence-program-website.vercel.app/",
		description:
			"Website for a three-year programme that helps CBSE schools strengthen leadership, teaching practice and systems. It explains the programme and the SEP System, and gives school leaders a clear way to contact the senior team.",
		categories: ["education"],
		tech: ["Next.js"],
		featured: true,
	},
	{
		id: "mabda-group",
		title: "Mabda Group",
		url: "https://www.mabdaglobal.com/en",
		description:
			"Corporate website for a UAE-based industrial trade and supply chain company that connects manufacturers and industrial buyers across the Middle East, Africa and Europe. Published in English and Arabic.",
		categories: ["trade"],
		tech: ["Next.js"],
		location: "UAE",
		languages: ["English", "Arabic"],
		featured: true,
	},
	{
		id: "simran-technology",
		title: "Simran Technology",
		url: "https://simran-technology-cranes-components.netlify.app/",
		description:
			"Product catalogue website for a Belgaum manufacturer of EOT cranes, electric hoists, winches and crane components, with product lines and quote requests.",
		categories: ["industrial"],
		tech: ["React", "Vite"],
		location: "Belgaum",
		featured: true,
	},
	{
		id: "konin-valves",
		title: "KONIN Valves",
		url: "https://test-koninvalves.netlify.app/",
		description:
			"Website for an ISO 9001:2015 industrial valve manufacturer in Belagavi that presents its valve range, automation and water treatment solutions, and the industries it serves.",
		categories: ["industrial"],
		tech: ["React"],
		location: "Belagavi",
		featured: true,
	},
	{
		id: "lbs-kidz",
		title: "LBS KidZ",
		url: "https://test-lbs-kidz.netlify.app/",
		description:
			"Website for a values-based preschool opening in Indore for the 2027-28 session, built around the family legacy of Shri Lal Bahadur Shastri Ji, with curriculum, campus and register-interest pages.",
		categories: ["education"],
		tech: ["React", "Vite"],
		featured: true,
	},
	{
		id: "bmgt",
		title: "BMGT",
		url: "https://bmgt.ae/en",
		description:
			"Website for a Dubai-based supplier of industrial materials to shipbuilding, oil and gas, construction and general engineering, published in English and Arabic.",
		categories: ["trade"],
		tech: ["React", "Vite"],
		location: "Dubai, UAE",
		languages: ["English", "Arabic"],
		featured: true,
	},
	{
		id: "g7-olympiad",
		title: "G7 Olympiad",
		url: "https://lavenderblush-ferret-501801.hostingersite.com/",
		description:
			"Online store and information site for G7 Olympiad workbooks. Students and schools can browse workbooks by level, buy online and register a school for the national-level Olympiad.",
		categories: ["education", "ecommerce"],
		tech: ["React", "Vite"],
		featured: true,
	},
	{
		id: "sangam-renewables",
		title: "Sangam Renewables & Electrosystems",
		url: "https://test-sangam-group.netlify.app/renewables",
		description:
			"Company page for a Karnataka engineering and infrastructure firm that takes sites from raw land to grid connection: land conversion, civil and electrical works, and solar and wind energy systems. Part of the Sangam Ventures group website.",
		categories: ["energy", "industrial"],
		tech: ["React", "Vite"],
		location: "Karnataka",
	},
	{
		id: "imbos-india",
		title: "Imbos India",
		url: "https://rosybrown-cobra-980659.hostingersite.com/",
		description:
			"Website for a precision manufacturer in Honga, Belgaum with three divisions: aerospace components, in-sourced manufacturing teams and precision mould bases.",
		categories: ["industrial"],
		tech: ["Next.js"],
		location: "Belgaum",
	},
	{
		id: "edugradient",
		title: "EduGradient",
		url: "https://blueviolet-chicken-914938.hostingersite.com/",
		description:
			"Website for a medical education provider offering hands-on clinical training, licensing exam preparation and career pathways for medical students in Tbilisi, Georgia.",
		categories: ["education"],
		tech: [],
	},
	{
		id: "careerjump-fasttrack",
		title: "CareerJump FastTrack",
		url: "https://fasttrack.careerjump.co.in/",
		description:
			"Landing page for a placement support programme for freshers and graduates that explains the process, the hiring network and how to apply.",
		categories: ["education"],
		tech: ["React", "Vite"],
	},
	{
		id: "belgaum-software-company",
		title: "Belgaum Software Company",
		url: "https://www.softwarecompanybelgaum.com/",
		description:
			"Website for a Belagavi software company offering custom software, web and mobile apps, ERP, e-commerce and AI automation, organised around services, industries and technology.",
		categories: ["technology"],
		tech: ["Tailwind CSS"],
		location: "Belagavi",
	},
	{
		id: "cubiccode-group",
		title: "Cubiccode Group of Companies",
		url: "https://cubiccode.org/",
		description:
			"Group landing page that routes visitors to the three Cubiccode businesses: CareerJump, Cubiccode Digital Media and BIDM.",
		categories: ["technology"],
		tech: ["Next.js"],
		location: "Belagavi",
	},
	{
		id: "belagavi-insider",
		title: "Belagavi Insider",
		url: "https://belagaviinsider.com/",
		description:
			"Digital news portal for Belagavi with local, state and national news, videos, opinion and events, plus a link to its WhatsApp community.",
		categories: ["media"],
		tech: [],
		location: "Belagavi",
	},
	{
		id: "lokadarshan",
		title: "Lokadarshan",
		url: "https://www.lokadarshan.news/",
		description:
			"Kannada-language news website for Lokadarshan, a daily newspaper from Belagavi, covering North Karnataka districts as well as state and national news.",
		categories: ["media"],
		tech: [],
		location: "Belagavi",
		languages: ["Kannada"],
	},
	{
		id: "lokadarshan-epaper",
		title: "Lokadarshan Epaper",
		url: "https://lokadarshanepaper.com/",
		description:
			"E-paper portal where readers pick the day's Dak or City edition of the Lokadarshan Kannada daily.",
		categories: ["media"],
		tech: ["Bootstrap"],
		location: "Belagavi",
	},
	{
		id: "creative-engineers-consultants",
		title: "Creative Engineers & Consultants",
		url: "https://creativemiura.com/index",
		description:
			"Website for the sole licensee of MIURA Engineering (Japan) gravity filtration technology, presenting the MIURA Gravity Super Filter, clientele and contact details.",
		categories: ["industrial"],
		tech: ["Bootstrap"],
	},
];

export const clientImage = (id) => ({
	src: `/images/clients/${id}-720.webp`,
	srcSet: `/images/clients/${id}-720.webp 720w, /images/clients/${id}-1440.webp 1440w`,
	width: 1440,
	height: 1000,
});

export const featuredClientProjects = clientProjects.filter((p) => p.featured);

export const getClientProject = (id) => clientProjects.find((p) => p.id === id);
