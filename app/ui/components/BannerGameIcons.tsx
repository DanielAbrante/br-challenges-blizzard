import Image from "next/image";

import game_01 from "@/public/assets/banner-hero/icons/game-1.png";
import game_02 from "@/public/assets/banner-hero/icons/game-2.png";
import game_03 from "@/public/assets/banner-hero/icons/game-3.png";
import game_04 from "@/public/assets/banner-hero/icons/game-4.png";
import game_05 from "@/public/assets/banner-hero/icons/game-5.png";

function BannerGameIcons() {
  return (
    <ul className="mt-12 flex gap-4">
      <li>
        <Image
          src={game_01}
          alt="game 01"
          className="cursor-pointer grayscale hover:grayscale-0"
        />
      </li>
      <li>
        <Image
          src={game_02}
          alt="game 02"
          className="cursor-pointer grayscale hover:grayscale-0"
        />
      </li>
      <li>
        <Image
          src={game_03}
          alt="game 03"
          className="cursor-pointer grayscale hover:grayscale-0"
        />
      </li>
      <li>
        <Image
          src={game_04}
          alt="game 04"
          className="cursor-pointer grayscale hover:grayscale-0"
        />
      </li>
      <li>
        <Image
          src={game_05}
          alt="game 05"
          className="cursor-pointer grayscale hover:grayscale-0"
        />
      </li>
    </ul>
  );
}

export default BannerGameIcons;
