import Image from "next/image";
import { InterfaceFooterItem } from "../../types/appInterfaces";

export default function FooterItem({ icon, title }: InterfaceFooterItem) {
  return (
    <li className="flex gap-4 text-lg text-graySemiLight">
      <Image src={icon} alt="" />
      {title}
    </li>
  );
}
