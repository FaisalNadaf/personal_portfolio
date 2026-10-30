/**
 * Build-time prerendering. Runs after `vite build` (client) and
 * `vite build --ssr src/entry-server.jsx --outDir dist/.ssr`.
 *
 * For every route in src/seo/pages.js it writes static HTML with the full page
 * content and route-specific <head>, so search engines and AI crawlers get real
 * content without executing JavaScript. The browser then hydrates it.
 *
 * Output: dist/index.html, dist/<route>.html, dist/404.html, dist/sitemap.xml,
 * dist/robots.txt. Set SITE_URL via VITE_SITE_URL at build time.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(dist, ".ssr");

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const { render, pages, notFoundPage, routes, SITE_URL } = await import(
	pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const esc = (s) =>
	String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const urlFor = (p) => `${SITE_URL}${p === "/" ? "/" : p}`;

const assets = await fs.readdir(path.join(dist, "assets"));
const font = assets.find((f) => /^inter-latin-wght-normal-.*\.woff2$/.test(f));
const fontPreload = font
	? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`
	: "";

function headFor(meta, pathname, { noindex = false } = {}) {
	return [
		`<title>${esc(meta.title)}</title>`,
		`<meta name="description" content="${esc(meta.description)}" />`,
		noindex
			? `<meta name="robots" content="noindex" />`
			: `<link rel="canonical" href="${urlFor(pathname)}" />`,
		`<meta property="og:title" content="${esc(meta.title)}" />`,
		`<meta property="og:description" content="${esc(meta.description)}" />`,
		`<meta property="og:url" content="${urlFor(pathname)}" />`,
		`<meta name="twitter:title" content="${esc(meta.title)}" />`,
		`<meta name="twitter:description" content="${esc(meta.description)}" />`,
		fontPreload,
	]
		.filter(Boolean)
		.join("\n\t\t");
}

function page(url, meta, opts) {
	const html = render(url);
	const out = template
		.replace("<!--app-head-->", headFor(meta, url, opts))
		.replace("<!--app-html-->", html)
		.replaceAll("%SITE_URL%", SITE_URL);
	if (out.includes("<!--app-")) throw new Error(`Placeholder left in ${url}`);
	return out;
}

const written = [];
for (const route of routes) {
	const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
	await fs.writeFile(path.join(dist, file), page(route, pages[route]));
	written.push(file);
}

await fs.writeFile(path.join(dist, "404.html"), page("/404", notFoundPage, { noindex: true }));
written.push("404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(r) =>
			`  <url>\n    <loc>${urlFor(r)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pages[r].priority}</priority>\n  </url>`,
	)
	.join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
await fs.writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

await fs.rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${written.length} pages for ${SITE_URL}: ${written.join(", ")}`);
console.log("Wrote sitemap.xml and robots.txt");
