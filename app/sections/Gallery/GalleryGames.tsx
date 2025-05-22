"use client";
import Image from "next/image";

import DotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import logo from "@/public/assets/logo-blizzard.png";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
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
		return <LoadingSpinner />;
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
							<div className="relative h-52 md:h-72 xl:h-96 ">
								<Image src={game.image} alt={game.name} fill />
							</div>
							<h3 className="mt-5 hidden font-semibold text-lg md:block">
								{game.name}
							</h3>
							<p className="mt-1 hidden text-grayLight text-sm md:block">
								{game.category}
							</p>
						</div>
					);
				}
			})}
			<div className="flex h-52 flex-col items-center justify-center gap-4 border border-black300 md:h-72 xl:h-96">
				<Image src={logo} alt="Blizzard Company" />

				<div className="flex gap-3">
					<DotsMenuIcon className="hidden md:block md:grayscale" />

					<h3 className="font-semibold text-sm">Ver todos os jogos</h3>
				</div>
			</div>
		</section>
	);
}
