"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
    
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="4" cy="8" r="2.5" fill="#0a0a0a" />
              <circle cx="12" cy="8" r="2.5" fill="#0a0a0a" />
              <path d="M6.5 8 H9.5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 5.5 V2" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 14 V10.5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-semibold text-[#f0f0f0] text-sm tracking-tight">
            CommuteOS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-sm text-[#888] hover:text-[#e0e0e0] transition-colors duration-150 rounded-md hover:bg-[#161616]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          
         <Button
  variant="primary"
  size="sm"
  onClick={() => {
    const section = document.getElementById("employee-form");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
>
  Get Started
</Button>
        </div>

        <button
          className="md:hidden p-2 text-[#888] hover:text-[#e0e0e0] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={cn("h-px bg-current transition-all", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("h-px bg-current transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("h-px bg-current transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2.5 text-sm text-[#888] hover:text-[#e0e0e0] transition-colors rounded-md hover:bg-[#111]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-3 mt-1 border-t border-[#1a1a1a]">
            <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
            <Button variant="primary" size="sm" className="flex-1">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
