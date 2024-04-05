import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

interface ButtonWithIconProps extends ButtonsProps {
  icon: ReactElement
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
    <button className="border rounded py-[10px] px-4 text-sm font-medium">
      {text}
    </button>
  )
}

export function ButtonWithIcon({ text, icon }: ButtonWithIconProps) {
  return (
    <button>
      {icon}
      {text}
    </button>
  )
}