"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useBannerContext } from ".";

import { banners } from "./bannerData";

export default function BannerBackground() {
	const { setBannerIndex, bannerDelay, banner } = useBannerContext();

	useEffect(() => {
		const intervalId = setInterval(() => {
			setBannerIndex((prevIndex) =>
				prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
			);
		}, bannerDelay);

		return () => clearInterval(intervalId);
	}, [setBannerIndex, bannerDelay]);

	return (
		<>
			<Image
				src={banner.background}
				priority
				alt=""
				fill
				className={`-z-10 absolute size-full object-cover ${banner.isCenteredPosition ? "object-top" : "object-[70%_top]"} brightness-75`}
			/>
			<motion.div
				key={banner.id}
				className="absolute bottom-0 h-[3px] bg-blue"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{
					duration: bannerDelay / 1000,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			/>
		</>
	);
}
