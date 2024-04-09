import diabloLogo from "@/public/assets/banner-hero/games/diablo-logo.png";
import Image from "next/image";

export default function BannerGameLogo() {
  return (
    <Image
      src={diabloLogo}
      alt="Diablo logo"
      className="hidden pr-[inherit] md:absolute md:right-0 md:top-32 md:block"
    />
  );
}
