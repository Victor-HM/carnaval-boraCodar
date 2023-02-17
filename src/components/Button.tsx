import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 placeholder: string;
}

export function Button({ placeholder, ...rest }: ButtonProps) {
 return (
  <button className="bg-purple-700 rounded-md px-8 py-3 text-white font-bold text-sm" {...rest}>
   {placeholder}
  </button>
 )
}