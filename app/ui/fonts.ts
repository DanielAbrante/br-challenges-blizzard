import { Inter, Poppins } from "next/font/google";

// I don't have idea why it's causing a preload error when preload is set to true
export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	preload: false,
});

export const inter = Inter({
	subsets: ["latin"],
	weight: ["500"],
	preload: false,
});
