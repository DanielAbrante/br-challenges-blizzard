import background from "@/public/assets/banner-hero/games/diablo-bg.png";
import Image from "next/image";
import { ButtonNormal } from "./Buttons";

export default function Banner() {
  return (
    <section className="relative">
      <Image
        src={background}
        alt="Background"
        className="absolute top-0 -z-10 size-full object-cover"
      />

      <div className="px-6 pt-32">
        <h1 className="max-w-72 text-bannerTitle font-bold leading-[110%] sm:max-w-[35rem]">
          Retorne à escuridão com o game Diablo IV
        </h1>
        <p className="mt-4 max-w-72 text-lg sm:max-w-[35rem]">
          O retorno de Lilith traz uma era de escuridão e sofrimento{" "}
        </p>
        <ButtonNormal className="mt-8" text="Jogue agora" />
      </div>
    </section>
  );
}
