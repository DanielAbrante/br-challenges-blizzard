import playIcon from "@/public/assets/banner-hero/icons/play-icon.png";

import Image from "next/image";
import { useContext, useState } from "react";
import { BannerContext } from ".";
import { banners } from "../../data/banner-data";

export default function BannerTrailer() {
	const bannerIndex = useContext(BannerContext);
	const [isPlayingTrailer, setIsPlayingTrailer] = useState<boolean>(false);

	const playTrailer = () => {
		setIsPlayingTrailer(true);
	};

	const stopTrailer = () => {
		setIsPlayingTrailer(false);
	};

	return (
		<div className="absolute right-0 bottom-20 hidden flex-col items-end gap-4 md:block xl:flex">
			<h4 className="hidden font-semibold text-sm xl:block">
				ASSISTA O TRAILER
			</h4>
			<div className="relative flex h-[158px] w-[280px] items-center justify-center">
				{!isPlayingTrailer ? (
					<>
						<Image
							src={banners[bannerIndex].gameLogoTrailer}
							alt={""}
							fill
							className="hidden object-cover md:block"
							onMouseEnter={playTrailer}
						/>
						<Image src={playIcon} alt="" className="absolute" />
					</>
				) : (
					<Image
						src={banners[bannerIndex].gameTrailer}
						alt={""}
						unoptimized
						fill
						className="hidden object-cover md:block"
						onMouseLeave={stopTrailer}
					/>
				)}
			</div>
		</div>
	);
}
