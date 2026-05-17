"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Clock, Wallet, Shield, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One-tap booking",
    description: "Book your morning ride the night before or in 10 seconds the same day. No calls, no WhatsApp groups.",
  },
  {
    icon: Clock,
    title: "Real-time ETA",
    description: "Live vehicle tracking with accurate arrival windows. Employees know exactly when to step outside.",
  },
  {
    icon: MapPin,
    title: "Precise ride matching",
    description: "Matched to colleagues along your route. Pickup is within 400m, not a 15-minute walk.",
  },
  {
    icon: Wallet,
    title: "Commute wallet",
    description: "Company allocations, personal top-ups, and reimbursements in one balance. No manual claims.",
  },
  {
    icon: Shield,
    title: "Women-safe rides",
    description: "Opt into women-only vehicles with verified drivers. Configurable by HR at the policy level.",
  },
  {
    icon: Star,
    title: "Trip feedback",
    description: "Quick post-ride ratings feed directly into driver quality scores and route planning.",
  },
];


function PhoneMockup() {
  return (
    <div className="relative w-[220px] mx-auto">

      <div className="relative bg-[#111] border border-[#222] rounded-[32px] p-2 shadow-2xl">
       
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0a0a0a] rounded-full z-10" />


        <div className="bg-[#0d0d0d] rounded-[26px] overflow-hidden h-[420px] pt-8 flex flex-col">
     
          <div className="px-4 pb-3 border-b border-[#1a1a1a]">
            <div className="text-xs font-semibold text-[#e0e0e0]">Good morning, Priya </div>
            <div className="text-2xs text-[#555] mt-0.5">Thursday · Your ride is scheduled</div>
          </div>

          <div className="mx-3 mt-3 bg-[#111] border border-[#1e1e1e] rounded-xl p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xs font-medium text-[#6fcf73] bg-[#0d1f0d] px-2 py-0.5 rounded-full">
                Arriving in 8 min
              </span>
              <span className="text-2xs text-[#444]">08:42 AM</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6fcf73]" />
                <span className="text-2xs text-[#888]">HSR Layout, Sector 3</span>
              </div>
              <div className="w-px h-3 bg-[#222] ml-[2.5px]" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#888]" />
                <span className="text-2xs text-[#888]">Koramangala Campus</span>
              </div>
            </div>
           
            <div className="mt-3 pt-2.5 border-t border-[#1a1a1a] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#1c1c1c] flex items-center justify-center text-2xs text-[#888]">
                  RK
                </div>
                <span className="text-2xs text-[#666]">Ramesh K. · Toyota Innova</span>
              </div>
              <span className="text-2xs text-[#4caf50]">★ 4.9</span>
            </div>
          </div>

          <div className="mx-3 mt-2 bg-[#111] border border-[#1e1e1e] rounded-xl p-3">
            <div className="text-2xs text-[#555] mb-2">Sharing with</div>
            <div className="flex items-center gap-1.5">
              {["AN", "SR", "MK"].map((init) => (
                <div
                  key={init}
                  className="w-6 h-6 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-2xs text-[#777]"
                >
                  {init}
                </div>
              ))}
              <span className="text-2xs text-[#444] ml-1">+1 more</span>
            </div>
          </div>

          <div className="mx-3 mt-2 bg-[#111] border border-[#1e1e1e] rounded-xl p-3 flex items-center justify-between">
            <div>
              <div className="text-2xs text-[#555]">Commute balance</div>
              <div className="text-sm font-semibold text-[#e0e0e0] tracking-tight">₹ 3,200</div>
            </div>
            <div className="text-2xs text-[#6fcf73]">Auto-deducting</div>
          </div>

          {/* Bottom nav hint */}
          <div className="mt-auto mb-3 flex justify-center">
            <div className="w-20 h-1 bg-[#1e1e1e] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmployeeExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
       
        <div ref={ref}>
          <Badge className="mb-5">Employee App</Badge>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#f0f0f0] leading-tight"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(12px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            Commuting that actually
            <br />
            <span className="text-[#555]">works for employees</span>
          </h2>
          <p
            className="mt-4 text-sm text-[#555] leading-relaxed max-w-md"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(8px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            The experience employees actually use — not the corporate shuttle tracker they ignore.
            Fast, predictable, and designed around how people actually commute.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group flex gap-3"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(8px)",
                    transition: `opacity 0.5s ease ${i * 60 + 200}ms, transform 0.5s ease ${i * 60 + 200}ms`,
                  }}
                >
                  <div className="mt-0.5 w-7 h-7 shrink-0 rounded-md bg-[#161616] border border-[#222] flex items-center justify-center">
                    <Icon size={13} className="text-[#666]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#c0c0c0]">{feat.title}</div>
                    <div className="text-xs text-[#555] mt-0.5 leading-relaxed">{feat.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
