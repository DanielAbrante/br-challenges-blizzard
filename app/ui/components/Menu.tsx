import Image from "next/image";

import logo from "@/public/assets/logo-blizzard.png";
import menuIcon from "@/public/assets/banner-hero/icons/menu.svg";

export default function Menu() {
  return (
    <div className="border-b-[1px] border-white/10 absolute w-full">
      <header className="max-w-[1280px] mx-auto flex justify-between p-6 z-10">
        <a href="#" className="after:content-[''] after:absolute after:w-11 after:h-[2px] after:-bottom-[1.5px] after:bg-blue after:pointer-events-none">
          <Image src={logo} alt="Blizzard Company" className="max-w-16" />
        </a>
        <Image src={menuIcon} alt="Menu icon toggle" className="hover:cursor-pointer" />
      </header>
    </div>
  )
}