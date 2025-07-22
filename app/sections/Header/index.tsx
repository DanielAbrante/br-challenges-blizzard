"use client";

import Dropdown from "@/app/components/Dropdown";
import { MenuDrop } from "@/app/components/MenuDrop";
import MenuIcon from "@/public/assets/banner-hero/icons/menu.svg";
import ProfileIcon from "@/public/assets/banner-hero/icons/profile.svg";
import logo from "@/public/assets/logo-blizzard.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../../components/Button";
import NavLink from "../../components/NavLink";
import FooterItem from "../Footer/FooterItem";
import HeaderLoginModal from "./HeaderLoginModal";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const activeMenuContent: any = {
	games: {
		main: <>sou games main</>,
		footer: (
			<>
				<FooterItem title="Ver todos os jogos" icon={ProfileIcon} />
				<FooterItem title="Aplicativo Battle.net" icon={ProfileIcon} />
				<FooterItem title="Downloads" icon={ProfileIcon} />
				<FooterItem title="Fóruns dos jogos" icon={ProfileIcon} />
			</>
		),
	},
	sports: {
		main: <>sou sports main</>,
		footer: (
			<>
				<FooterItem title="Torneios da comunidade" icon={ProfileIcon} />
			</>
		),
	},
};

export default function Menu() {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [activeMenu, setActiveMenu] = useState<string | null>(null);

	const handleLoginClick = () => {
		if (dialogRef) dialogRef.current?.showModal();
	};

	const handleDropDownClick = (contentType: string) => {
		if (contentType === activeMenu) {
			setActiveMenu(null);
			return;
		}

		setActiveMenu(contentType);
	};

	return (
		<div className="absolute z-10 w-full border-white/10 border-b">
			<header className="mx-auto flex h-[80px] items-center justify-between px-sm md:h-[100px] md:px-md xl:max-w-xl xl:px-0 2xl:max-w-2xl">
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
							<Dropdown
								text="Jogos"
								href="#"
								onClick={() => handleDropDownClick("games")}
								isActive={activeMenu === "games"}
							/>
							<Dropdown
								text="Esportes"
								href="#"
								onClick={() => handleDropDownClick("sports")}
								isActive={activeMenu === "sports"}
							/>
							<NavLink text="Loja" href="#" />
							<NavLink text="Notícias" href="#" />
							<NavLink text="Suporte" href="#" />
						</ul>
					</nav>
				</div>

				{/* Above md */}
				<div className="flex gap-20">
					<div className="hidden gap-4 md:flex">
						<Button text="Criar conta" variant="outline" />
						<Button
							text="Logar"
							icon={ProfileIcon}
							onClick={handleLoginClick}
						/>
					</div>

					<MenuIcon className="self-center hover:cursor-pointer xl:hidden" />
				</div>
			</header>

			{activeMenu && (
				<MenuDrop content={activeMenu && activeMenuContent[activeMenu]} />
			)}

			<HeaderLoginModal ref={dialogRef} />
		</div>
	);
}
