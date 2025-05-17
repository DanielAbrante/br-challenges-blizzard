import type { StaticImageData } from "next/image";

export interface InterfaceGameList {
	category: string;
	image: string;
	logo: string;
	name: string;
}

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

export interface PlataformsType {
	id: number;
	icon: StaticImageData;
	alt: string;
}
