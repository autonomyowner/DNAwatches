"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none touch-manipulation select-none",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white font-semibold hover:from-slate-800 hover:via-rose-800 hover:to-slate-800 hover:scale-105 focus-visible:ring-rose-900 shadow-lg hover:shadow-xl active:scale-95",
        outline: "bg-transparent ring-1 ring-slate-700/50 text-white hover:bg-gradient-to-br hover:from-slate-900/20 hover:via-rose-900/20 hover:to-slate-900/20 hover:ring-rose-700/50 active:bg-slate-900/30",
        ghost: "bg-transparent text-white hover:bg-gradient-to-br hover:from-slate-900/10 hover:via-rose-900/10 hover:to-slate-900/10 active:bg-slate-900/20",
        secondary: "bg-[#A0B99F] text-white hover:bg-[#F9AFA7] focus-visible:ring-[#F28B82] active:bg-[#8A9A89]",
      },
      size: {
        sm: "h-10 px-4 text-xs min-w-[44px]", // Increased height for better touch targets
        md: "h-12 px-6 text-sm min-w-[44px]",
        lg: "h-14 px-8 text-base min-w-[44px]",
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


