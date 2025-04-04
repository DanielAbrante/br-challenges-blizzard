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
					className="flex gap-3 text-sm font-medium after:mt-[3px] after:size-2.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-white/60 hover:text-blue hover:after:mt-[5px] hover:after:duration-300"
					href={href}
				>
					{text}
				</Link>
			) : (
				<Link className="text-sm font-medium hover:text-blue" href={href}>
					{text}
				</Link>
			)}
		</>
	);
}
