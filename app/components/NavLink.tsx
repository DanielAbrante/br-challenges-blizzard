import type { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string;
}

export default function NavLink({ text, ...props }: NavLinkProps) {
	return (
		<a className="hover:text-blue" {...props}>
			{text}
		</a>
	);
}
