import Image from "next/image";
import { useContext } from "react";
import { BannerContext } from ".";
import { banners } from "../../data/banner-data";

export default function BannerGameLogo() {
  const bannerIndex = useContext(BannerContext)

  return (
    <Image
      src={banners[bannerIndex].gameLogo}
      width={280}
      height={150}
      alt=""
    />
  )

}
