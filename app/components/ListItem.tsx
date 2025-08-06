import type { SVGComponent } from "@/app/interfaces/global";
import clsx from "clsx";

interface ListItem {
	title: string;
	icon: SVGComponent;
	weight?: "normal" | "semibold";
}

export default function ListItem({ title, icon: Icon, weight }: ListItem) {
	return (
		<li
			className={clsx(
				"flex items-center gap-4 text-gray-200 text-lg",
				weight === "semibold" && "font-semibold text-white-100",
			)}
		>
			<Icon className="text-blue-100" />
			{title}
		</li>
	);
}
