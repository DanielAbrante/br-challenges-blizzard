import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import type { SVGComponent } from "../../interfaces/global";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	weight?: "medium" | "semibold";
	icon?: SVGComponent;
	variant?: "normal" | "outline";
	background?: "primary" | "none";
}

export function Button({
	text,
	weight = "medium",
	icon: Icon,
	variant = "normal",
	className,
	...props
}: ButtonsProps) {
	return (
		<button
			type="button"
			className={clsx(
				"rounded px-4 py-3 text-sm text-white",
				weight === "medium" ? "font-medium" : "font-semibold",
				variant === "normal"
					? "bg-blue hover:brightness-110"
					: "border duration-200 hover:bg-white hover:text-black",
				Icon && "flex items-center justify-center gap-2 px-8",
				className,
			)}
			{...props}
		>
			{Icon && <Icon />}
			{text}
		</button>
	);
}
