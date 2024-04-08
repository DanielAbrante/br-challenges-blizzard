import Image from "next/image";
import BannerBackground from "./BannerBackground";
import { ButtonNormal } from "./Buttons";

import game_01 from "@/public/assets/banner-hero/icons/game-1.png";
import game_02 from "@/public/assets/banner-hero/icons/game-2.png";
import game_03 from "@/public/assets/banner-hero/icons/game-3.png";
import game_04 from "@/public/assets/banner-hero/icons/game-4.png";
import game_05 from "@/public/assets/banner-hero/icons/game-5.png";

export default function Banner() {
  return (
    <section className="relative">
      <BannerBackground />

      <div className="px-6 pt-32">
        <h1 className="max-w-72 text-bannerTitle font-bold leading-[110%] sm:max-w-[35rem]">
          Retorne à escuridão com o game Diablo IV
        </h1>
        <p className="mt-4 max-w-72 text-lg sm:max-w-[35rem]">
          O retorno de Lilith traz uma era de escuridão e sofrimento{" "}
        </p>
        <ButtonNormal className="mt-8" text="Jogue agora" />

        <ul className="mt-12 flex gap-4 grayscale">
          <li>
            <Image src={game_01} alt="game 01" />
          </li>
          <li>
            <Image src={game_02} alt="game 02" />
          </li>
          <li>
            <Image src={game_03} alt="game 03" />
          </li>
          <li>
            <Image src={game_04} alt="game 04" />
          </li>
          <li>
            <Image src={game_05} alt="game 05" />
          </li>
        </ul>
      </div>
    </section>
  );
}
