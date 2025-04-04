"use client";
import Image from "next/image";

import dotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import logo from "@/public/assets/logo-blizzard.png";

import { useEffect, useState } from "react";
import type { InterfaceGameList } from "../../types/appInterfaces";

export default function GalleryGames() {
	const [gamesList, setGamesList] = useState<InterfaceGameList[]>([]);

	useEffect(() => {
		async function fetchGamesList() {
			const response = await fetch(
				"https://api-brchallenges.vercel.app/api/blizzard/games",
			);

			const data = await response.json();

			setGamesList(data);
		}

		fetchGamesList();
	}, []);

	return (
		<section className="grid grid-cols-smallGrid gap-x-4 gap-y-6 tablet:grid-cols-mediumGrid tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-bigGrid laptop:gap-y-12">
			{gamesList &&
				gamesList.map((game) => (
					<div key={Math.random()}>
						<Image
							src={game.image}
							width={300}
							height={412}
							alt={game.name}
							className="size-auto"
						/>
						<h3 className="mt-5 hidden text-lg font-semibold tablet:block">
							{game.name}
						</h3>
						<p className="mt-1 hidden text-sm text-grayLight tablet:block">
							{game.category}
						</p>
					</div>
				))}
			<div className="flex flex-col items-center justify-center gap-4 border border-black300">
				<Image src={logo} alt="Blizzard Company" />

				<div className="flex gap-3">
					<Image
						src={dotsMenuIcon}
						alt=""
						className="hidden tablet:block tablet:grayscale"
					/>

					<h3 className="text-sm font-semibold">Ver todos jogos</h3>
				</div>
			</div>
		</section>
	);
}
