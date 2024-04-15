import Image from "next/image";

import diablo from "@/public/assets/banner-hero/games/diablo-bg.png";

export default function GalleryGames() {
  return (
    <section className="grid grid-cols-smallGrid gap-4 md:gap-8 tablet:grid-cols-mediumGrid laptop:grid-cols-bigGrid">
      <div>
        <Image src={diablo} alt="" className="h-52 object-cover" />
        <h3>título</h3>
        <p>description</p>
      </div>

      <div>
        <Image src={diablo} alt="" />
        <h3>título</h3>
        <p>description</p>
      </div>

      <div>
        <Image src={diablo} alt="" />
        <h3>título</h3>
        <p>description</p>
      </div>

      <div>
        <Image src={diablo} alt="" />
        <h3>título</h3>
        <p>description</p>
      </div>
    </section>
  );
}
