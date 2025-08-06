"use client";

import { useState } from "react";
import GalleryGames from "./GalleryGames";
import GalleryHeader from "./GalleryHeader";
import { Platform } from "./galleryData";

export default function Gallery() {
	const [platform, setPlatform] = useState<number>(Platform.PC);

	return (
		<main className="bg-black-500 pb-16">
			<div className="mx-auto px-sm md:px-12 xl:max-w-xl xl:px-0 2xl:max-w-2xl">
				<GalleryHeader platform={platform} setPlatform={setPlatform} />
				<GalleryGames platform={platform} />
			</div>
		</main>
	);
}
