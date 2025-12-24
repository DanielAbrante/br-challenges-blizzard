import type { Games, PlatformIconsType } from "@/app/interfaces/global";

import ConsoleIcon from "@/public/assets/banner-hero/icons/platforms/console.svg";
import NintendoIcon from "@/public/assets/banner-hero/icons/platforms/nintendo.svg";
import PlaystationIcon from "@/public/assets/banner-hero/icons/platforms/playstation.svg";
import XboxIcon from "@/public/assets/banner-hero/icons/platforms/xbox.svg";

import diablo02BG from "@/public/assets/gallery/backgrounds/diablo-02.webp";
import diablo02Logo from "@/public/assets/gallery/logos/diablo-02.webp";

import diablo03BG from "@/public/assets/gallery/backgrounds/diablo-03.webp";
import diablo03Logo from "@/public/assets/gallery/logos/diablo-03.webp";

import diablo04BG from "@/public/assets/gallery/backgrounds/diablo-04.webp";
import diablo04Logo from "@/public/assets/gallery/logos/diablo-04.webp";

import hearthstoneBG from "@/public/assets/gallery/backgrounds/hearthstone.webp";
import hearthstoneLogo from "@/public/assets/gallery/logos/hearthstone.webp";

import heroesOfStormBG from "@/public/assets/gallery/backgrounds/heroes-of-storm.webp";
import heroesOfStormLogo from "@/public/assets/gallery/logos/heroes-of-storm.webp";

import overwatchBG from "@/public/assets/gallery/backgrounds/overwatch.webp";
import overwatchLogo from "@/public/assets/gallery/logos/overwatch.webp";

import overwatch02BG from "@/public/assets/gallery/backgrounds/overwatch-02.webp";
import overwatch02Logo from "@/public/assets/gallery/logos/overwatch-02.webp";

import starcraftBG from "@/public/assets/gallery/backgrounds/starcraft.webp";
import starcraftLogo from "@/public/assets/gallery/logos/starcraft.webp";

import starcraft02BG from "@/public/assets/gallery/backgrounds/starcraft-02.webp";
import starcraft02Logo from "@/public/assets/gallery/logos/starcraft-02.webp";

import warcraft03BG from "@/public/assets/gallery/backgrounds/warcraft-03.webp";
import warcraft03Logo from "@/public/assets/gallery/logos/warcraft-03.webp";

import wowClassicBG from "@/public/assets/gallery/backgrounds/wow-classic.webp";
import wowClassicLogo from "@/public/assets/gallery/logos/wow-classic.webp";

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

export const games: Games[] = [
	{
		id: 1,
		name: "Diablo II: Resurrected",
		category: "RPG de ação",
		image: diablo02BG,
		logo: diablo02Logo,
		platforms: ["PC", "Nintendo", "Xbox", "Playstation"],
	},
	{
		id: 2,
		name: "Overwatch",
		category: "Ação em equipe",
		image: overwatchBG,
		logo: overwatchLogo,
		platforms: ["PC", "Nintendo", "Xbox", "Playstation"],
	},
	{
		id: 3,
		name: "Overwatch 2",
		category: "Ação em equipe",
		image: overwatch02BG,
		logo: overwatch02Logo,
		platforms: ["PC", "Nintendo", "Xbox", "Playstation"],
	},
	{
		id: 4,
		name: "WoW Classic",
		category: "RPG multijogador em massa",
		image: wowClassicBG,
		logo: wowClassicLogo,
		platforms: ["PC"],
	},
	{
		id: 5,
		name: "Hearthstone",
		category: "Jogo de cards estratégicos",
		image: hearthstoneBG,
		logo: hearthstoneLogo,
		platforms: ["PC"],
	},
	{
		id: 6,
		name: "Heroes of storm",
		category: "RPG de ação",
		image: heroesOfStormBG,
		logo: heroesOfStormLogo,
		platforms: ["PC"],
	},
	{
		id: 7,
		name: "Diablo IV",
		category: "RPG de ação",
		image: diablo04BG,
		logo: diablo04Logo,
		platforms: ["PC", "Xbox", "Playstation"],
	},
	{
		id: 8,
		name: "Warcraft III Reforged",
		category: "RPG de ação",
		image: warcraft03BG,
		logo: warcraft03Logo,
		platforms: ["PC"],
	},
	{
		id: 9,
		name: "Diablo III",
		category: "RPG de ação",
		image: diablo03BG,
		logo: diablo03Logo,
		platforms: ["PC", "Nintendo", "Xbox", "Playstation"],
	},
	{
		id: 10,
		name: "StarCraft II",
		category: "RPG de ação",
		image: starcraft02BG,
		logo: starcraft02Logo,
		platforms: ["PC"],
	},
	{
		id: 11,
		name: "StarCraft Remastered",
		category: "RPG de ação",
		image: starcraftBG,
		logo: starcraftLogo,
		platforms: ["PC"],
	},
];
