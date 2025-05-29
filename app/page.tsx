"use client";

import { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Menu from "./sections/Header";

export default function Home() {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div>
				<h1 className="text-blue">Loading...</h1>
			</div>
		);
	}

	return (
		<>
			<Menu />
			<Banner />
			<Gallery />
			<Footer />
		</>
	);
}
