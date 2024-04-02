import logo from "../public/assets/logo-blizzard.png";
import background from "../public/assets/banner-hero/games/diablo-bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="absolute w-full flex items-center h-20 md:h-24 border z-10">
        <a href="#">
          <Image src={logo} alt="Blizzard Company" />
        </a>
        <menu>Menu</menu>
      </header>

      <section className="relative pt-20">
        <div>
          <Image src={background} alt="Background" className="absolute -z-10 top-0 h-full object-cover" />
        </div>
        <h1 className="text-[2.5rem]">Retorne à escuridão com o game Diablo IV</h1>
        <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
        <button>Jogue Agora</button>
      </section>
    </>
  )
}