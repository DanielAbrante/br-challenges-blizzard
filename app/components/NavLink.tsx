import Link from "next/link";
import type { LinkHTMLAttributes } from "react";

interface NavLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
	text: string;
	href: string;
	hasDropDown?: boolean;
}

export default function NavLink({ text, href, hasDropDown }: NavLinkProps) {
	return (
		<>
			{hasDropDown ? (
				<Link
					className="flex gap-3 font-medium text-sm after:mt-[3px] after:size-2.5 after:rotate-45 after:border-white/60 after:border-r-2 after:border-b-2 hover:text-blue hover:after:mt-[5px] hover:after:duration-300"
					href={href}
				>
					{text}
				</Link>
			) : (
				<Link className="font-medium text-sm hover:text-blue" href={href}>
					{text}
				</Link>
			)}
		</>
	);
}
