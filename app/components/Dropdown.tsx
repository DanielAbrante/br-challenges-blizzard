import type { AnchorHTMLAttributes } from "react";

import DownArrow from "@/public/assets/banner-hero/icons/down-arrow.svg";

interface DropdownProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string;
	isActive: boolean;
}

export default function Dropdown({ text, isActive, ...props }: DropdownProps) {
	return (
		<a className="flex items-center gap-3 font-medium text-sm" {...props}>
			{text}
			{<DownArrow className={`${isActive && "-scale-100 text-blue-100"}`} />}
		</a>
	);
}
