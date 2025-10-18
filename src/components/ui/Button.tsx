"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none touch-manipulation select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-black via-[#006233] to-black text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] hover:scale-[1.02] hover:shadow-[0_18px_40px_-14px_rgba(0,98,51,0.5)] focus-visible:ring-[#006233]",
        outline:
          "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/60",
        ghost:
          "border border-transparent bg-transparent text-white/70 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white/40",
        secondary:
          "bg-[#c9a961] text-black hover:bg-[#d9b974] focus-visible:ring-[#c9a961]/70",
      },
      size: {
        sm: "h-10 px-5 text-[10px]",
        md: "h-12 px-8 text-[11px]",
        lg: "h-14 px-10 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    asChild?: boolean;
  };

export default function Button({ className, variant, size, asChild, ...props }: ButtonProps): ReactElement {
  const Comp = asChild ? Slot : "button";
  return <Comp className={clsx(buttonVariants({ variant, size }), className)} {...props} />;
}
