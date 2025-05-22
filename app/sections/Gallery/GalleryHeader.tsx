import DotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import { platformIcons } from "./galleryData";

export default function GalleryHeader({
	platform,
	setPlatform,
}: {
	platform: number;
	setPlatform: (platformId: number) => void;
}) {
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
					{platformIcons.map((platformIcon) => (
						<li key={platformIcon.id}>
							<platformIcon.icon
								onClick={() => setPlatform(platformIcon.id)}
								className={`hover:cursor-pointer ${platformIcon.id === platform ? "text-blue hover:opacity-100" : "hover:opacity-70"} `}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className="flex items-center gap-3">
				<div>
					<DotsMenuIcon className="min-w-2" />
				</div>
				<a href="#" className="font-semibold text-blue text-sm md:text-base">
					Ver todos os jogos
				</a>
			</div>
		</div>
	);
}
