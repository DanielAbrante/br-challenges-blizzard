import playIcon from "@/public/assets/banner-hero/icons/play-icon.png";

import Image from "next/image";
import { useBannerContext } from ".";

export default function BannerTrailer() {
	const { banner, isPlayingTrailer, setIsPlayingTrailer } = useBannerContext();

	return (
		<div className="absolute right-0 bottom-20 hidden flex-col items-end gap-4 md:block xl:flex">
			<h4 className="hidden font-semibold text-sm xl:block">
				ASSISTA O TRAILER
			</h4>
			<div className="relative flex items-center justify-center hover:cursor-pointer">
				{!isPlayingTrailer ? (
					<>
						<Image
							src={banner.cover}
							alt=""
							width={280}
							height={158}
							className="hidden h-[158px] w-[280px] object-cover md:block"
							onMouseEnter={() => setIsPlayingTrailer(true)}
						/>
						<Image src={playIcon} alt="" className="absolute" />
					</>
				) : (
					<Image
						src={banner.trailer}
						alt={""}
						width={280}
						height={158}
						unoptimized
						className="hidden h-[158px] w-[280px] object-cover md:block"
						onMouseLeave={() => setIsPlayingTrailer(false)}
					/>
				)}
			</div>
		</div>
	);
}
