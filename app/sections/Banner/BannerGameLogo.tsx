import Image from "next/image";
import { forwardRef } from "react";
import { useBannerContext } from ".";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const BannerGameLogo = forwardRef<HTMLImageElement, any>((_, ref) => {
	const { banner } = useBannerContext();

	return (
		<Image
			ref={ref}
			src={banner.logo}
			alt=""
			width={280}
			height={154}
			className="absolute z-50 hidden md:top-16 md:right-0 md:block"
		/>
	);
});
