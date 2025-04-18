"use client";
import Image from "next/image";

import dotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import logo from "@/public/assets/logo-blizzard.png";

import { useEffect, useState } from "react";
import type { InterfaceGameList } from "../../types/appInterfaces";
import { LoadingSpinner } from "../LoadingSpinner";

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
		<section className="grid desktop:grid-cols-xl grid-cols-sm laptop:grid-cols-lg tablet:grid-cols-md justify-center gap-x-4 tablet:gap-x-8 gap-y-6 laptop:gap-y-12 tablet:gap-y-10">
			{gamesList.map((game) => (
				<div key={Math.random()}>
					<div className="relative h-52 laptop:h-96 tablet:h-72">
						<Image src={game.image} alt={game.name} fill />
					</div>
					<h3 className="mt-5 tablet:block hidden font-semibold text-lg">
						{game.name}
					</h3>
					<p className="mt-1 tablet:block hidden text-grayLight text-sm">
						{game.category}
					</p>
				</div>
			))}
			<div className="flex h-52 laptop:h-96 tablet:h-72 flex-col items-center justify-center gap-4 border border-black300">
				<Image src={logo} alt="Blizzard Company" />

				<div className="flex gap-3">
					<Image
						src={dotsMenuIcon}
						alt=""
						className="tablet:block hidden tablet:grayscale"
					/>

					<h3 className="font-semibold text-sm">Ver todos jogos</h3>
				</div>
			</div>
		</section>
	);
}
