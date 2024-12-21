/** @format */

import React, { useEffect } from "react";

const SvgTextLoader = () => {
	// Inject keyframes into the document
	const injectKeyframes = () => {
		const styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
	};

	useEffect(() => {
		injectKeyframes();
	}, []);

	return (
		<div style={styles.loaderContainer}>
			<svg
				viewBox="0 0 400 160"
				style={styles.svg}>
				<text
					x="50%"
					y="50%"
					dy=".32em"
					textAnchor="middle"
					style={styles.textBody}>
					Faisal.dev
				</text>
			</svg>
		</div>
	);
};

// Inline styles for the loader
const styles = {
	loaderContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	svg: {
		width: "10rem",
		fontWeight: 900,
	},
	textBody: {
		fontSize: "4rem",
		// stroke: "#f6e9fe",
		stroke: "#414141FF",
        
		strokeWidth: 2,
		letterSpacing: "-1px",
		animation: "stoke_animate 4s infinite alternate",
	},
};

// Add keyframes to the document for animations
const keyframes = `
@keyframes stoke_animate {
  0% {
    fill: transparent;
    stroke: #f6e9fe;
    stroke-width: 3;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 32%;
  }
  50% {
    fill: transparent;
    stroke: #f6e9fe;
    stroke-width: 3;
  }
  80%, 100% {
    fill: #f6e9fe;
    stroke: transparent;
    stroke-width: 0;
    stroke-dashoffset: -25%;
    stroke-dasharray: 32% 0;
  }
}
`;

export default SvgTextLoader;
