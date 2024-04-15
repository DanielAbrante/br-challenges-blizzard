import diabloLogo from "@/public/assets/banner-hero/games/diablo-logo.png";
import Image from "next/image";

export default function BannerGameLogo() {
  return (
    <Image
      src={diabloLogo}
      alt="Diablo logo"
      className="right-6 hidden md:absolute md:right-14 md:top-32 md:block lg:right-28 lg:top-44"
    />
  );
}
