import { BannersProps } from "../types/appInterfaces";

import gameIcon01 from "@/public/assets/banner-hero/icons/game-1.png";
import gameIcon02 from "@/public/assets/banner-hero/icons/game-2.png";
import gameIcon03 from "@/public/assets/banner-hero/icons/game-3.png";
import gameIcon04 from "@/public/assets/banner-hero/icons/game-4.png";
import gameIcon05 from "@/public/assets/banner-hero/icons/game-5.png";

import gameLogo01 from "@/public/assets/banner-hero/games/diablo-logo.png";
import gameLogo02 from "@/public/assets/banner-hero/games/hearthstone-logo.png";
import gameLogo03 from "@/public/assets/banner-hero/games/wow-logo.png";

export const gameIcons = [
  gameIcon01, gameIcon02, gameIcon03, gameIcon04, gameIcon05
];

export const banners: BannersProps[] = [
  {
    id: 1,
    title: "Retorna à escuridão com o game Diablo IV",
    description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    gameIcon: gameIcon01.src,
    gameLogo: gameLogo01.src,
    isAvailable: true,
  },
  {
    id: 2,
    title: "Novo pacote de expansão de Hearthstone",
    description: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    gameIcon: gameIcon02.src,
    gameLogo: gameLogo02.src,
    isAvailable: false,
  },
  {
    id: 3,
    title: "Desbrave as Terras Sombrias em Shadowlands!",
    description: "O que jaz além do mundo que você conhece?",
    gameIcon: gameIcon03.src,
    gameLogo: gameLogo03.src,
    isAvailable: false,
  },
];