import Image from "next/image";

import { useContext } from "react";
import { BannerContext } from ".";
import { gameIcons } from "../../data/banner-data";

function BannerGameIcons() {
	const bannerIndex = useContext(BannerContext);

	return (
		<ul className="flex gap-4 xl:flex-col">
			{gameIcons.map((gameIcon, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<li key={index}>
					<Image
						src={gameIcon}
						alt=""
						className={`cursor-pointer grayscale hover:grayscale-0 ${index === bannerIndex ? "grayscale-0" : ""}`}
					/>
				</li>
			))}
		</ul>
	);
}

export default BannerGameIcons;
