import Image from "next/image";

import logo from "@/public/assets/logo-blizzard.png";
import menuIcon from "@/public/assets/banner-hero/icons/menu.svg";
import profileIcon from "@/public/assets/banner-hero/icons/profile.svg";
import { ButtonOutline, ButtonWithIcon } from "./Buttons";
import NavLink from "./NavLink";

export default function Menu() {
  return (
    <div className="border-b-[1px] border-white/10 absolute w-full z-10">
      <header className="max-w-[1280px] mx-auto flex justify-between p-6 items-center">
        <div className="flex items-center gap-28">
          <a href="#" className="after:absolute after:w-11 after:h-[2px] after:-bottom-[1.5px] after:bg-blue after:pointer-events-none">
            <Image src={logo} alt="Blizzard Company" className="max-w-16 sm:max-w-20 xl:max-w-28" />
          </a>

          {/* Above Laptop */}
          <nav className="hidden xl:block">
            <ul className="flex gap-8">
              <NavLink text="Jogos" href="/" hasDropDown />
              <NavLink text="Esportes" href="/" hasDropDown />
              <NavLink text="Loja" href="/" />
              <NavLink text="Notícias" href="/" />
              <NavLink text="Suporte" href="/" />
            </ul>
          </nav>
        </div>


        {/* Above Tablet */}
        <div className="hidden md:flex gap-4">
          <ButtonOutline text="Criar conta" />
          <ButtonWithIcon text="Logar" icon={profileIcon} />
        </div>

        <Image src={menuIcon} alt="Menu icon toggle" className="hover:cursor-pointer xl:hidden" />
      </header>
    </div>
  )
}