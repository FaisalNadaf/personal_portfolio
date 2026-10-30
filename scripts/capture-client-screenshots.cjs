/**
 * Captures real homepage screenshots of the client websites in
 * src/data/clientProjects.js and records observable page details (title,
 * description, headings, technology markers) for writing accurate project
 * descriptions. Then run scripts/optimize-client-screenshots.py to produce the
 * WebP files the site uses.
 *
 * Development tool only. Requires Node 22+ (loads the ES module data file),
 * Playwright resolved from the project or a global install, and an installed
 * Microsoft Edge (or set PW_CHANNEL=chrome).
 *
 *   node scripts/capture-client-screenshots.cjs [outDir]
 *
 * Output: <outDir>/<project-id>.png (1440x1000 viewport) and <outDir>/report.json
 */
const fs = require("fs");
const path = require("path");

function loadPlaywright() {
	const candidates = [
		"playwright",
		path.join(process.env.APPDATA || "", "npm", "node_modules", "playwright"),
	];
	for (const c of candidates) {
		try {
			return require(c);
		} catch {
			/* try next */
		}
	}
	throw new Error("Playwright not found. Install it globally: npm i -g playwright");
}

const { chromium } = loadPlaywright();
const { clientProjects } = require(path.join(__dirname, "..", "src", "data", "clientProjects.js"));
const urls = clientProjects.map((p) => p.url);
const idFor = new Map(clientProjects.map((p) => [p.url, p.id]));
const outDir = path.resolve(process.argv[2] || path.join(__dirname, "..", ".screenshots", "clients"));
fs.mkdirSync(outDir, { recursive: true });

async function capture(browser, url) {
	const slug = idFor.get(url);
	const ctx = await browser.newContext({
		viewport: { width: 1440, height: 1000 },
		deviceScaleFactor: 1,
		locale: "en-US",
	});
	const page = await ctx.newPage();
	const result = { url, slug };
	try {
		const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
		result.status = resp ? resp.status() : null;
		await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
		// Scroll through once so lazy images and reveal animations settle, then return to the top.
		await page.evaluate(async () => {
			const step = 700;
			for (let y = 0; y < Math.min(document.body.scrollHeight, 9000); y += step) {
				window.scrollTo(0, y);
				await new Promise((r) => setTimeout(r, 150));
			}
			window.scrollTo(0, 0);
		});
		await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
		await page.waitForTimeout(3000);
		result.finalUrl = page.url();
		Object.assign(
			result,
			await page.evaluate(() => {
				const meta = (sel) => document.querySelector(sel)?.getAttribute("content") || null;
				const texts = (sel, n) =>
					[...document.querySelectorAll(sel)]
						.map((e) => (e.innerText || "").replace(/\s+/g, " ").trim())
						.filter(Boolean)
						.slice(0, n);
				const html = document.documentElement.outerHTML;
				const markers = {
					wordpress: /wp-content|wp-includes/.test(html),
					elementor: /elementor/.test(html),
					nextjs: !!document.getElementById("__NEXT_DATA__") || /\/_next\/static/.test(html),
					nuxt: /\/_nuxt\//.test(html),
					react: !!document.querySelector("#root, [data-reactroot]"),
					viteAssets: /\/assets\/index-[\w-]+\.js/.test(html),
					tailwind: /tailwind/i.test(html),
					wix: /wixstatic|wix\.com/.test(html),
					shopify: /cdn\.shopify\.com/.test(html),
					hostingerBuilder: /zyrosite|hostinger/i.test(html),
					bootstrap: /bootstrap(\.min)?\.(css|js)/.test(html),
				};
				return {
					title: document.title,
					description: meta('meta[name="description"]'),
					ogSiteName: meta('meta[property="og:site_name"]'),
					ogTitle: meta('meta[property="og:title"]'),
					generator: meta('meta[name="generator"]'),
					lang: document.documentElement.lang || null,
					h1: texts("h1", 3),
					h2: texts("h2", 12),
					nav: texts("nav a, header a", 16),
					bodyText: (document.body.innerText || "").replace(/\s+/g, " ").trim().slice(0, 1800),
					markers,
				};
			}),
		);
		const file = path.join(outDir, `${slug}.png`);
		await page.screenshot({ path: file, fullPage: false });
		result.screenshot = file;
		result.ok = true;
	} catch (err) {
		result.ok = false;
		result.error = String(err && err.message ? err.message : err).slice(0, 300);
	} finally {
		await ctx.close();
	}
	return result;
}

(async () => {
	const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || "msedge" });
	const queue = [...urls];
	const results = [];
	const workers = Array.from({ length: 3 }, async () => {
		while (queue.length) {
			const url = queue.shift();
			const r = await capture(browser, url);
			results.push(r);
			console.log(`${r.ok ? "ok  " : "FAIL"} ${r.status ?? "-"} ${url}${r.error ? "  " + r.error : ""}`);
		}
	});
	await Promise.all(workers);
	await browser.close();
	results.sort((a, b) => urls.indexOf(a.url) - urls.indexOf(b.url));
	fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify(results, null, 2));
	console.log(`Saved ${results.filter((r) => r.ok).length}/${urls.length} screenshots to ${outDir}`);
})().catch((e) => {
	console.error(e);
	process.exit(1);
});
