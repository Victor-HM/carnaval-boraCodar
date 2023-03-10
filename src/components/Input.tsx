import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon?: JSX.Element;
}

export function Input({ placeholder, icon, ...rest }: InputProps) {
  return (
    <div className="bg-[#F4F4FF] flex items-center gap-3 px-[14px] focus-within:border-2 focus-within:border-red-400 rounded-md drop-shadow-md">
      <div className="text-red-400">{icon}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="h-full py-3 bg-transparent outline-none text-base"
        {...rest}
      />
    </div>
  );
}
