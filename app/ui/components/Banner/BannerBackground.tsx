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
    const intervalId = setInterval(() => {
      setCurrentBG(prevIndex => (prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Image
        src={backgrounds[currentBG]}
        alt=""
        className="absolute top-0 -z-10 size-full object-cover brightness-75"
      />
      <div key={currentBG} className="absolute bottom-0 h-[3px] bg-blue animate-bannerAnimation"></div>
    </>
  );
}
