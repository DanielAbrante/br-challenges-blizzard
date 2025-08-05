import ListItem from "@/app/components/ListItem";
import TrophyIcon from "@/public/assets/banner-hero/icons/trophy.svg";
import Image from "next/image";
import { sports } from "../menuDropData";

export const SportsMain = () => {
	return (
		<>
			{sports.map((sport) => {
				return (
					<div
						key={sport.id}
						className="group flex flex-col items-center gap-6 rounded pb-8"
					>
						<Image
							src={sport.icon}
							alt={sport.title}
							className="group-hover:scale-110"
						/>
						<p className="max-w-32 text-center text-graySemiBold group-hover:text-white">
							{sport.title}
						</p>
					</div>
				);
			})}
		</>
	);
};

export const SportsFooter = () => {
	return (
		<>
			<ListItem
				title="Torneios da comunidade"
				weight="semibold"
				icon={TrophyIcon}
			/>
		</>
	);
};
