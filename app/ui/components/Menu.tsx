import Image from "next/image";

import menuIcon from "@/public/assets/banner-hero/icons/menu.svg";
import profileIcon from "@/public/assets/banner-hero/icons/profile.svg";
import logo from "@/public/assets/logo-blizzard.png";
import { ButtonOutline, ButtonWithIcon } from "./Buttons";
import NavLink from "./NavLink";

export default function Menu() {
  return (
    <div className="absolute z-10 w-full border-b border-white/10">
      <header className="mx-auto flex max-w-screen-xl items-center justify-between p-6 md:px-14 lg:px-28 desktop:px-0">
        <div className="flex items-center gap-28">
          <a
            href="#"
            className="after:pointer-events-none after:absolute after:bottom-[-1.5px] after:h-[2px] after:w-11 after:bg-blue"
          >
            <Image
              src={logo}
              alt="Blizzard Company"
              className="max-w-16 sm:max-w-20 xl:max-w-28"
            />
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
        <div className="hidden gap-4 md:flex">
          <ButtonOutline text="Criar conta" />
          <ButtonWithIcon text="Logar" icon={profileIcon} />
        </div>

        <Image
          src={menuIcon}
          alt="Menu icon toggle"
          className="hover:cursor-pointer xl:hidden"
        />
      </header>
    </div>
  );
}
