import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "green" | "subtle";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" && "bg-[#161616] text-[#888] border border-[#242424]",
        variant === "green" && "bg-[#0d1f0d] text-[#6fcf73] border border-[#1a3a1a]",
        variant === "subtle" && "bg-[#111] text-[#555] border border-[#1a1a1a]",
        className
      )}
    >
      {children}
    </span>
  );
}
