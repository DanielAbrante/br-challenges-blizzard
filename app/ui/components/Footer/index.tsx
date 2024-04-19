import FooterItem from "./FooterItem";

import rectangleIcon from "@/public/assets/banner-hero/icons/rectangle.svg";
import threeCirclesIcon from "@/public/assets/banner-hero/icons/three-circles.svg";
import buyIcon from "@/public/assets/banner-hero/icons/buy.svg";

export default function Footer() {
  return (
    <footer className="bg-footerBackground">
      <h2 className="text-h2 font-bold">Baixe agora o battle.net</h2>

      <ul>
        <FooterItem icon={rectangleIcon} title="a" />
        <FooterItem icon={threeCirclesIcon} title="a" />
        <FooterItem icon={buyIcon} title="a" />
      </ul>
    </footer>
  );
}
