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
				tablet: "768px",
				laptop: "1440px",
				desktop: "1920px",
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
			padding: {
				galleryHeader: "clamp(3.5625rem, 3.1377rem + 1.8123vw, 5.3125rem)",
			},
			gridTemplateColumns: {
				smallGrid: "repeat(2, minmax(156px, 1fr))",
				mediumGrid: "repeat(3, minmax(203px, 1fr))",
				bigGrid: "repeat(4, 1fr)",
			},
			backgroundImage: {
				footerBackground: "url('/assets/footer-background.png')",
				modalBackground: "url('/assets/modal-background.png')",
			},
		},
	},
	plugins: [],
};
export default config;
