/** @format */

import { structuredDataFor } from "../../seo/structuredData";

/** Renders the page's JSON-LD. Data is static; "<" is escaped defensively. */
export default function JsonLd({ path }) {
	const data = structuredDataFor(path);
	if (!data) return null;
	const json = JSON.stringify(data).replace(/</g, "\\u003c");
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
