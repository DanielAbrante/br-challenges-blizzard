import consoleIcon from "@/public/assets/banner-hero/icons/console.svg";
import dotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import nintendoIcon from "@/public/assets/banner-hero/icons/nintendo-switch.svg";
import playstationIcon from "@/public/assets/banner-hero/icons/playstation.svg";
import xboxIcon from "@/public/assets/banner-hero/icons/xbox.svg";
import Image from "next/image";

export default function GalleryHeader() {
	return (
		<div className="flex items-end justify-between py-galleryHeader">
			{/* xl */}
			<h4 className="hidden self-start pt-2 font-semibold text-gray xl:block">
				Games
			</h4>

			<h2 className="w-40 font-bold text-[1.75rem] leading-[110%] md:text-[2rem]">
				Jogos exclusivos
			</h2>

			{/* md */}
			<div className="hidden md:block">
				<ul className="flex gap-6">
					<li>
						<Image src={consoleIcon} alt="console icon" />
					</li>
					<li>
						<Image src={nintendoIcon} alt="nintendo icon" />
					</li>
					<li>
						<Image src={xboxIcon} alt="xbox icon" />
					</li>
					<li>
						<Image src={playstationIcon} alt="playstation icon" />
					</li>
				</ul>
			</div>

			<div className="flex gap-3 pb-2">
				<div className="relative w-2">
					<Image src={dotsMenuIcon} alt="" fill />
				</div>
				<a href="#" className="font-semibold text-blue text-sm">
					Ver todos jogos
				</a>
			</div>
		</div>
	);
}
