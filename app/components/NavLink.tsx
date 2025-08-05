import type { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string;
}

export default function NavLink({ text, ...props }: NavLinkProps) {
	return <a {...props}>{text}</a>;
}
