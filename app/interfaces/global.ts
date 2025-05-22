import type { StaticImageData } from "next/image";
import type { FC, SVGProps } from "react";

export interface InterfaceFooterItem {
	icon: string;
	title: string;
}

export interface BannersProps {
	id: number;
	title: string;
	description: string;
	background: StaticImageData;
	icon: StaticImageData;
	logo: StaticImageData;
	trailer: StaticImageData;
	cover: StaticImageData;
	isCenterPosition: boolean;
}

export interface PlatformIconsType {
	id: number;
	icon: FC<SVGProps<SVGElement>>;
	alt: string;
}

export interface gamesDataResponse {
	name: string;
	category: string;
	image: string;
	logo: string;
	platforms: string[];
}
