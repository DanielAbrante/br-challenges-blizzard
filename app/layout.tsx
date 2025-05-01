import "@/app/globals.css";
import type { Metadata } from "next";
import { poppins } from "./fonts";

export const metadata: Metadata = {
	title: "Blizzard Website",
	description: "Blizzard Landing Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
