"use client";

import { useState } from "react";
import GalleryGames from "./GalleryGames";
import GalleryHeader from "./GalleryHeader";
import { Platform } from "./galleryData";

export default function Gallery() {
	const [platform, setPlatform] = useState<number>(Platform.PC);

	return (
		<main className="bg-black pb-16">
			<div className="mx-auto max-w-global px-sm md:px-md xl:px-xl 2xl:px-0">
				<GalleryHeader platform={platform} setPlatform={setPlatform} />
				<GalleryGames platform={platform} />
			</div>
		</main>
	);
}
