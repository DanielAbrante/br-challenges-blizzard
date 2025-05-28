import type { BannersProps } from "../../interfaces/global";

import diablo02BG from "@/public/assets/banner-hero/games/diablo-02-bg.jpg";
import diablo02Logo from "@/public/assets/banner-hero/games/logos/diablo-02-logo.png";
import diablo02TrailerCover from "@/public/assets/banner-hero/games/trailers/covers/diablo-02-trailer-cover.jpg";
import diablo02Trailer from "@/public/assets/banner-hero/games/trailers/diablo-02-trailer.gif";
import diablo02Icon from "@/public/assets/banner-hero/icons/diablo-02-icon.png";

import diablo04BG from "@/public/assets/banner-hero/games/diablo-04-bg.png";
import diablo04Logo from "@/public/assets/banner-hero/games/logos/diablo-04-logo.png";
import diablo04TrailerCover from "@/public/assets/banner-hero/games/trailers/covers/diablo-04-trailer-cover.png";
import diablo04Trailer from "@/public/assets/banner-hero/games/trailers/diablo-04-trailer.gif";
import diablo04Icon from "@/public/assets/banner-hero/icons/diablo-04-icon.png";

import hearthstoneBG from "@/public/assets/banner-hero/games/hearthstone-bg.png";
import hearthstoneLogo from "@/public/assets/banner-hero/games/logos/hearthstone-logo.png";
import hearthstoneTrailerCover from "@/public/assets/banner-hero/games/trailers/covers/hearthstone-trailer-cover.png";
import hearthstoneTrailer from "@/public/assets/banner-hero/games/trailers/hearthstone-trailer.gif";
import hearthstoneIcon from "@/public/assets/banner-hero/icons/hearthstone-icon.png";

import starcraftLogo from "@/public/assets/banner-hero/games/logos/starcarft-02-logo.png";
import starcraftBG from "@/public/assets/banner-hero/games/starcraft-02-bg.jpg";
import starcraftTrailerCover from "@/public/assets/banner-hero/games/trailers/covers/starcraft-02-trailer-cover.jpg";
import starcraftTrailer from "@/public/assets/banner-hero/games/trailers/starcraft-trailer.gif";
import starcraftIcon from "@/public/assets/banner-hero/icons/starcraft-icon.png";

import wowLogo from "@/public/assets/banner-hero/games/logos/wow-logo.png";
import wowTrailerCover from "@/public/assets/banner-hero/games/trailers/covers/wow-trailer-cover.png";
import wowTrailer from "@/public/assets/banner-hero/games/trailers/wow-trailer.gif";
import wowBG from "@/public/assets/banner-hero/games/wow-bg.png";
import wowIcon from "@/public/assets/banner-hero/icons/wow-icon.png";

export const banners: BannersProps[] = [
	{
		id: 1,
		title: "Retorna à escuridão com o game Diablo IV",
		description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
		background: diablo04BG,
		icon: diablo04Icon,
		logo: diablo04Logo,
		trailer: diablo04Trailer,
		cover: diablo04TrailerCover,
		hasPurchased: true,
		isCenterPosition: true,
	},
	{
		id: 2,
		title: "Novo pacote de expansão de Hearthstone",
		description:
			"A Horda e a Aliança se encontraram no Vale Alterac para lutar",
		background: hearthstoneBG,
		icon: hearthstoneIcon,
		logo: hearthstoneLogo,
		trailer: hearthstoneTrailer,
		cover: hearthstoneTrailerCover,
		hasPurchased: false,
		isCenterPosition: false,
	},
	{
		id: 3,
		title: "Reviva o clássico em Diablo II: Resurrected",
		description: "O inferno aguarda enquanto você retorna a Santuário",
		background: diablo02BG,
		icon: diablo02Icon,
		logo: diablo02Logo,
		trailer: diablo02Trailer,
		cover: diablo02TrailerCover,
		hasPurchased: false,
		isCenterPosition: true,
	},
	{
		id: 4,
		title: "Desbrave as Terras Sombrias em Shadowlands!",
		description: "O que jaz além do mundo que você conhece?",
		background: wowBG,
		icon: wowIcon,
		logo: wowLogo,
		trailer: wowTrailer,
		cover: wowTrailerCover,
		hasPurchased: true,
		isCenterPosition: false,
	},
	{
		id: 5,
		title: "Comande exércitos em StarCraft II",
		description:
			"Lidere os Terranos, Zergs ou Protoss em batalhas épicas pelo setor Koprulu",
		background: starcraftBG,
		icon: starcraftIcon,
		logo: starcraftLogo,
		trailer: starcraftTrailer,
		cover: starcraftTrailerCover,
		hasPurchased: false,
		isCenterPosition: true,
	},
];
