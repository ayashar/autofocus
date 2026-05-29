import { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function TextField({ label, id, className = "", ...props }: TextFieldProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-") ?? undefined;

  return (
    <label className="block text-[16px] text-ink" htmlFor={inputId}>
      {label && <span>{label}</span>}
      <input
        id={inputId}
        className={`mt-2 h-10 w-full rounded-[7px] border border-line bg-white px-3 text-[15px] text-ink outline-none placeholder:text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-100 ${className}`}
        {...props}
      />
    </label>
  );
}
