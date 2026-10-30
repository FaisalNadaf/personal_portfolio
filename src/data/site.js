/**
 * Site identity and contact details. Everything here is published on the site,
 * so only verified, intentionally public information belongs in this file.
 */
export const SITE_URL = (
	import.meta.env.VITE_SITE_URL || "https://faisal-development.netlify.app"
).replace(/\/$/, "");

export const site = {
	name: "Faisal Nadaf",
	shortName: "Faisal",
	role: "Virtual & Freelance Full-Stack Developer",
	tagline: "Virtual developer and freelance full-stack developer",
	location: {
		city: "Belagavi",
		altName: "Belgaum",
		region: "Karnataka",
		country: "India",
		countryCode: "IN",
	},
	phone: "+91 8867216305",
	currentRole: { title: "Full-Stack Developer", company: "Cubiccode", url: "https://cubiccode.org/" },
	photo: "/images/faisal-nadaf-800.webp",
	links: {
		github: "https://github.com/FaisalNadaf",
		linkedin: "https://www.linkedin.com/in/faisal-nadaf-429160281/",
		x: "https://x.com/faisal_nadaf",
		instagram: "https://www.instagram.com/faisal.fn_",
		facebook: "https://www.facebook.com/profile.php?id=100066515105140",
		resume:
			"https://drive.google.com/file/d/1bNZNoXvqvC-HMSsRwCGJox_8hbEZkO-1/view?usp=sharing",
	},
	// EmailJS identifiers are public by design (browser SDK). Abuse controls
	// (reCAPTCHA, allowed origins, fixed recipient) live in the EmailJS dashboard.
	emailjs: {
		serviceId: "service_br00yk5",
		templateId: "template_igrpbae",
		publicKey: "w95W4XH0su1-P8i_q",
	},
};

export const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/services", label: "Services" },
	{ to: "/client-projects", label: "Client Projects" },
	{ to: "/personal-projects", label: "Personal Projects" },
	{ to: "/about", label: "About" },
	{ to: "/contact", label: "Contact" },
];

export const socialLinks = [
	{ key: "github", label: "GitHub", href: site.links.github },
	{ key: "linkedin", label: "LinkedIn", href: site.links.linkedin },
	{ key: "x", label: "X (Twitter)", href: site.links.x },
	{ key: "instagram", label: "Instagram", href: site.links.instagram },
	{ key: "facebook", label: "Facebook", href: site.links.facebook },
];
