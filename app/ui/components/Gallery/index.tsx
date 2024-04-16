import GalleryGames from "./GalleryGames";
import GalleryHeader from "./GalleryHeader";

export default function Gallery() {
  return (
    <main className="bg-black">
      <div className="mx-auto max-w-[1300px] px-6 md:px-14 lg:px-28 desktop:px-0">
        <GalleryHeader />
        <GalleryGames />
      </div>
    </main>
  );
}
