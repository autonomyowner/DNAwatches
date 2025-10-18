import type { TextareaHTMLAttributes, ReactElement } from "react";
import { clsx } from "clsx";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string };

export default function Textarea({ className, ...props }: TextareaProps): ReactElement {
  return (
    <textarea
      className={clsx(
        "w-full resize-none rounded-3xl border border-white/15 bg-black/40 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-white/40 focus:bg-black/60 focus:ring-2 focus:ring-[#006233]/40",
        className,
      )}
      {...props}
    />
  );
}


