/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	include: ["swiper"],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// Separate vendor chunks
					vendor: ["react", "react-dom", "react-router-dom"],
					three: ["@react-three/fiber", "@react-three/drei", "ogl"],
					ui: [
						"@mui/material",
						"@mui/icons-material",
						"@emotion/react",
						"@emotion/styled",
						"@react-spring/web",
						"@use-gesture/react",
					],
					utils: [
						"gsap",
						"mathjs",
						"uuid",
						"clsx",
						"tailwind-merge",
						"react-toastify",
					],
					swiper: ["swiper"],
				},
			},
		},
		// Increase chunk size warning limit
		chunkSizeWarningLimit: 1000,
		// Enable minification
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		// Optimize CSS
		cssCodeSplit: true,
		// Generate source maps for production debugging
		sourcemap: false,
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ["react", "react-dom", "swiper"],
	},
});
