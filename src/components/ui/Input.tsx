import type { InputHTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { className?: string };

export default function Input({ className, ...props }: InputProps): ReactElement {
  return (
    <input
      className={clsx(
        "w-full rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-white/40 focus:bg-black/60 focus:ring-2 focus:ring-[#006233]/40",
        className,
      )}
      {...props}
    />
  );
}
