"use client";

import FooterItem from "./FooterItem";

import buyIcon from "@/public/assets/banner-hero/icons/buy.svg";
import rectangleIcon from "@/public/assets/banner-hero/icons/rectangle.svg";
import threeCirclesIcon from "@/public/assets/banner-hero/icons/three-circles.svg";
import Image from "next/image";

import battleNetLogo from "@/public/assets/logo-battle-net.png";
import { useEffect, useState } from "react";

import linuxIcon from "@/public/assets/banner-hero/icons/linux.svg";
import macosIcon from "@/public/assets/banner-hero/icons/macos.svg";
import windowsIcon from "@/public/assets/banner-hero/icons/windows.svg";

import phoneIcon from "@/public/assets/banner-hero/icons/phone.svg";

import miniAppIlustration from "@/public/assets/ilustrations/app-mini.png";
import appIlustration from "@/public/assets/ilustrations/app.png";

import { ButtonWithIcon } from "../../components/Buttons";

type OperatingSystem = "Linux" | "Windows" | "Macintosh";

const allowedOperatingSystemsList: OperatingSystem[] = [
	"Linux",
	"Windows",
	"Macintosh",
];

const osIconMap: Record<OperatingSystem, string> = {
	Linux: linuxIcon,
	Windows: windowsIcon,
	Macintosh: macosIcon,
};

export default function Footer() {
	const [operatingSystem, setOperatingSystem] = useState<string>("");
	const [operatingSystemIcon, setOperatingSystemIcon] = useState<string>("");

	useEffect(() => {
		function getUserAgentOperatingSystem() {
			const userAgent = navigator.userAgent;

			for (const os of allowedOperatingSystemsList) {
				if (userAgent.includes(os)) {
					setOperatingSystem(os);
					setOperatingSystemIcon(osIconMap[os]);
					return;
				}
			}

			setOperatingSystem("Dispositivo");
		}

		getUserAgentOperatingSystem();
	}, []);

	return (
		<footer className="flex flex-col overflow-x-hidden bg-cover bg-footerBackground bg-no-repeat md:flex-row">
			<div className="mb-9 max-w-[1300px] flex-none pt-16 pl-6 md:flex md:pt-24 md:pl-14 lg:pl-28 xl:pt-32 2xl:mx-auto">
				<div>
					<Image src={battleNetLogo} alt="battle.net logo" />
					<h2 className="mt-7 w-3/4 font-bold text-h2 2xl:w-full">
						Baixe agora o battle.net
					</h2>
					<ul className="mt-7 flex flex-col gap-6">
						<FooterItem
							icon={rectangleIcon}
							title="Seus jogos em um só lugar"
						/>
						<FooterItem
							icon={threeCirclesIcon}
							title="Conecte-se aos seus amigos"
						/>
						<FooterItem icon={buyIcon} title="Compre jogos e itens digitais" />
					</ul>
					<ButtonWithIcon
						icon={operatingSystemIcon}
						text={`Baixar para o ${operatingSystem}`}
						className="mt-10 w-64 px-8 py-3 font-semibold"
					/>
					<div className="mt-10 flex gap-4">
						<Image src={phoneIcon} alt="" />
						<p className="max-w-60 font-semibold text-grayLight text-sm">
							Também disponível como{" "}
							<a href="#" className="underline">
								aplicativo móvel
							</a>
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-end">
				<Image
					src={appIlustration}
					alt=""
					className="2xl:-translate-x-28 h-[300px] w-[530px] max-w-none translate-x-40 md:h-[500px] md:w-[900px] md:translate-x-0 md:translate-y-24 xl:translate-x-56"
				/>
				<Image
					src={miniAppIlustration}
					alt=""
					className="-translate-y-36 2xl:-translate-y-36 md:-translate-x-72 h-[170px] w-[320px] translate-x-8 md:h-[290px] md:w-[470px] xl:translate-x-28 2xl:w-[560px] 2xl:translate-x-16 2xl:self-start"
				/>
			</div>
		</footer>
	);
}
