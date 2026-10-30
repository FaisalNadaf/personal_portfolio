/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
	plugins: [react()],
	build: {
		// The SSR bundle is only used at build time by scripts/prerender.mjs.
		rollupOptions: isSsrBuild
			? {}
			: {
					output: {
						manualChunks: {
							vendor: ["react", "react-dom", "react-router-dom", "@remix-run/router"],
						},
					},
				},
		minify: isSsrBuild ? false : "terser",
		terserOptions: {
			compress: { drop_console: true, drop_debugger: true },
		},
		cssCodeSplit: true,
		sourcemap: false,
	},
}));
