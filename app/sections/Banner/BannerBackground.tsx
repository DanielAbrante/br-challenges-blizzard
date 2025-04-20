"use client";

import diablo from "@/public/assets/banner-hero/games/diablo-bg.png";
import hearthstone from "@/public/assets/banner-hero/games/hearthstone-bg.png";
import wow from "@/public/assets/banner-hero/games/wow-bg.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

const backgrounds = [diablo, hearthstone, wow];

export default function BannerBackground() {
	const [currentBG, setCurrentBG] = useState<number>(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentBG((prevIndex) =>
				prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1,
			);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Image
				src={backgrounds[currentBG]}
				alt=""
				className="absolute size-full -z-10  object-cover brightness-75 object-top"
			/>
			<motion.div
				key={currentBG}
				className="absolute bottom-0 h-[3px] bg-blue"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{
					duration: 3,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			></motion.div>
		</>
	);
}
