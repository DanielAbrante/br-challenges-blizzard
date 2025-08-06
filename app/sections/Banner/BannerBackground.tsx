import Image from "next/image";

import { motion } from "framer-motion";
import { useBannerContext } from ".";
import { banners } from "./bannerData";

export default function BannerBackground() {
	const { bannerDelay, banner, bannerIndex, setIsEndedAnimation } =
		useBannerContext();

	const nextImage = banners[(bannerIndex + 1) % banners.length];

	return (
		<>
			<Image
				src={banner.background}
				priority
				alt=""
				className={`-z-10 absolute size-full object-cover ${banner.isCenterPosition ? "object-top" : "object-[70%_top]"} brightness-75`}
			/>
			<Image src={nextImage.background} alt="" className="invisible size-0" />

			<motion.div
				key={bannerIndex}
				className="absolute bottom-0 h-[3px] bg-blue-100"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{
					duration: bannerDelay / 1000,
					ease: "linear",
				}}
				onAnimationComplete={() => setIsEndedAnimation(true)}
			/>
		</>
	);
}
