"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import type { BannersProps } from "@/app/interfaces/global";
import { ButtonNormal } from "../../components/Buttons";
import BannerBackground from "./BannerBackground";
import BannerGameIcons from "./BannerGameIcons";
import { BannerGameLogo } from "./BannerGameLogo";
import BannerTrailer from "./BannerTrailer";
import { banners } from "./bannerData";

type BannerContextType = {
	bannerIndex: number;
	setBannerIndex: React.Dispatch<React.SetStateAction<number>>;
	bannerDelay: number;
	banner: BannersProps;
};

const BannerContext = createContext<BannerContextType | null>(null);

export const useBannerContext = () => {
	const bannerContext = useContext(BannerContext);

	if (!bannerContext) {
		throw new Error(
			"useBannerContext has to be used within <BannerContext.Provider>",
		);
	}

	return bannerContext;
};

export default function Banner() {
	const [bannerIndex, setBannerIndex] = useState<number>(0);
	const bannerDelay = 5000;

	const bannerTitleRef = useRef<HTMLHeadingElement>(null);
	const bannerGameLogoRef = useRef<HTMLImageElement>(null);

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

	useEffect(() => {
		const intervalId = setInterval(() => {
			setBannerIndex((prevIndex) =>
				prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
			);
		}, bannerDelay);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className="relative h-[625px] md:h-[736px]">
			<BannerContext.Provider
				value={{
					bannerIndex: bannerIndex,
					setBannerIndex: setBannerIndex,
					bannerDelay: bannerDelay,
					banner: banners[bannerIndex],
				}}
			>
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
