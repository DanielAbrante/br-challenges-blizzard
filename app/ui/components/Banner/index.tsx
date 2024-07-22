"use client";

import { useEffect, useState } from "react";
import { ButtonNormal } from "../Buttons";
import BannerBackground from "./BannerBackground";
import BannerGameIcons from "./BannerGameIcons";
import BannerGameLogo from "./BannerGameLogo";

interface BannersProps {
  title: string;
  description: string;
  isAvailable: boolean;
}

const banners: BannersProps[] = [
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
    title: "Desbrave as Terras Sombrias em Shadowlands! ",
    description: "Desbrave as Terras Sombrias em Shadowlands! ",
    isAvailable: false,
  },
]

export default function Banner() {
  const [bannerIndex, setBannerIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerIndex(bannerIndex => banners.length - 1 === bannerIndex ? 0 : bannerIndex + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative">
      <BannerBackground />

      <div className="relative mx-auto max-w-screen-xl px-6 pb-8 pt-32 md:px-14 lg:flex lg:flex-row-reverse lg:justify-end lg:gap-40 lg:px-28 lg:pb-28 lg:pt-44 desktop:px-0 desktop:pt-52 desktop:pb-36">
        <div>
          <BannerGameLogo />

          <h1 className="mt-12 max-w-72 text-bannerTitle font-bold leading-[110%] sm:max-w-[35rem]">
            {banners[bannerIndex].title}
          </h1>
          <p className="mt-4 max-w-72 text-lg sm:max-w-[35rem]">
            {banners[bannerIndex].description}
          </p>

          <ButtonNormal className="mt-8" text="Jogue agora" />
        </div>

        <BannerGameIcons />
      </div>
    </section>
  );
}
