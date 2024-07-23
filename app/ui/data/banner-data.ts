import { BannersProps } from "../types/appInterfaces";

import game_01 from "@/public/assets/banner-hero/icons/game-1.png";
import game_02 from "@/public/assets/banner-hero/icons/game-2.png";
import game_03 from "@/public/assets/banner-hero/icons/game-3.png";
import game_04 from "@/public/assets/banner-hero/icons/game-4.png";
import game_05 from "@/public/assets/banner-hero/icons/game-5.png";

export const gameIcons = [
  game_01, game_02, game_03, game_04, game_05
];

export const banners: BannersProps[] = [
  {
    title: "Retorna à escuridão com o game Diablo IV",
    description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    isAvailable: true,
  },
  {
    title: "Novo pacote de expansão de Hearthstone",
    description: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    isAvailable: false,
  },
  {
    title: "Desbrave as Terras Sombrias em Shadowlands!",
    description: "O que jaz além do mundo que você conhece?",
    isAvailable: false,
  },
];