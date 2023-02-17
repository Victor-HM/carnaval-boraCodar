import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
 icon?: JSX.Element;
 values: {
  value: string;
  name: string;
 }[]
}

export function Select({ icon, values, ...rest }: SelectProps) {
  return (
    <div className="bg-[#F4F4FF] flex items-center gap-3 py-3 px-[14px] focus-within:border-2 focus-within:border-red-400 rounded-md">
      <div className="text-red-400">{icon}</div>
      <select
        className="bg-transparent outline-none border-none appearance-none text-base"
        {...rest}
      >
       {values.map((arr, index) => (
        <option key={index} value={arr.value}>{arr.name}</option>
       ))}
      </select>
    </div>
  );
}