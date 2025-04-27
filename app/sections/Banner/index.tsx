"use client";

import { createContext, useEffect, useRef, useState } from "react";

import { ButtonNormal } from "../../components/Buttons";
import { banners } from "../../data/banner-data";
import BannerBackground from "./BannerBackground";
import BannerGameIcons from "./BannerGameIcons";
import { BannerGameLogo } from "./BannerGameLogo";
import BannerTrailer from "./BannerTrailer";

export const BannerContext = createContext(0);

export default function Banner() {
	const [bannerIndex, setBannerIndex] = useState<number>(0);

	const bannerTitleRef = useRef<HTMLHeadingElement>(null);
	const bannerGameLogoRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setBannerIndex((bannerIndex) =>
				banners.length - 1 === bannerIndex ? 0 : bannerIndex + 1,
			);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		const isBannerGameLogoOverlapping = () => {
			const bannerTitleElement = bannerTitleRef.current;
			const bannerGameLogoElement = bannerGameLogoRef.current;

			if (!bannerTitleElement || !bannerGameLogoElement) return;

			const bannerTitleRect = bannerTitleElement.getBoundingClientRect();
			const bannerGameLogoRect = bannerGameLogoElement.getBoundingClientRect();

			if (bannerGameLogoRect.left <= bannerTitleRect.right) {
				bannerGameLogoRef.current.style.visibility = "hidden";
			} else {
				bannerGameLogoRef.current.style.visibility = "visible";
			}
		};

		isBannerGameLogoOverlapping();

		window.addEventListener("resize", isBannerGameLogoOverlapping);
	}, []);

	return (
		<section className="relative h-[625px] md:h-[736px]">
			<BannerContext.Provider value={bannerIndex}>
				<BannerBackground />

				<div className="mx-auto flex h-full max-w-global items-center px-sm pt-[80px] md:px-md md:pt-[96px] xl:gap-40 xl:px-xl 2xl:px-0">
					<div className="relative flex h-full w-full flex-col justify-between self-center py-14 md:justify-normal md:gap-14 md:py-24 xl:flex-row-reverse 2xl:gap-40">
						<div className="xl:flex-1">
							<h1
								ref={bannerTitleRef}
								className="line-clamp-4 font-bold text-bannerTitle leading-[110%] md:max-w-[600px]"
							>
								{banners[bannerIndex].title}
							</h1>
							<p className="mt-4 mb-8 text-lg md:max-w-full">
								{banners[bannerIndex].description}
							</p>
							<ButtonNormal text="Jogue agora" />
						</div>

						<BannerGameLogo ref={bannerGameLogoRef} />
						<BannerTrailer />

						<div className="xl:self-center">
							<BannerGameIcons />
						</div>
					</div>
				</div>
			</BannerContext.Provider>
		</section>
	);
}
