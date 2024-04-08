import BannerBackground from "./BannerBackground";
import BannerGameIcons from "./BannerGameIcons";
import { ButtonNormal } from "./Buttons";

export default function Banner() {
  return (
    <section className="relative">
      <BannerBackground />

      <div className="px-6 pb-8 pt-32">
        <h1 className="max-w-72 text-bannerTitle font-bold leading-[110%] sm:max-w-[35rem]">
          Retorne à escuridão com o game Diablo IV
        </h1>
        <p className="mt-4 max-w-72 text-lg sm:max-w-[35rem]">
          O retorno de Lilith traz uma era de escuridão e sofrimento{" "}
        </p>

        <ButtonNormal className="mt-8" text="Jogue agora" />

        <BannerGameIcons />
      </div>
    </section>
  );
}
