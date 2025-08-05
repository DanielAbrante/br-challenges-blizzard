import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: "#00AEFF",
				black: "#020203",
				black200: "#07070A",
				black300: "#212428",
				black400: "#0E1117E2",
				black500: "#15171B",
				white: "#FFFFFF",
				gray: "#8F9199",
				graySemiBold: "#9D9D9D",
				grayBold: "#363842",
				graySemiLight: "#BCC0CA",
				grayLight: "#E5E5E5",
			},
			fontSize: {
				h2: "clamp(1.75rem, 1.5115rem + 1.0178vw, 2rem)",
				bannerTitle: "clamp(2.5rem, 1rem + 6vw, 4rem)",
			},
			maxWidth: {
				md: "675px",
				xl: "1216px",
				"2xl": "1300px",
			},
			padding: {
				sm: "1.5rem",
				md: "3rem",
				xl: "7rem",
				"2xl": "72rem",
				galleryHeader: "clamp(3.5625rem, 3.1377rem + 1.8123vw, 5.3125rem)",
			},
			gridTemplateColumns: {
				sm: "repeat(auto-fit, minmax(8rem, 1fr))",
				md: "repeat(auto-fit, minmax(12.5rem, 1fr))",
				xl: "repeat(4, 1fr)",
			},
			backgroundImage: {
				footerBackground: "url('/assets/footer-background.png')",
				modalBackground: "url('/assets/modal-background.png')",
			},
			animation: {
				illustration: "levitate 4s infinite",
			},
			keyframes: {
				levitate: {
					"0%, 100%": { transform: "translateY(1%)" },
					"50%": { transform: "translateY(-1%)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
