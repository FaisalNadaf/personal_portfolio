/** @format */

import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PageMeta from "../seo/PageMeta";
import JsonLd from "../seo/JsonLd";
import { createReveal } from "../../lib/reveal";
import { pages } from "../../seo/pages";

/** Scroll to the top (or to #hash) on navigation and move focus to the page. */
function useRouteFocus() {
	const { pathname, hash } = useLocation();
	const first = useRef(true);
	useEffect(() => {
		if (first.current) {
			first.current = false;
			return;
		}
		if (hash) {
			const target = document.getElementById(decodeURIComponent(hash.slice(1)));
			if (target) {
				target.scrollIntoView();
				return;
			}
		}
		window.scrollTo(0, 0);
		document.getElementById("main")?.focus({ preventScroll: true });
	}, [pathname, hash]);
}

export default function Layout() {
	const { pathname } = useLocation();
	useRouteFocus();

	useEffect(() => {
		const reveal = createReveal({ watch: true });
		return () => reveal.destroy();
	}, []);

	const knownPath = pages[pathname] ? pathname : null;

	return (
		<>
			<div id="top-sentinel" className="absolute left-0 top-0 h-px w-px" aria-hidden="true" />
			<a
				href="#main"
				className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0">
				Skip to content
			</a>
			<SiteHeader />
			<main id="main" tabIndex={-1} className="outline-none">
				<Outlet />
			</main>
			<SiteFooter />
			<PageMeta path={knownPath ?? "404"} />
			{knownPath && <JsonLd path={knownPath} />}
		</>
	);
}
