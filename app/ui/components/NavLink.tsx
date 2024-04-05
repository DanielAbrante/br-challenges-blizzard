import Link from "next/link";
import { LinkHTMLAttributes } from "react";

interface NavLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  text: string;
  href: string;
  hasDropDown?: boolean;

}

export default function NavLink({ text, href, hasDropDown }: NavLinkProps) {
  return (
    <>
      {hasDropDown
        ? <Link className="text-sm font-medium flex gap-3 after:size-[0.625rem] after:mt-[3px] after:border-b-2 after:border-r-2 after:border-white/60 after:rotate-45" href={href}>{text}</Link>
        : <Link className="text-sm font-medium" href={href}>{text}</Link>
      }
    </>
  )
}