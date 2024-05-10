import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

interface ButtonWithIconProps extends ButtonsProps {
  icon: string;
}

export function ButtonNormal({ text, className }: ButtonsProps) {
  return (
    <button
      className={`rounded bg-blue px-4 py-3 text-sm font-semibold text-white ${className}`}
    >
      {text}
    </button>
  );
}

export function ButtonOutline({ text }: ButtonsProps) {
  return (
    <button className="w-32 rounded px-4 py-3 text-sm font-medium outline outline-1 duration-200 hover:bg-white hover:text-black hover:outline-none">
      {text}
    </button>
  );
}

export function ButtonWithIcon({ text, icon }: ButtonWithIconProps) {
  return (
    <button className="flex w-32 items-center justify-center gap-2 rounded bg-blue px-4 py-3 text-sm font-medium">
      {icon && <Image src={icon} alt="" />}
      {text}
    </button>
  );
}
