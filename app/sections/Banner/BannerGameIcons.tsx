import Image from "next/image";

import { useBannerContext } from ".";
import { banners } from "./bannerData";

function BannerGameIcons() {
	const { bannerIndex } = useBannerContext();

	return (
		<ul className="flex gap-4 xl:flex-col">
			{banners.map((banner) => (
				<li key={banner.id}>
					<Image
						src={banner.icon}
						alt=""
						className={`cursor-pointer grayscale hover:grayscale-0 ${banner.id === (bannerIndex + 1) ? "grayscale-0" : ""}`}
					/>
				</li>
			))}
		</ul>
	);
}

export default BannerGameIcons;
