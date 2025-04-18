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

import { ButtonWithIcon } from "../Buttons";

const allowedOperatingSystemsList: string[] = ["Linux", "Windows", "Macintosh"];

export default function Footer() {
	const [operatingSystem, setOperatingSystem] = useState<string>("");
	const [operatingSystemIcon, setOperatingSystemIcon] = useState<string>("");

	useEffect(() => {
		function getUserAgent() {
			const userAgent = window.navigator.userAgent;

			allowedOperatingSystemsList.forEach((operatingSystem) => {
				if (userAgent.indexOf(operatingSystem) !== -1) {
					setOperatingSystem(operatingSystem);

					switch (operatingSystem) {
						case "Linux":
							setOperatingSystemIcon(linuxIcon);
							break;
						case "Windows":
							setOperatingSystemIcon(windowsIcon);
							break;
						case "Macintosh":
							setOperatingSystemIcon(macosIcon);
							break;
					}
				}
			});
		}

		getUserAgent();
	}, []);

	return (
		<footer className="h-screen overflow-x-hidden bg-cover bg-footerBackground bg-no-repeat">
			<div className="mx-auto max-w-[1300px] px-6 pt-16 md:flex md:px-14 md:pt-24 lg:px-28 xl:pt-32 2xl:px-0">
				<div className="w-4/5">
					<Image src={battleNetLogo} alt="battle.net logo" />
					<h2 className="mt-7 font-bold text-h2">Baixe agora o battle.net</h2>
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

				<div className="relative mt-20 size-full">
					<Image
						src={appIlustration}
						alt=""
						className="absolute top-0 left-20 scale-150 md:left-64"
					/>
					<Image
						src={miniAppIlustration}
						alt=""
						className="absolute top-28 left-16 md:left-64"
					/>
				</div>
			</div>
		</footer>
	);
}
