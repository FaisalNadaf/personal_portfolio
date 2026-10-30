/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Surfaces
				canvas: { DEFAULT: "#FFFFFF", warm: "#FBFAF8" },
				sand: { 50: "#FAF8F5", 100: "#F3F0EA", 200: "#E8E3DA" },
				// Text
				ink: {
					DEFAULT: "#101828",
					soft: "#344054",
					muted: "#5D6679",
					faint: "#98A2B3",
				},
				// Borders
				line: { DEFAULT: "#E7E5E0", strong: "#D5D2CB" },
				// Primary: indigo blue
				brand: {
					50: "#EEF1FF",
					100: "#E0E6FF",
					200: "#C6D0FE",
					300: "#A3B1FB",
					400: "#7E8CF5",
					500: "#5B67EC",
					600: "#4651DE",
					700: "#3940C0",
					800: "#30369B",
					900: "#2C337A",
				},
				// Secondary tints
				mist: { 50: "#F1F6FE", 100: "#E2ECFC", 600: "#2F5FD0" },
				lavender: { 50: "#F5F3FF", 100: "#EDE9FE", 600: "#6D4FD8" },
				mint: { 50: "#EFFAF5", 100: "#D7F3E6", 700: "#0F7A55" },
			},
			fontFamily: {
				sans: [
					"'Inter Variable'",
					"'Inter Fallback'",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
			},
			fontSize: {
				display: [
					"clamp(2.25rem, 1.7rem + 2.3vw, 3.35rem)",
					{ lineHeight: "1.05", letterSpacing: "-0.035em" },
				],
				h1: [
					"clamp(2rem, 1.5rem + 2.1vw, 3.125rem)",
					{ lineHeight: "1.1", letterSpacing: "-0.03em" },
				],
				h2: [
					"clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem)",
					{ lineHeight: "1.12", letterSpacing: "-0.025em" },
				],
				h3: [
					"clamp(1.125rem, 1.06rem + 0.3vw, 1.3125rem)",
					{ lineHeight: "1.3", letterSpacing: "-0.01em" },
				],
				lead: ["clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)", { lineHeight: "1.6" }],
			},
			fontWeight: { display: "650" },
			spacing: {
				gutter: "clamp(1.25rem, 0.8rem + 2vw, 2rem)",
				section: "clamp(4rem, 2.75rem + 4.5vw, 7.5rem)",
			},
			maxWidth: { container: "76rem", prose: "68ch" },
			borderRadius: { "4xl": "2rem" },
			boxShadow: {
				card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
				lift: "0 2px 4px rgba(16, 24, 40, 0.04), 0 16px 32px -12px rgba(16, 24, 40, 0.16)",
				frame: "0 1px 0 rgba(16, 24, 40, 0.04), 0 28px 56px -24px rgba(31, 41, 92, 0.28)",
			},
			transitionTimingFunction: {
				out: "cubic-bezier(0.16, 1, 0.3, 1)",
				standard: "cubic-bezier(0.2, 0, 0, 1)",
			},
			transitionDuration: { fast: "160ms", base: "240ms", slow: "480ms" },
		},
	},
	plugins: [],
};
