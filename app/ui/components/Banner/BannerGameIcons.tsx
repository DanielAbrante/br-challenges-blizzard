import Image from "next/image";

import { useContext } from "react";
import { BannerContext } from ".";
import { gameIcons } from "../../data/banner-data";

function BannerGameIcons() {
	const bannerIndex = useContext(BannerContext);

	return (
		<ul className="mt-12 flex gap-4 lg:flex-col">
			{gameIcons.map((gameIcon, index) => (
				<li key={index}>
					<Image
						src={gameIcon}
						alt=""
						className={`cursor-pointer grayscale hover:grayscale-0 ${index == bannerIndex ? "grayscale-0" : ""}`}
					/>
				</li>
			))}
		</ul>
	);
}

export default BannerGameIcons;
