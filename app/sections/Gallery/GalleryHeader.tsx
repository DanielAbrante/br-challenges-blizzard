import dotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import Image from "next/image";
import { plataforms } from "./plataforms-data";

export default function GalleryHeader() {
	return (
		<div className="flex items-end justify-between py-galleryHeader">
			<h4 className="hidden self-start pt-2 font-semibold text-gray xl:block">
				Games
			</h4>

			<h2 className="w-40 font-bold text-[1.75rem] leading-[110%] md:text-[2rem]">
				Jogos exclusivos
			</h2>

			<div className="hidden md:block">
				<ul className="flex gap-6">
					{plataforms.map((plataform) => (
						<li key={plataform.id}>
							<Image src={plataform.icon} alt={plataform.alt} />
						</li>
					))}
				</ul>
			</div>

			<div className="flex items-center gap-3">
				<div>
					<Image src={dotsMenuIcon} alt="" className="min-w-2" />
				</div>
				<a href="#" className="font-semibold text-blue text-sm md:text-base">
					Ver todos os jogos
				</a>
			</div>
		</div>
	);
}
