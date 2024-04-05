import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode, useEffect } from "react";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

interface ButtonWithIconProps extends ButtonsProps {
  icon: string
}

export function ButtonNormal({ text }: ButtonsProps) {
  return (
    <button>
      {text}
    </button>
  )
}

export function ButtonOutline({ text }: ButtonsProps) {
  return (
    <button className="border rounded py-3 px-4 text-sm font-medium w-32">
      {text}
    </button>
  )
}

export function ButtonWithIcon({ text, icon }: ButtonWithIconProps) {
  return (
    <button className="flex justify-center items-center gap-2 bg-blue rounded py-3 px-4 text-sm font-medium w-32">
      <Image src={icon} alt="" />
      {text}
    </button>
  )
}