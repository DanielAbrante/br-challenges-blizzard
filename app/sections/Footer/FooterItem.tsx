import type { SVGComponent } from "@/app/interfaces/global";

export default function FooterItem({
	icon: Icon,
	title,
}: { icon: SVGComponent; title: string }) {
	return (
		<li className="flex items-center gap-4 text-graySemiLight text-lg">
			<Icon />
			{title}
		</li>
	);
}
