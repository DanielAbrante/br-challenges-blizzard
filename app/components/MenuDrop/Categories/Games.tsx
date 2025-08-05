import ListItem from "@/app/components/ListItem";
import BattlenetIcon from "@/public/assets/banner-hero/icons/battlenet.svg";
import ChatIcon from "@/public/assets/banner-hero/icons/chat.svg";
import DotsMenuIcon from "@/public/assets/banner-hero/icons/dots-menu.svg";
import DownloadsIcon from "@/public/assets/banner-hero/icons/downloads.svg";
import Image from "next/image";
import { games } from "../menuDropData";

export const GamesMain = () => {
	return (
		<>
			{games.map((game) => {
				return (
					<div
						key={game.id}
						className="group flex flex-col items-center gap-2 rounded p-7 hover:bg-black200"
					>
						<Image
							src={game.icon}
							alt={game.title}
							className="origin-bottom group-hover:scale-125"
						/>
						<p className="max-w-28 text-center text-graySemiBold text-sm group-hover:text-white">
							{game.title}
						</p>
					</div>
				);
			})}
		</>
	);
};

export const GamesFooter = () => {
	return (
		<>
			<ListItem
				title="Ver todos os jogos"
				weight="semibold"
				icon={DotsMenuIcon}
			/>
			<ListItem
				title="Aplicativo Battle.net"
				weight="semibold"
				icon={BattlenetIcon}
			/>
			<ListItem title="Downloads" weight="semibold" icon={DownloadsIcon} />
			<ListItem title="Fóruns dos jogos" weight="semibold" icon={ChatIcon} />
		</>
	);
};
