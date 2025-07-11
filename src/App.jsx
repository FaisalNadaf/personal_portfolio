/** @format */

import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

import CertificateSwiper from "./components/sections/CertificateSwiper";
import { ToastContainer } from "react-toastify";
import SnowflakeCursor from "./components/cursor/SnowflakeCursor";
import RippleCursor from "./components/cursor/RippleCursor";
import BubbleCursor from "./components/cursor/BubbleCursor";
<<<<<<< HEAD
import ClickSpark from "./components/cursor/Clickspark";
import Hackathon from "./components/sections/Hackathon";
=======
>>>>>>> a2af69346cc064ae26e4bb633331750b4c7af209

const Body = styled.div`
	background-color: ${({ theme }) => theme.bg};
	width: 100%;
	overflow-x: hidden;
	position: relative;
`;

const Wrapper = styled.div`
	padding-bottom: 100px;
	background: linear-gradient(
			38.73deg,
			rgba(204, 0, 187, 0.15) 0%,
			rgba(201, 32, 184, 0) 50%
		),
		linear-gradient(
			141.27deg,
			rgba(0, 70, 209, 0) 50%,
			rgba(0, 70, 209, 0.15) 100%
		);
	width: 100%;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<BrowserRouter>
				<Navbar />
				<Body>
					<BubbleCursor />
<<<<<<< HEAD

					<ClickSpark
						sparkColor="#fff"
						sparkSize={15}
						sparkRadius={15}
						sparkCount={6}
						duration={500}>
						{/* <SnowflakeCursor /> */}
						{/* <StartCanvas /> */}
						<div>
							<Hero />

							<Wrapper>
								<Skills />
								<Experience />
							</Wrapper>
							<CertificateSwiper title="My Certifications" />
							<Hackathon/>
							<Projects />
							<Wrapper>
								<Education />
								<Contact />
							</Wrapper>
							<Footer />
						</div>
					</ClickSpark>
=======
					<SnowflakeCursor />
					{/* <StartCanvas /> */}
					<div>
						<Hero />

						<Wrapper>
							<Skills />
							<Experience />
						</Wrapper>
						<CertificateSwiper title="My Certifications" />
						<Projects />
						<Wrapper>
							<Education />
							<Contact />
						</Wrapper>
						<Footer />
					</div>
>>>>>>> a2af69346cc064ae26e4bb633331750b4c7af209
				</Body>
			</BrowserRouter>{" "}
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				theme="dark"
			/>
		</ThemeProvider>
	);
}

export default App;
