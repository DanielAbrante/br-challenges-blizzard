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
      className={`w-32 rounded bg-blue px-4 py-3 text-sm font-semibold text-white ${className}`}
    >
      {text}
    </button>
  );
}

export function ButtonOutline({ text }: ButtonsProps) {
  return (
    <button className="w-32 rounded border px-4 py-3 text-sm font-medium">
      {text}
    </button>
  );
}

export function ButtonWithIcon({ text, icon, className }: ButtonWithIconProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded bg-blue px-4 py-3 text-sm font-medium ${className}`}
    >
      {icon && <Image src={icon} alt="" />}

      {text}
    </button>
  );
}
