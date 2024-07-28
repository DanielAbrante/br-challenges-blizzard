import Image from "next/image";

import { useContext } from "react";
import { BannerContext } from ".";
import { gameIcons } from "../../data/banner-data";

function BannerGameIcons() {
  const banner = useContext(BannerContext)

  return (
    <ul className="mt-12 flex gap-4 lg:flex-col">
      {
        gameIcons.map(gameIcon => (
          <li>
            <Image
              key={gameIcon.src}
              src={gameIcon}
              alt="game 01"
              className="cursor-pointer grayscale hover:grayscale-0"
            />
          </li>

        ))
      }
    </ul>
  );
}

export default BannerGameIcons;
