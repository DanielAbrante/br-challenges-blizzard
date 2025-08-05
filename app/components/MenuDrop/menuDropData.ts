import type { StaticImageData } from "next/image";

import ArcadeGameIcon from "@/public/assets/drop-menu/games/arcade.png";
import Diablo3GameIcon from "@/public/assets/drop-menu/games/diablo-3.png";
import Diablo4GameIcon from "@/public/assets/drop-menu/games/diablo-4.png";
import DiabloImmortalGameIcon from "@/public/assets/drop-menu/games/diablo-immortal.png";
import DiabloResurrectedGameIcon from "@/public/assets/drop-menu/games/diablo-resurrected.png";
import HearthstoneGameIcon from "@/public/assets/drop-menu/games/hearthstone.png";
import HeroesOfTheStormGameIcon from "@/public/assets/drop-menu/games/heroes-of-the-storm.png";
import Overwatch2GameIcon from "@/public/assets/drop-menu/games/overwatch-2.png";
import StarCraft2GameIcon from "@/public/assets/drop-menu/games/starcraft-2.png";
import StarCraftGameIcon from "@/public/assets/drop-menu/games/starcraft.png";
import WarcraftGameIcon from "@/public/assets/drop-menu/games/warcraft.png";
import WoWGameIcon from "@/public/assets/drop-menu/games/wow.png";

import HearthstoneMastersSportIcon from "@/public/assets/drop-menu/sports/hearthstone-masters.png";
import OverwatchLeagueSportIcon from "@/public/assets/drop-menu/sports/overwatch-league.png";
import OverwatchWorldSportIcon from "@/public/assets/drop-menu/sports/overwatch-world.png";
import StarCraftSportIcon from "@/public/assets/drop-menu/sports/star-craft.png";
import WoWChampionshipSportIcon from "@/public/assets/drop-menu/sports/wow-championship.png";

interface MenuSection {
	id: number;
	title: string;
	icon: StaticImageData;
}

export const games: MenuSection[] = [
	{
		id: 1,
		title: "Diablo® II Resurrected",
		icon: DiabloResurrectedGameIcon,
	},
	{
		id: 2,
		title: "Overwatch® 2",
		icon: Overwatch2GameIcon,
	},
	{
		id: 3,
		title: "World of Warcraft®",
		icon: WoWGameIcon,
	},
	{
		id: 4,
		title: "Hearthstone®",
		icon: HearthstoneGameIcon,
	},
	{
		id: 5,
		title: "Heroes of the Storm®",
		icon: HeroesOfTheStormGameIcon,
	},
	{
		id: 6,
		title: "Warcraft® III Reforged",
		icon: WarcraftGameIcon,
	},
	{
		id: 7,
		title: "Diablo® IV",
		icon: Diablo4GameIcon,
	},
	{
		id: 8,
		title: "Diablo® Immortal",
		icon: DiabloImmortalGameIcon,
	},
	{
		id: 9,
		title: "Diablo® III",
		icon: Diablo3GameIcon,
	},
	{
		id: 10,
		title: "StarCraft® II",
		icon: StarCraft2GameIcon,
	},
	{
		id: 11,
		title: "StarCraft® Remastered",
		icon: StarCraftGameIcon,
	},
	{
		id: 12,
		title: "Arcade da Blizzard®",
		icon: ArcadeGameIcon,
	},
];

export const sports: MenuSection[] = [
	{
		id: 1,
		title: "Hearthstone Masters®",
		icon: HearthstoneMastersSportIcon,
	},
	{
		id: 2,
		title: "Campeonato Mundial de Arena WoW®",
		icon: WoWChampionshipSportIcon,
	},
	{
		id: 3,
		title: "StarCraft® II WCS",
		icon: StarCraftSportIcon,
	},
	{
		id: 4,
		title: "Copa Mundial de Overwatch®",
		icon: OverwatchWorldSportIcon,
	},
	{
		id: 5,
		title: "Liga de Overwatch®",
		icon: OverwatchLeagueSportIcon,
	},
];
