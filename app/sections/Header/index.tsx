"use client";

import menuIcon from "@/public/assets/banner-hero/icons/menu.svg";
import profileIcon from "@/public/assets/banner-hero/icons/profile.svg";
import logo from "@/public/assets/logo-blizzard.png";
import Image from "next/image";
import { useRef } from "react";
import { ButtonOutline, ButtonWithIcon } from "../../components/Buttons";
import NavLink from "../../components/NavLink";
import HeaderLoginModal from "./HeaderLoginModal";

export default function Menu() {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const handleLoginClick = () => {
		if (dialogRef) dialogRef.current?.showModal();
	};

	return (
		<div className="absolute z-10 w-full border-white/10 border-b">
			<header className="mx-auto flex h-[80px] max-w-global items-center justify-between px-sm md:h-[100px] md:px-md xl:px-xl 2xl:px-0">
				<div className="flex items-center gap-28">
					<a
						href="#"
						className="relative after:pointer-events-none after:absolute after:top-[50px] after:h-[2px] after:w-1/2 after:bg-blue after:duration-1000 hover:after:w-full md:after:top-[63px]"
					>
						<Image
							src={logo}
							alt="Blizzard Company"
							className="max-w-16 md:max-w-20 xl::max-w-28"
						/>
					</a>

					{/* Above xl */}
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

				{/* Above md */}
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
