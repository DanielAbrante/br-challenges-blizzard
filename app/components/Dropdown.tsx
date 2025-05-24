import type { AnchorHTMLAttributes } from "react";

interface DropdownProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string;
}

export default function Dropdown({ text, ...props }: DropdownProps) {
	return (
		<a
			className="flex gap-3 font-medium text-sm after:mt-[3px] after:size-2.5 after:rotate-45 after:border-white/60 after:border-r-2 after:border-b-2 hover:after:border-blue hover:after:duration-300"
			{...props}
		>
			{text}
		</a>
	);
}
