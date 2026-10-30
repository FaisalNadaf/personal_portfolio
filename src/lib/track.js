/**
 * Conversion event hook. No analytics provider is configured for this site,
 * so events are only forwarded when a provider script is present on the page
 * (Plausible, Google Analytics gtag, or a GTM dataLayer). Otherwise nothing is
 * sent anywhere; a DOM event is dispatched for local debugging.
 *
 * Never pass form contents or other personal data in `props`.
 */
export function track(event, props = {}) {
	if (typeof window === "undefined") return;
	try {
		if (typeof window.plausible === "function") window.plausible(event, { props });
		if (typeof window.gtag === "function") window.gtag("event", event, props);
		if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...props });
		window.dispatchEvent(new CustomEvent("portfolio:track", { detail: { event, props } }));
	} catch {
		// Tracking must never break the page.
	}
}

export const EVENTS = {
	virtualDeveloperCta: "cta_virtual_developer",
	projectInquiryCta: "cta_project_inquiry",
	contactSubmitted: "contact_form_submitted",
	clientProjectOpened: "client_project_opened",
	personalProjectOpened: "personal_project_opened",
	serviceExplored: "service_explored",
};
