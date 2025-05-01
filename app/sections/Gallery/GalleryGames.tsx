"use client";
import Image from "next/image";

import dotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import logo from "@/public/assets/logo-blizzard.png";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import type { InterfaceGameList } from "../../interfaces/global";

export default function GalleryGames() {
	const [gamesList, setGamesList] = useState<InterfaceGameList[]>([]);

	useEffect(() => {
		async function fetchGamesList() {
			try {
				const response: Response = await fetch(
					"https://api-brchallenges.vercel.app/api/blizzard/games",
				);

				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}

				const data = await response.json();

				setGamesList(data);
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
			{gamesList.map((game) => (
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
			))}
			<div className="flex h-52 flex-col items-center justify-center gap-4 border border-black300 md:h-72 xl:h-96">
				<Image src={logo} alt="Blizzard Company" />

				<div className="flex gap-3">
					<Image
						src={dotsMenuIcon}
						alt=""
						className="hidden md:block md:grayscale"
					/>

					<h3 className="font-semibold text-sm">Ver todos os jogos</h3>
				</div>
			</div>
		</section>
	);
}
