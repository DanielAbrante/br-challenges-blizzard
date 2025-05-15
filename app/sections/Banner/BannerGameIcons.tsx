import Image from "next/image";

import { useBannerContext } from ".";
import { banners } from "./bannerData";

function BannerGameIcons() {
	const { bannerIndex, setBannerIndex } = useBannerContext();

	const handleChangeBanner = (bannerId: number) => {
		setBannerIndex(bannerId - 1);
	};

	return (
		<ul className="flex gap-4 xl:flex-col">
			{banners.map((banner) => (
				<li key={banner.id}>
					<Image
						src={banner.icon}
						alt=""
						onClick={() => handleChangeBanner(banner.id)}
						className={`cursor-pointer grayscale hover:grayscale-0 ${banner.id === (bannerIndex + 1) ? "grayscale-0" : ""}`}
					/>
				</li>
			))}
		</ul>
	);
}

export default BannerGameIcons;
