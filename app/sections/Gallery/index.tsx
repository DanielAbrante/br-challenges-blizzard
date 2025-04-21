import GalleryGames from "./GalleryGames";
import GalleryHeader from "./GalleryHeader";

export default function Gallery() {
	return (
		<main className="bg-black pb-16">
			<div className="mx-auto max-w-global px-sm md:px-md xl:px-xl 2xl:px-0">
				<GalleryHeader />
				<GalleryGames />
			</div>
		</main>
	);
}
