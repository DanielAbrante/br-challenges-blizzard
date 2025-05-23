import type { ButtonHTMLAttributes, FC, SVGProps } from "react";
import type { SVGComponent } from "../interfaces/global";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

interface ButtonWithIconProps extends ButtonsProps {
	icon: SVGComponent;
}

export function ButtonNormal({ text, className }: ButtonsProps) {
	return (
		<button
			type="button"
			className={`rounded bg-blue px-4 py-3 font-semibold text-sm text-white ${className}`}
		>
			{text}
		</button>
	);
}

export function ButtonOutline({ text, ...props }: ButtonsProps) {
	return (
		<button
			{...props}
			className="w-32 rounded px-4 py-3 font-medium text-sm outline outline-1 duration-200 hover:bg-white hover:text-black hover:outline-none"
		>
			{text}
		</button>
	);
}

export function ButtonWithIcon({
	text,
	icon: Icon,
	className,
	...props
}: ButtonWithIconProps) {
	return (
		<button
			{...props}
			className={`flex w-32 items-center justify-center gap-2 rounded bg-blue px-4 py-3 font-medium text-sm ${className}`}
		>
			<Icon />
			{text}
		</button>
	);
}
