import type { PlataformsType } from "@/app/interfaces/global";

import consoleIcon from "@/public/assets/banner-hero/icons/console.svg";
import nintendoIcon from "@/public/assets/banner-hero/icons/nintendo-switch.svg";
import playstationIcon from "@/public/assets/banner-hero/icons/playstation.svg";
import xboxIcon from "@/public/assets/banner-hero/icons/xbox.svg";

export const plataforms: PlataformsType[] = [
	{
		id: 1,
		icon: consoleIcon,
		alt: "Filtrar jogos disponíveis no PC",
	},
	{
		id: 2,
		icon: nintendoIcon,
		alt: "Filtrar jogos disponíveis no Nintendo",
	},
	{
		id: 3,
		icon: xboxIcon,
		alt: "Filtrar jogos disponíveis no Xbox",
	},
	{
		id: 4,
		icon: playstationIcon,
		alt: "Filtrar jogos disponíveis no Playstation",
	},
];
