import type { PlatformIconsType } from "@/app/interfaces/global";

import ConsoleIcon from "@/public/assets/banner-hero/icons/platforms/console.svg";
import NintendoIcon from "@/public/assets/banner-hero/icons/platforms/nintendo.svg";
import PlaystationIcon from "@/public/assets/banner-hero/icons/platforms/playstation.svg";
import XboxIcon from "@/public/assets/banner-hero/icons/platforms/xbox.svg";

export enum Platform {
	PC = 1,
	Nintendo = 2,
	Xbox = 3,
	Playstation = 4,
}

export const platformIcons: PlatformIconsType[] = [
	{
		id: 1,
		icon: ConsoleIcon,
		alt: "Filtrar jogos disponíveis no PC",
	},
	{
		id: 2,
		icon: NintendoIcon,
		alt: "Filtrar jogos disponíveis no Nintendo",
	},
	{
		id: 3,
		icon: XboxIcon,
		alt: "Filtrar jogos disponíveis no Xbox",
	},
	{
		id: 4,
		icon: PlaystationIcon,
		alt: "Filtrar jogos disponíveis no Playstation",
	},
];

export const platformsPerGame = [
	["PC", "Nintendo", "Xbox", "Playstation"],
	["PC", "Nintendo", "Xbox", "Playstation"],
	["PC", "Nintendo", "Xbox", "Playstation"],
	["PC"],
	["PC"],
	["PC"],
	["PC", "Xbox", "Playstation"],
	["PC"],
	["PC", "Nintendo", "Xbox", "Playstation"],
	["PC"],
	["PC"],
];
