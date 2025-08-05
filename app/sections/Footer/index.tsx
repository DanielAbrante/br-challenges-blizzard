"use client";

import ListItem from "../../components/ListItem";

import BuyIcon from "@/public/assets/banner-hero/icons/buy.svg";
import RectangleIcon from "@/public/assets/banner-hero/icons/rectangle.svg";
import ThreeCirclesIcon from "@/public/assets/banner-hero/icons/three-circles.svg";
import Image from "next/image";

import battleNetLogo from "@/public/assets/logo-battle-net.png";
import { useEffect, useState } from "react";

import LinuxIcon from "@/public/assets/banner-hero/icons/linux.svg";
import MacosIcon from "@/public/assets/banner-hero/icons/macos.svg";
import WindowsIcon from "@/public/assets/banner-hero/icons/windows.svg";

import PhoneIcon from "@/public/assets/banner-hero/icons/phone.svg";

import miniAppIlustration from "@/public/assets/ilustrations/app-mini.png";
import appIlustration from "@/public/assets/ilustrations/app.png";

import type { SVGComponent } from "@/app/interfaces/global";
import { Button } from "../../components/Button";

type OperatingSystem = "Linux" | "Windows" | "Macintosh";

const availableOS: OperatingSystem[] = ["Linux", "Windows", "Macintosh"];

const osIconMap: Record<OperatingSystem, SVGComponent> = {
	Linux: LinuxIcon,
	Windows: WindowsIcon,
	Macintosh: MacosIcon,
};

export default function Footer() {
	const [operatingSystem, setOperatingSystem] = useState<OperatingSystem>();

	useEffect(() => {
		const getUserAgentOperatingSystem = () => {
			const userAgent = navigator.userAgent;

			for (const os of availableOS) {
				if (userAgent.includes(os)) {
					setOperatingSystem(os);
					return;
				}
			}
		};

		getUserAgentOperatingSystem();
	}, []);

	return (
		<footer className="flex flex-col overflow-hidden bg-cover bg-footerBackground bg-no-repeat md:flex-row">
			<div className="mx-auto mb-9 max-w-global flex-none px-sm pt-16 md:flex md:pt-24 md:pr-0 md:pl-md xl:pt-32 2xl:pl-0">
				<div>
					<Image src={battleNetLogo} alt="battle.net logo" />
					<h2 className="mt-7 w-3/4 font-bold text-h2 2xl:w-full">
						Baixe agora o battle.net
					</h2>
					<ul className="mt-7 flex flex-col gap-6">
						<ListItem icon={RectangleIcon} title="Seus jogos em um só lugar" />
						<ListItem
							icon={ThreeCirclesIcon}
							title="Conecte-se aos seus amigos"
						/>
						<ListItem icon={BuyIcon} title="Compre jogos e itens digitais" />
					</ul>
					<div className="mt-10">
						{operatingSystem ? (
							<a
								href="https://download.battle.net/?product=bnetdesk"
								target="_blank"
								rel="noreferrer"
							>
								<Button
									icon={osIconMap[operatingSystem]}
									text={`Baixar para o ${operatingSystem}`}
									weight="semibold"
								/>
							</a>
						) : (
							<Button text={"Baixar para o Dispositivo"} weight="semibold" />
						)}
					</div>

					<div className="mt-10 flex items-center gap-4">
						<PhoneIcon />
						<p className="max-w-60 font-semibold text-grayLight text-sm">
							Também disponível como{" "}
							<a href="#" className="underline">
								aplicativo móvel
							</a>
						</p>
					</div>
				</div>
			</div>

			<div className="flex animate-illustration flex-col items-end">
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
