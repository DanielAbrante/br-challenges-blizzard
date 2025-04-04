"use client";

import { createContext, useEffect, useState } from "react";

import { banners } from "../../data/banner-data";
import { ButtonNormal } from "../Buttons";
import BannerBackground from "./BannerBackground";
import BannerGameIcons from "./BannerGameIcons";
import BannerGameLogo from "./BannerGameLogo";
import BannerTrailer from "./BannerTrailer";

export const BannerContext = createContext(0);

export default function Banner() {
	const [bannerIndex, setBannerIndex] = useState<number>(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setBannerIndex((bannerIndex) =>
				banners.length - 1 === bannerIndex ? 0 : bannerIndex + 1,
			);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className="relative">
			<BannerContext.Provider value={bannerIndex}>
				<BannerBackground />

				<div className="relative mx-auto max-w-screen-xl px-6 pb-8 pt-32 md:px-14 lg:flex lg:flex-row-reverse lg:justify-end lg:gap-40 lg:px-28 lg:pb-28 lg:pt-44 desktop:px-0 max-h-[45.5rem]">
					<div className="flex gap-44">
						<div>
							<h1 className="mt-12 text-bannerTitle font-bold leading-[110%] sm:max-w-[38rem]">
								{banners[bannerIndex].title}
							</h1>
							<p className="mt-4 text-lg">{banners[bannerIndex].description}</p>

							<ButtonNormal className="mt-8" text="Jogue agora" />
						</div>

						<div className="hidden md:flex flex-col py-32 justify-center gap-11">
							<div className="max-h-36">
								<BannerGameLogo />
							</div>
							<BannerTrailer />
						</div>
					</div>

					<BannerGameIcons />
				</div>
			</BannerContext.Provider>
		</section>
	);
}
