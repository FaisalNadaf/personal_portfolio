/** @format */

import { useEffect } from "react";
import { SITE_URL } from "../../data/site";
import { pages, notFoundPage } from "../../seo/pages";

function setMeta(selector, attr, value) {
	const el = document.head.querySelector(selector);
	if (el) el.setAttribute(attr, value);
}

/**
 * Keeps the document head in sync during client-side navigation. The initial
 * HTML for every route is written by scripts/prerender.mjs with the same data.
 */
export default function PageMeta({ path }) {
	useEffect(() => {
		const meta = pages[path] ?? notFoundPage;
		const url = `${SITE_URL}${path === "/" ? "/" : path}`;
		document.title = meta.title;
		setMeta('meta[name="description"]', "content", meta.description);
		setMeta('link[rel="canonical"]', "href", url);
		setMeta('meta[property="og:title"]', "content", meta.title);
		setMeta('meta[property="og:description"]', "content", meta.description);
		setMeta('meta[property="og:url"]', "content", url);
		setMeta('meta[name="twitter:title"]', "content", meta.title);
		setMeta('meta[name="twitter:description"]', "content", meta.description);
	}, [path]);
	return null;
}
