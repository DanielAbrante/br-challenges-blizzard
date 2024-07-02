import { ButtonNormal } from "../Buttons";
import BannerBackground from "./BannerBackground";
import BannerGameIcons from "./BannerGameIcons";
import BannerGameLogo from "./BannerGameLogo";

export default function Banner() {
  return (
    <section className="relative">
      <BannerBackground />

      <div className="relative mx-auto max-w-screen-xl px-6 pb-8 pt-32 md:px-14 lg:flex lg:flex-row-reverse lg:justify-end lg:gap-40 lg:px-28 lg:pb-28 lg:pt-44 desktop:px-0">
        <div>
          <BannerGameLogo />

          <h1 className="mt-12 max-w-72 text-bannerTitle font-bold leading-[110%] sm:max-w-[35rem]">
            Retorne à escuridão com o game Diablo
          </h1>
          <p className="mt-4 max-w-72 text-lg sm:max-w-[35rem]">
            O retorno de Lilith traz uma era de escuridão e sofrimento{" "}
          </p>

          <ButtonNormal className="mt-8" text="Jogue agora" />
        </div>

        <BannerGameIcons />
      </div>
    </section>
  );
}
