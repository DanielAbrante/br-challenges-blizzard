import playIcon from "@/public/assets/banner-hero/icons/play-icon.png";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
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

	useEffect(() => {
		setIsPlayingTrailer(false);
	}, [bannerIndex]);

	return (
		<div className="flex flex-col items-end gap-4">
			<h4 className="font-semibold text-sm hidden laptop:block">
				ASSISTA O TRAILER
			</h4>
			<div className="relative flex justify-center items-center h-[158px] w-full">
				{!isPlayingTrailer ? (
					<>
						<Image
							src={banners[bannerIndex].gameLogoTrailer}
							alt={""}
							fill
							className="hidden tablet:block object-cover"
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
						className="hidden tablet:block object-cover"
						onMouseLeave={stopTrailer}
					/>
				)}
			</div>
		</div>
	);
}
