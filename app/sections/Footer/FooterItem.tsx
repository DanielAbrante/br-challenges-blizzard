import Image from "next/image";
import type { InterfaceFooterItem } from "../../types/appInterfaces";

export default function FooterItem({ icon, title }: InterfaceFooterItem) {
	return (
		<li className="flex gap-4 text-graySemiLight text-lg">
			<Image src={icon} alt="" />
			{title}
		</li>
	);
}
