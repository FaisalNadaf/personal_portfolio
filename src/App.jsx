/** @format */

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ClientProjectsPage from "./pages/ClientProjectsPage";
import PersonalProjectsPage from "./pages/PersonalProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";

/* Routes are rendered on the server at build time (scripts/prerender.mjs) and
   hydrated in the browser, so every page ships with its full HTML. Keep the
   path list in sync with src/seo/pages.js. */
export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="services" element={<ServicesPage />} />
				<Route path="client-projects" element={<ClientProjectsPage />} />
				<Route path="personal-projects" element={<PersonalProjectsPage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="privacy" element={<PrivacyPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
