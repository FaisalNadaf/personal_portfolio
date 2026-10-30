/**
 * Professional background: experience, education and hackathons.
 * Migrated from the previous portfolio data with copy edits only. Placeholder
 * links from the old data (for example "link-to-demo-or-screenshot.com") were
 * not carried over; `website` is set only for real company or client sites.
 */

export const experiences = [
	{
		id: "cubiccode",
		role: "Full-Stack Developer",
		company: "Cubiccode",
		date: "Feb 2026 – Present",
		current: true,
		description:
			"Build and maintain full-stack web applications with React.js, Next.js, Node.js, Express.js and MongoDB, delivering responsive and scalable solutions. Automate build, test and release cycles through Git and GitHub workflows and CI/CD pipelines. Plan, develop and ship features with an agile team across iterative sprints.",
		skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "CI/CD", "Agile"],
		website: "https://cubiccode.in/",
	},
	{
		id: "positron",
		role: "Freelance Full-Stack Developer",
		company: "Positron (heat exchanger manufacturer)",
		date: "Mar 2026 – May 2026",
		description:
			"Designed and shipped a live, production-ready corporate website for Positron, a global heat exchanger manufacturer. Built a multilingual (i18n) experience for clients in several countries, with responsive layouts, optimised performance and an SEO-ready architecture.",
		skills: ["React", "Internationalisation (i18n)", "SEO", "Performance", "Deployment"],
		// HTTPS did not respond on 2026-10-19; the HTTP address works.
		website: "http://positron-he.com/",
	},
	{
		id: "vignyan",
		role: "Full-Stack Web Developer",
		company: "Vignyan PU College",
		date: "Nov 2025",
		description:
			"Designed and shipped the college website end to end, covering UI, responsive layouts and dynamic pages, to give the institution a polished and scalable web presence.",
		skills: ["React", "JavaScript", "Responsive design", "API integration", "Hosting"],
		website: "https://vignyanpucollege.com/",
	},
	{
		id: "lettrblack",
		role: "Web Developer Intern",
		company: "LettrBlack",
		date: "Sep 2025 – Feb 2026",
		description:
			"Built production web apps alongside the startup team, shipping features for 18+ hours a week in a fast, agile workflow.",
		skills: ["React", "JavaScript", "HTML", "CSS", "Agile"],
	},
	{
		id: "successr-hrtech",
		role: "Frontend Development Intern",
		company: "SuccessR Hrtech Pvt Ltd",
		date: "Aug 2025 – Nov 2025",
		description:
			"Built modern frontend solutions for company projects while upholding strict confidentiality and professional standards.",
		skills: ["React", "JavaScript", "UI design"],
	},
	{
		id: "adhira",
		role: "Freelance Full-Stack Developer",
		company: "ADHIRA (freelance project)",
		date: "Aug 2025 – Oct 2025",
		description:
			"Built end-to-end features for a hyperlocal e-commerce platform, covering both the backend logic and the frontend UI.",
		skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
	},
	{
		id: "jsa",
		role: "Freelance Frontend Developer",
		company: "JSA (beauty products company)",
		date: "Oct 2024 – Nov 2024",
		description:
			"Delivered a React app for JSA, a beauty brand, structuring real-world data and writing clean, maintainable code.",
		skills: ["React", "JavaScript", "REST APIs", "Git"],
	},
	{
		id: "successr",
		role: "Freelance Frontend Developer",
		company: "SuccessR",
		date: "Mar 2024 – Apr 2024",
		description:
			"Built a complete working prototype for SuccessR with HTML, CSS and JavaScript, focused on responsive UI and clear user flows.",
		skills: ["HTML", "CSS", "JavaScript", "Prototyping"],
	},
];

export const education = [
	{
		id: "bca",
		school: "KLE's RLS Institute (Autonomous), Belagavi",
		degree: "Bachelor of Computer Applications (BCA)",
		date: "Sep 2023 – Jun 2026",
		detail:
			"8.2 CGPA across the first four semesters. Foundation in data structures and algorithms, object-oriented programming, databases, operating systems and networks; active in the college tech club.",
	},
	{
		id: "class-12",
		school: "Bharatesh Education Trust (BET), Belagavi",
		degree: "Class XII, Science with Computer Science",
		date: "2021 – 2023",
	},
	{
		id: "class-10",
		school: "National Progressive Education Trust's English Medium School, Belagavi",
		degree: "Class X",
		date: "2020 – 2021",
	},
];

