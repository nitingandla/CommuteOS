import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
       
        size === "sm" && "px-3.5 py-1.5 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-2.5 text-sm",
        
        variant === "primary" &&
          "bg-white text-black hover:bg-[#e8e8e8] active:bg-[#d0d0d0] shadow-sm",
        variant === "secondary" &&
          "bg-[#1c1c1c] text-[#e0e0e0] border border-[#2a2a2a] hover:bg-[#222] hover:border-[#333] active:bg-[#1a1a1a]",
        variant === "ghost" &&
          "text-[#888] hover:text-[#e0e0e0] hover:bg-[#161616]",
        variant === "outline" &&
          "border border-[#2a2a2a] text-[#e0e0e0] hover:bg-[#161616] hover:border-[#333]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
