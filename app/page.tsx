import background from "../public/assets/banner-hero/games/diablo-bg.png";
import Image from "next/image";
import Menu from "./ui/components/Menu";

export default function Home() {
  return (
    <>
      <Menu />

      <section className="relative pt-20">
        <div>
          <Image src={background} alt="Background" className="absolute -z-10 top-0 h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="text-[2.5rem]">Retorne à escuridão com o game Diablo IV</h1>
          <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
          <button>Jogue Agora</button>
        </div>
      </section>
    </>
  )
}