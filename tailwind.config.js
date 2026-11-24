/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: {
					DEFAULT: "#09090b",
					elevated: "#18181b",
				},
				surface: {
					DEFAULT: "#27272a",
					muted: "#1f1f23",
				},
				accent: {
					DEFAULT: "#3b82f6",
					hover: "#2563eb",
					soft: "rgba(59, 130, 246, 0.12)",
				},
				ink: {
					primary: "#f4f4f5",
					secondary: "#a1a1aa",
					muted: "#71717a",
				},
			},
			fontFamily: {
				sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			maxWidth: {
				container: "72rem",
			},
			boxShadow: {
				glow: "0 0 0 1px rgba(59, 130, 246, 0.35), 0 8px 24px -8px rgba(59, 130, 246, 0.45)",
				"glow-sm": "0 4px 20px -8px rgba(59, 130, 246, 0.4)",
				"glow-lg":
					"0 0 0 1px rgba(59, 130, 246, 0.4), 0 20px 60px -20px rgba(59, 130, 246, 0.5)",
			},
			backgroundImage: {
				"grid-dots":
					"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
				"orb-blue":
					"radial-gradient(600px circle at 0% 0%, rgba(59,130,246,0.12), transparent 50%)",
				"orb-indigo":
					"radial-gradient(600px circle at 100% 100%, rgba(99,102,241,0.10), transparent 50%)",
			},
			keyframes: {
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(12px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"gradient-shift": {
					"0%,100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				"pulse-soft": {
					"0%,100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},
				"bounce-slow": {
					"0%,100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(6px)" },
				},
				shine: {
					"0%": { transform: "translateX(-120%) skewX(-15deg)" },
					"100%": { transform: "translateX(220%) skewX(-15deg)" },
				},
			},
			animation: {
				"fade-in-up": "fade-in-up 0.6s ease-out both",
				"gradient-shift": "gradient-shift 8s ease infinite",
				"pulse-soft": "pulse-soft 2s ease-in-out infinite",
				"bounce-slow": "bounce-slow 2s ease-in-out infinite",
				shine: "shine 1s ease-out",
			},
		},
	},
	plugins: [],
};
