"use client";
import Image from "next/image";

import DotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import fallbackImg from "@/public/assets/fallback-image.jpg";
import logo from "@/public/assets/logo-blizzard.png";

import { useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import type { gamesDataResponse } from "../../interfaces/global";
import { Platform, platformsPerGame } from "./galleryData";

export default function GalleryGames({ platform }: { platform: number }) {
	const [gamesList, setGamesList] = useState<gamesDataResponse[]>([]);

	useEffect(() => {
		async function fetchGamesList() {
			try {
				const url = "https://api-brchallenges.vercel.app/api/blizzard/games";

				const response: Response = await fetch(url);

				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}

				const gamesData: gamesDataResponse[] = await response.json();

				gamesData.forEach((game, index) => {
					game.platforms = platformsPerGame[index];

					game.image = fallbackImg;
					game.logo = "";
				});

				setGamesList(gamesData);
			} catch (error) {
				console.error(
					"Não foi possível carregar os jogos da galeria, erro: ",
					error,
				);
			}
		}

		fetchGamesList();
	}, []);

	if (!gamesList || gamesList.length === 0) {
		return <Spinner />;
	}

	return (
		<section className="grid grid-cols-sm justify-center gap-x-4 gap-y-6 md:grid-cols-md md:gap-x-8 md:gap-y-10 xl:grid-cols-xl xl:gap-y-12 2xl:grid-cols-2xl">
			{gamesList.map((game) => {
				if (
					game.platforms.some(
						(gamePlatform) => gamePlatform === Platform[platform],
					)
				) {
					return (
						<div key={Math.random()}>
							<div className="relative h-[214px] overflow-hidden rounded-md md:h-[277px] xl:h-[384px] 2xl:h-[413px]">
								<Image
									src={game.image}
									alt={game.name}
									fill
									className="origin-bottom transition-transform duration-300 hover:scale-110"
									sizes="(max-width: 768px) 8rem, (max-width: 1440px) 12.5rem, 17.5rem"
								/>

								{game.logo && (
									<div className="absolute bottom-5 flex w-full justify-center md:bottom-8 lg:bottom-11">
										<div className="relative h-[54px] w-[82px] md:h-[71px] md:w-[107px] xl:h-[98px] xl:w-[148px]">
											<Image
												src={game.logo}
												alt={game.name}
												fill
												sizes="(max-width: 768px) 54px, (max-width: 1440px) 107px, 148px"
											/>
										</div>
									</div>
								)}
							</div>
							<h3 className="mt-5 hidden font-semibold text-lg md:block">
								{game.name}
							</h3>
							<p className="mt-1 hidden text-gray-100 text-sm md:block">
								{game.category}
							</p>
						</div>
					);
				}
			})}
			<div className="flex h-52 flex-col items-center justify-center gap-4 border border-black-300 md:h-72 xl:h-96">
				<Image src={logo} alt="Blizzard Company" />

				<div className="flex gap-3">
					<DotsMenuIcon className="hidden self-center md:block md:grayscale" />

					<h3 className="text-center font-semibold text-sm">
						Ver todos os jogos
					</h3>
				</div>
			</div>
		</section>
	);
}
