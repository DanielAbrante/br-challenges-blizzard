import Image from "next/image";

import { motion } from "framer-motion";
import { useBannerContext } from ".";

export default function BannerBackground() {
	const { bannerDelay, banner } = useBannerContext();

	return (
		<>
			<Image
				src={banner.background}
				priority
				alt=""
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
