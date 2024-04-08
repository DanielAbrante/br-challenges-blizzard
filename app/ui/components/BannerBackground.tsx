"use client";

import diablo from "@/public/assets/banner-hero/games/diablo-bg.png";
import hearthstone from "@/public/assets/banner-hero/games/hearthstone-bg.png";
import wow from "@/public/assets/banner-hero/games/wow-bg.png";

import Image from "next/image";
import { useEffect, useState } from "react";

const backgrounds = [diablo, hearthstone, wow];

export default function BannerBackground() {
  const [currentBG, setCurrentBG] = useState(0);

  useEffect(() => {
    const switchBackground = () => {
      setTimeout(() => {
        setCurrentBG(currentBG + 1);
      }, 2000);
    };

    switchBackground();

    if (currentBG === 3) setCurrentBG(0);
  }, [currentBG]);

  return (
    <>
      {currentBG === 0 && (
        <Image
          src={backgrounds[0]}
          alt=""
          className="absolute top-0 -z-10 size-full object-cover"
        />
      )}
      {currentBG === 1 && (
        <Image
          src={backgrounds[1]}
          alt=""
          className="absolute top-0 -z-10 size-full object-cover"
        />
      )}
      {currentBG === 2 && (
        <Image
          src={backgrounds[2]}
          alt=""
          className="absolute top-0 -z-10 size-full object-cover"
        />
      )}

      <div className="absolute bottom-0 mt-16 h-[3px] w-1/2 animate-bannerSwitch bg-blue"></div>
    </>
  );
}
