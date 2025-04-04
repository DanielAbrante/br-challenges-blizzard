"use client";

import menuIcon from "@/public/assets/banner-hero/icons/menu.svg";
import profileIcon from "@/public/assets/banner-hero/icons/profile.svg";
import logo from "@/public/assets/logo-blizzard.png";
import Image from "next/image";
import { useRef } from "react";
import { ButtonOutline, ButtonWithIcon } from "../Buttons";
import NavLink from "../NavLink";
import HeaderLoginModal from "./HeaderLoginModal";

export default function Menu() {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const handleLoginClick = () => {
		if (dialogRef) dialogRef.current?.showModal();
	};

	return (
		<div className="absolute z-10 w-full border-b border-white/10">
			<header className="mx-auto flex max-w-screen-xl items-center justify-between p-6 md:px-14 lg:px-28 desktop:px-0">
				<div className="flex items-center gap-28">
					<a
						href="#"
						className="relative after:pointer-events-none after:absolute after:top-[45.5px] after:h-[2px] after:w-1/2 after:bg-blue after:duration-1000 hover:after:w-full tablet:after:top-[60px]"
					>
						<Image
							src={logo}
							alt="Blizzard Company"
							className="laptop::max-w-28 max-w-16 tablet:max-w-20"
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
				<div className="flex gap-20">
					<div className="hidden gap-4 md:flex">
						<ButtonOutline text="Criar conta" />
						<ButtonWithIcon
							text="Logar"
							icon={profileIcon}
							onClick={handleLoginClick}
						/>
					</div>

					<Image
						src={menuIcon}
						alt="Menu icon toggle"
						className="hover:cursor-pointer xl:hidden"
					/>
				</div>
			</header>

			<HeaderLoginModal ref={dialogRef} />
		</div>
	);
}
