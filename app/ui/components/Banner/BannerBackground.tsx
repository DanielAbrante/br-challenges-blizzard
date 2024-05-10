"use client";

import diablo from "@/public/assets/banner-hero/games/diablo-bg.png";
import hearthstone from "@/public/assets/banner-hero/games/hearthstone-bg.png";
import wow from "@/public/assets/banner-hero/games/wow-bg.png";
import { useAnimate } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

const backgrounds = [diablo, hearthstone, wow];

export default function BannerBackground() {
  const [scope, animate] = useAnimate();
  const [currentBG, setCurrentBG] = useState(0);

  useEffect(() => {
    const switchBackground = () => {
      setTimeout(() => {
        setCurrentBG(currentBG + 1);
      }, 3000);
    };

    switchBackground();

    if (currentBG === 3) setCurrentBG(0);
  }, [animate, currentBG, scope]);

  useEffect(() => {
    animate(
      scope.current,
      { width: "100vw" },
      { duration: 3, repeat: Infinity, ease: "linear" },
    );
  }, [animate, scope]);

  return (
    <>
      {currentBG === 0 && (
        <Image
          src={backgrounds[0]}
          alt=""
          className="absolute top-0 -z-10 size-full object-cover brightness-75"
        />
      )}
      {currentBG === 1 && (
        <Image
          src={backgrounds[1]}
          alt=""
          className="absolute top-0 -z-10 size-full object-cover brightness-75"
        />
      )}
      {currentBG === 2 && (
        <Image
          src={backgrounds[2]}
          alt=""
          className="absolute top-0 -z-10 size-full object-cover brightness-75"
        />
      )}

      <div ref={scope} className="absolute bottom-0 h-[3px] bg-blue"></div>
    </>
  );
}
