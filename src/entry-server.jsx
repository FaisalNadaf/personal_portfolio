/* Build-time entry for scripts/prerender.mjs; never loaded by the dev server. */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { pages, notFoundPage, routes } from "./seo/pages";
export { SITE_URL, site } from "./data/site";

/** Renders one route to HTML for scripts/prerender.mjs. */
export function render(url) {
	return renderToString(
		<React.StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</React.StrictMode>,
	);
}
