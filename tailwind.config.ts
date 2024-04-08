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
      },
      fontSize: {
        bannerTitle: "clamp(2.5rem, 1rem + 6vw, 4rem);",
      },
      keyframes: {
        loading: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        bannerSwitch: "loading 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
