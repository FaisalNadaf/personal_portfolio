<!-- @format -->

# Faisal Nadaf: virtual and freelance developer website

The website of Faisal Nadaf, a full-stack developer in Belagavi (Belgaum), Karnataka. It presents two ways to hire him (ongoing virtual developer support and freelance projects), 17 real client websites with homepage screenshots, personal products, services, and a working contact form.

## Stack

- React 18, React Router 6, Vite 6
- Tailwind CSS 3 with design tokens in `tailwind.config.js` and `src/index.css`
- Inter variable font, self-hosted through `@fontsource-variable/inter`
- Icons: `lucide-react`; brand marks in `src/components/ui/BrandIcons.jsx`
- Contact form delivery: EmailJS (browser SDK, loaded only when a message is sent)
- No animation library: CSS transitions, a small scroll reveal controller (`src/lib/reveal.js`), native scroll snapping and the View Transitions API

## Scripts

```bash
npm install
npm run dev       # development server (renders on the client only)
npm run build     # client build + SSR bundle + prerender of every route
npm run preview   # serve the production build locally
npm run lint
```

`npm run build` runs three steps:

1. `vite build` builds the client bundle.
2. `vite build --ssr src/entry-server.jsx --outDir dist/.ssr` builds a server renderer.
3. `node scripts/prerender.mjs` writes static HTML for every route in `src/seo/pages.js` (with its title, description, canonical URL, Open Graph tags and JSON-LD), plus `404.html`, `sitemap.xml` and `robots.txt`. The browser then hydrates the page.

Set the public site address with `VITE_SITE_URL` (default `https://faisal-development.netlify.app`). It is used for canonical URLs, the sitemap and structured data.

## Where content lives

| Content | File |
| --- | --- |
| Name, contact details, social links, EmailJS IDs | `src/data/site.js` |
| Client websites (carousel, bento, grid, filters) | `src/data/clientProjects.js` |
| Personal products and open-source projects | `src/data/personalProjects.js` |
| Services | `src/data/services.js` |
| Experience, education, hackathons | `src/data/profile.js` |
| FAQ, process, technology stack | `src/data/faqs.js`, `src/data/process.js`, `src/data/techStack.js` |
| Page titles and descriptions | `src/seo/pages.js` |
| Structured data | `src/seo/structuredData.js` |

## Maintenance tools

These are development-only scripts; they are not part of the build.

```bash
# Re-capture client homepage screenshots (needs Playwright and Microsoft Edge)
node scripts/capture-client-screenshots.cjs
python scripts/optimize-client-screenshots.py   # PNG -> WebP in public/images/clients

python scripts/fetch-personal-screenshots.py     # personal project screenshots -> WebP
python scripts/generate-brand-assets.py          # favicon, app icons and og-image.png
```

Raw captures are stored in `.screenshots/` (ignored by Git).

## Deployment

The build output in `dist/` is static and works on any static host.

- **Vercel**: `vercel.json` sets the build command, output directory, clean URLs and security headers. Unknown paths are served `404.html`.
- **Netlify**: `public/_headers` sets the same headers. Netlify serves `/services` from `services.html` and unknown paths from `404.html`.
- **GitHub Pages**: `npm run deploy:gh-pages`.

The EmailJS template must accept the parameters `from_name`, `from_email`, `reply_to`, `subject` and `message`. All form fields are included in `subject` and `message`. Spam controls such as reCAPTCHA, allowed origins and a fixed recipient address are configured in the EmailJS dashboard.

No analytics provider is configured. `src/lib/track.js` forwards conversion events only if Plausible, Google Analytics or a GTM data layer is added to the page later.