/** award: true marks events where the team received a prize or podium place. */
export const hackathons = [
	{
		event: "GANAKA VIDYA 24-hour hackathon",
		venue: "Jain College of Engineering, Belagavi",
		date: "27–28 Apr 2026",
		award: true,
		summary:
			"Developed a rural learning platform with point-based gamification, rankings and reward redemption to improve access to digital education.",
	},
	{
		event: "Evogen 2026",
		venue: "Gogte College of Commerce, BCA (KLS), Belagavi",
		date: "10–11 Apr 2026",
		award: true,
		summary:
			"Built a MERN college management system with role-based access and built-in coding and decoding challenges for event participants.",
	},
	{
		event: "TECHNOVA",
		venue: "RLS Institute (Autonomous), Belagavi",
		date: "27–28 Mar 2026",
		award: true,
		summary:
			"Built a real-time AI privacy system that masks sensitive personal data during online meetings, with severity scoring.",
	},
	{
		event: "PAROUSA: Galaxy of Innovation",
		venue: "Jain College of BBA, BCA & Commerce, Belagavi",
		date: "24–25 Mar 2026",
		award: true,
		summary:
			"Built two Flutter Android apps forming a farmer and market ecosystem with pest guidance and AI-driven agricultural support, including access for users with basic phones.",
	},
	{
		event: "IDEATHON 2K26",
		venue: "RLS Institute (Autonomous), Belagavi",
		date: "6 Mar 2026",
		award: true,
		summary:
			"Presented a structured solution to agricultural challenges in India, focused on scalable digital and economic support for farmers.",
	},
	{
		event: "Acumen 2026",
		venue: "P.C. Jabin Science College (Autonomous), Hubballi",
		date: "27 Feb 2026",
		award: true,
		summary:
			"Solved data structures, aptitude and coding challenges in a national-level Mind Clash competition.",
	},
	{
		event: "TechXplore",
		venue: "KLE Society's BCA College, Belagavi",
		date: "13 Feb 2026",
		summary:
			"Designed an AI-powered freelance platform where users showcase projects, connect with clients and find opportunities.",
	},
	{
		event: "HackPulse 2026",
		venue: "Bharatesh BCA, Belagavi",
		date: "2026",
		award: true,
		summary:
			"Developed a MERN and AI web platform that detects cyberbullying and manipulation, with severity scoring and evidence-backed complaint submission.",
	},
	{
		event: "INNOVERSE 2.0",
		venue: "KLS Gogte Institute of Technology, Belagavi",
		date: "1–2 Dec 2025",
		award: true,
		summary: "Competed as an AI/ML and Android developer in a 24-hour national hackathon on real-world problem statements.",
	},
	{
		event: "Synapse 2K25",
		venue: "JCE Belagavi, with Career Tribe and JCE Innovation & Entrepreneurship Foundation",
		date: "15 Nov 2025",
		summary: "Built solutions under tight time limits in a 12-hour national hackathon and internship fair.",
	},
	{
		event: "HACKSPHERE at SAVISHKAR",
		venue: "Jain College of Engineering and Research (JGI), Belagavi",
		date: "2025",
		summary: "Represented KLE RLS BCA at a national techno-cultural fest, working on live problem statements.",
	},
	{
		event: "Hackvyuva",
		venue: "Hackathon",
		date: "17–18 May 2025",
		summary:
			"Shipped a real-time office productivity system in 48 hours: YOLOv8 and OpenCV detect presence and activity from camera input, with a MERN dashboard for live data.",
	},
	{
		event: "Evogen",
		venue: "Gogte College of Commerce, Belagavi",
		date: "11–12 Apr 2025",
		award: true,
		summary:
			"Built an event-booking platform with an HTML, CSS and Bootstrap frontend and a Node.js, Express and MongoDB backend with real-time confirmations.",
	},
	{
		event: "Technova",
		venue: "RLS Institute, Belagavi",
		date: "28–29 Mar 2025",
		award: true,
		summary:
			"Built a MERN social platform in 24 hours with authentication, real-time posts and comments, profiles and a responsive UI.",
	},
	{
		event: "Inter-college hackathon",
		venue: "KLE RLSI BCA, Belagavi",
		date: "12–13 Dec 2024",
		award: true,
		summary:
			"Two rounds: HackerRank coding challenges and a timed website build. Led the team to ship an e-commerce site with listings, cart and responsive design.",
	},
	{
		event: "Google Developer Group Belgaum",
		venue: "Coding event",
		date: "27 Nov 2024",
		summary:
			"Built the game logic for a Python aircraft shooter: player controls, enemy spawning, collision detection and scoring.",
	},
	{
		event: "Google Developer Group Belgaum",
		venue: "IoT and robotics event",
		date: "1 Dec 2023",
		summary: "Built a remote-controlled IoT truck for a robot-football battle against other DIY bots.",
	},
];

export const awardCount = hackathons.filter((h) => h.award).length;

/** Event photos with alt text written from what each photo shows. */
export const eventPhotos = [
	{
		src: "/images/achievements/acumen-2026-stage.webp",
		alt: "Prize presentation on stage at Acumen 2026, P.C. Jabin Science College, Hubballi",
	},
	{
		src: "/images/achievements/parousa-2026-certificates.webp",
		alt: "Holding participation certificates at PAROUSA 2026, Jain Group of Institutions, Belagavi",
	},
	{
		src: "/images/achievements/gdg-devfest-team.webp",
		alt: "Team photo at DevFest by Google Developer Group Belgaum",
	},
	{
		src: "/images/achievements/trophies.webp",
		alt: "Hackathon trophies and award plaques collected at college events",
	},
];
