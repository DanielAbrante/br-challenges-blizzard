import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xl: "1440px",
				"2xl": "1920px",
			},
			colors: {
				blue: "#00AEFF",
				black: "#020203",
				black300: "#212428",
				white: "#FFFFFF",
				gray: "#8F9199",
				grayBold: "#363842",
				graySemiLight: "#BCC0CA",
				grayLight: "#E5E5E5",
			},
			fontSize: {
				h2: "clamp(1.75rem, 1.5115rem + 1.0178vw, 2rem)",
				bannerTitle: "clamp(2.5rem, 1rem + 6vw, 4rem)",
			},
			maxWidth: {
				global: "1300px",
			},
			padding: {
				sm: "1.5rem",
				md: "4rem",
				xl: "7rem",
				"2xl": "72rem",
				galleryHeader: "clamp(3.5625rem, 3.1377rem + 1.8123vw, 5.3125rem)",
			},
			gridTemplateColumns: {
				sm: "repeat(2, 10rem)",
				md: "repeat(3, 12.5rem)",
				xl: "repeat(4, 17.5rem)",
				"2xl": "repeat(4, 18.5rem)",
			},
			backgroundImage: {
				footerBackground: "url('/assets/footer-background.png')",
				modalBackground: "url('/assets/modal-background.png')",
			},
			animation: {
				illustration: "levitate 5s infinite",
			},
			keyframes: {
				levitate: {
					"0%, 100%": { transform: "translateY(-1%)" },
					"50%": { transform: "translateY(1%)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
