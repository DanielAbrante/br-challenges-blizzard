import Image from "next/image";
import { forwardRef, useContext } from "react";
import { BannerContext } from ".";
import { banners } from "../../data/banner-data";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const BannerGameLogo = forwardRef<HTMLImageElement, any>((_, ref) => {
	const bannerIndex = useContext(BannerContext);

	return (
		<Image
			ref={ref}
			src={banners[bannerIndex].gameLogo}
			width={280}
			height={150}
			alt=""
			className="absolute hidden md:top-16 md:right-0 md:block"
		/>
	);
});
