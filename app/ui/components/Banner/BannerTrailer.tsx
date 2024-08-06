import wowTrailer from "@/public/assets/banner-hero/games/wow-animation.gif"
import Image from "next/image"

export default function BannerTrailer() {
    return (
        <div className="flex flex-col items-end gap-4">
            <h4 className="font-semibold text-sm hidden laptop:block">ASSISTA O TRAILER</h4>
            <Image src={wowTrailer} alt={""} width={280} height={158} className="hidden tablet:block"/>
        </div>
    )
}