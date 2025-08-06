"use client";

import { MenuContext } from "@/app/sections/Menu";
import { useContext } from "react";
import { GamesFooter, GamesMain } from "./Categories/Games";
import { SportsFooter, SportsMain } from "./Categories/Sports";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const menuContent: any = {
	games: {
		main: <GamesMain />,
		footer: <GamesFooter />,
	},
	sports: {
		main: <SportsMain />,
		footer: <SportsFooter />,
	},
};

export const MenuDrop = () => {
	const { activeDropdown } = useContext(MenuContext);

	const content = menuContent[activeDropdown];

	return (
		<section className="absolute top-0 left-0 z-40 flex w-full justify-center bg-gradient-to-b from-black-200-alpha-90 to-black-500 pt-36 backdrop-blur-sm">
			<div className="w-full">
				<div
					className={`mx-auto grid ${activeDropdown === "games" ? "grid-cols-6" : "grid-cols-5"} gap-x-8 gap-y-7 pb-14 2xl:max-w-2xl`}
				>
					{content.main}
				</div>
				<footer className="w-full bg-black-100 py-6">
					<ul className="flex justify-center gap-16 ">{content.footer}</ul>
				</footer>
			</div>
		</section>
	);
};
