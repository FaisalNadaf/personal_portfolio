import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const app = (
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// Pages are prerendered at build time; hydrate them. The dev server serves an
// empty root, so render from scratch there.
if (container.hasChildNodes()) {
	hydrateRoot(container, app);
} else {
	createRoot(container).render(app);
}
