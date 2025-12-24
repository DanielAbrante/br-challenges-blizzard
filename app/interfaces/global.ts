import type { StaticImageData } from "next/image";
import type { FC, SVGProps } from "react";

export type SVGComponent = FC<SVGProps<SVGElement>>;

export interface BannersProps {
	id: number;
	title: string;
	description: string;
	background: StaticImageData;
	icon: StaticImageData;
	logo: StaticImageData;
	trailer: StaticImageData;
	cover: StaticImageData;
	hasPurchased: boolean;
	isCenterPosition: boolean;
}

export interface PlatformIconsType {
	id: number;
	icon: SVGComponent;
	alt: string;
}

export interface Games {
	id: number;
	name: string;
	category: string;
	image: string | StaticImageData;
	logo: string | StaticImageData;
	platforms: string[];
}
