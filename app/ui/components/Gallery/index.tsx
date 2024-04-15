import GalleryGames from "./GalleryGames";
import GalleryHeader from "./GalleryHeader";

export default function Gallery() {
  return (
    <main className="bg-black">
      <GalleryHeader />
      <GalleryGames />
    </main>
  );
}
