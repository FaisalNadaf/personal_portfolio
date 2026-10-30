/**
 * JSON-LD builders. Everything here mirrors visible page content; nothing is
 * marked up that the page does not show.
 */
import { SITE_URL, site, socialLinks } from "../data/site.js";
import { services } from "../data/services.js";
import { clientProjects } from "../data/clientProjects.js";
import { personalProjects, openSourceProjects } from "../data/personalProjects.js";
import { faqs } from "../data/faqs.js";
import { pages } from "./pages.js";

const abs = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const person = () => ({
	"@type": "Person",
	"@id": PERSON_ID,
	name: site.name,
	url: abs("/"),
	image: abs(site.photo),
	jobTitle: "Full-Stack Developer",
	description:
		"Full-stack developer based in Belagavi (Belgaum), Karnataka, available as a virtual developer and for freelance projects.",
	worksFor: { "@type": "Organization", name: site.currentRole.company, url: site.currentRole.url },
	address: {
		"@type": "PostalAddress",
		addressLocality: site.location.city,
		addressRegion: site.location.region,
		addressCountry: site.location.countryCode,
	},
	knowsAbout: [
		"React",
		"Next.js",
		"Node.js",
		"MongoDB",
		"PostgreSQL",
		"Flutter",
		"FastAPI",
		"Google Gemini API",
		"Web development",
		"Mobile app development",
	],
	sameAs: socialLinks.map((l) => l.href),
});

const website = () => ({
	"@type": "WebSite",
	"@id": WEBSITE_ID,
	url: abs("/"),
	name: `${site.name}, ${site.tagline}`,
	inLanguage: "en-IN",
	publisher: { "@id": PERSON_ID },
});

const webPage = (path, type = "WebPage") => ({
	"@type": type,
	"@id": `${abs(path)}#webpage`,
	url: abs(path),
	name: pages[path].title,
	description: pages[path].description,
	isPartOf: { "@id": WEBSITE_ID },
	inLanguage: "en-IN",
});

const breadcrumb = (path) => ({
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
		{ "@type": "ListItem", position: 2, name: pages[path].breadcrumb, item: abs(path) },
	],
});

const serviceNode = (s) => ({
	"@type": "Service",
	name: s.title,
	description: s.summary,
	url: `${abs("/services")}#${s.id}`,
	provider: { "@id": PERSON_ID },
	areaServed: [
		{ "@type": "City", name: "Belagavi" },
		{ "@type": "Country", name: "India" },
	],
});

const faqPage = () => ({
	"@type": "FAQPage",
	mainEntity: faqs.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: { "@type": "Answer", text: f.a },
	})),
});

const graph = (nodes) => ({ "@context": "https://schema.org", "@graph": nodes });

export function structuredDataFor(path) {
	switch (path) {
		case "/":
			return graph([website(), person(), webPage("/"), ...services.map(serviceNode), faqPage()]);
		case "/services":
			return graph([webPage("/services"), breadcrumb("/services"), ...services.map(serviceNode)]);
		case "/client-projects":
			return graph([
				{
					...webPage("/client-projects", "CollectionPage"),
					mainEntity: {
						"@type": "ItemList",
						numberOfItems: clientProjects.length,
						itemListElement: clientProjects.map((p, i) => ({
							"@type": "ListItem",
							position: i + 1,
							item: {
								"@type": "WebSite",
								name: p.title,
								url: p.url,
								description: p.description,
								image: abs(`/images/clients/${p.id}-1440.webp`),
								creator: { "@id": PERSON_ID },
							},
						})),
					},
				},
				breadcrumb("/client-projects"),
			]);
		case "/personal-projects":
			return graph([
				{
					...webPage("/personal-projects", "CollectionPage"),
					mainEntity: {
						"@type": "ItemList",
						itemListElement: [
							...personalProjects.map((p) => ({
								"@type": "CreativeWork",
								name: p.title,
								description: p.problem,
								creator: { "@id": PERSON_ID },
							})),
							...openSourceProjects.map((p) => ({
								"@type": "SoftwareSourceCode",
								name: p.title,
								description: p.description,
								codeRepository: p.github,
								creator: { "@id": PERSON_ID },
							})),
						].map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
					},
				},
				breadcrumb("/personal-projects"),
			]);
		case "/about":
			return graph([
				{ ...webPage("/about", "ProfilePage"), mainEntity: { "@id": PERSON_ID } },
				person(),
				breadcrumb("/about"),
			]);
		case "/contact":
			return graph([webPage("/contact", "ContactPage"), breadcrumb("/contact")]);
		case "/privacy":
			return graph([webPage("/privacy"), breadcrumb("/privacy")]);
		default:
			return null;
	}
}
