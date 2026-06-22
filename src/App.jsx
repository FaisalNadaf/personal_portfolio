/** @format */

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import BubbleCursor from "./components/cursor/BubbleCursor";
import ClickSpark from "./components/cursor/Clickspark";
import Reveal from "./components/ui/Reveal";
import GradualBlurMemo from "./components/costom/GradualBlur";

// Lazy load sections for better performance
const Hero = lazy(() => import("./components/sections/Hero"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));
const CertificateSwiper = lazy(
	() => import("./components/sections/CertificateSwiper"),
);
const Hackathon = lazy(() => import("./components/sections/Hackathon"));
const Achievements = lazy(() => import("./components/sections/Achievements"));

// Loading component
const SectionLoader = () => (
	<div className="flex items-center justify-center py-20">
		<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
	</div>
);

const decoratedSectionClass = [
	"relative w-full pb-24",
	"bg-[linear-gradient(38.73deg,rgba(59,130,246,0.10)_0%,rgba(59,130,246,0)_50%),linear-gradient(141.27deg,rgba(59,130,246,0)_50%,rgba(99,102,241,0.12)_100%)]",
	"[clip-path:polygon(0_0,100%_0,100%_100%,30%_98%,0_100%)]",
].join(" ");

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="relative w-full overflow-x-hidden bg-bg text-ink-primary">
				{/* Ambient page background */}
				<div className="pointer-events-none fixed inset-0 -z-10 bg-dots opacity-40" />
				<div className="pointer-events-none fixed inset-0 -z-10 bg-orb-blue" />
				<div className="pointer-events-none fixed inset-0 -z-10 bg-orb-indigo" />

				<ClickSpark
					sparkColor="#fff"
					sparkSize={15}
					sparkRadius={15}
					sparkCount={6}
					duration={500}>
					<Suspense fallback={<SectionLoader />}>
						<Hero />
					</Suspense>

					<div className={decoratedSectionClass}>
						<Reveal>
							<Suspense fallback={<SectionLoader />}>
								<Skills />
							</Suspense>
						</Reveal>
						<Reveal>
							<Suspense fallback={<SectionLoader />}>
								<Experience />
							</Suspense>
						</Reveal>
					</div>

					<Reveal>
						<Suspense fallback={<SectionLoader />}>
							<Projects />
						</Suspense>
					</Reveal>
					<Reveal>
						<Suspense fallback={<SectionLoader />}>
							<Hackathon />
						</Suspense>
					</Reveal>

					<Reveal>
						<Suspense fallback={<SectionLoader />}>
							<Achievements />
						</Suspense>
					</Reveal>

					<Reveal>
						<Suspense fallback={<SectionLoader />}>
							<CertificateSwiper title="My Certifications" />
						</Suspense>
					</Reveal>

					<div className={decoratedSectionClass}>
						<Reveal>
							<Suspense fallback={<SectionLoader />}>
								<Education />
							</Suspense>
						</Reveal>
						<Reveal>
							<Suspense fallback={<SectionLoader />}>
								<Contact />
							</Suspense>
						</Reveal>
					</div>

					<Suspense fallback={<SectionLoader />}>
						<Footer />
					</Suspense>
				</ClickSpark>
			</main>

			{/* Viewport-anchored gradual blur at bottom edge */}
			<GradualBlurMemo
				target="page"
				position="bottom"
				height="4rem"
				strength={2}
				divCount={6}
				curve="bezier"
				exponential
				opacity={1}
			/>

			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				theme="dark"
			/>
		</BrowserRouter>
	);
}

export default App;
