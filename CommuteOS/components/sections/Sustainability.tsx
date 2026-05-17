"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Leaf, Zap, TrendingDown, Globe } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "38%",
    label: "Avg. CO₂ reduction",
    detail: "vs. individual car commuting baselines",
  },
  {
    icon: Zap,
    value: "EV-ready",
    label: "Electric fleet support",
    detail: "Integrated routing for EV shuttle operators",
  },
  {
    icon: Globe,
    value: "Scope 3",
    label: "ESG reporting",
    detail: "Monthly reports aligned to GHG Protocol",
  },
  {
    icon: Leaf,
    value: "Auto",
    label: "Carbon offset tracking",
    detail: "Quantified tonnes saved per employee per month",
  },
];

export function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="enterprise"
      className="py-20 md:py-28 bg-[#080808] border-y border-[#161616]"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        
          <div
            className="relative"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(-12px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="relative bg-[#0d1f0d] border border-[#1a3a1a] rounded-2xl p-8 overflow-hidden">
       
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-[#1a3a1a] opacity-30 absolute" />
                <div className="w-44 h-44 rounded-full border border-[#1a3a1a] opacity-40 absolute" />
                <div className="w-28 h-28 rounded-full border border-[#2a5a2a] opacity-50 absolute" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center py-10">
                <div className="text-6xl font-semibold text-[#6fcf73] tracking-tighter tabular-nums">
                  −38%
                </div>
                <div className="mt-2 text-sm text-[#3a7a3e] font-medium">
                  Average carbon reduction
                </div>
                <div className="mt-1 text-xs text-[#2a5a2e]">
                  per employee annually
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                  {[
                    { label: "CO₂ Saved", value: "14.2t" },
                    { label: "Trees Equiv.", value: "641" },
                    { label: "EV Routes", value: "38%" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-lg font-semibold text-[#6fcf73] tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-2xs text-[#3a6a3e] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-2 bg-[#0a1a0a] border border-[#1a3a1a] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#4caf50] font-medium">Monthly ESG Report</span>
                  <span className="text-2xs text-[#2a5a2e]">Auto-generated</span>
                </div>
                <div className="space-y-2">
                  {["Scope 3 emissions baseline", "Monthly reduction delta", "Vehicle electrification %", "Pooling efficiency score"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4caf50] opacity-60" />
                      <span className="text-2xs text-[#3a6a3e]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(12px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <Badge variant="green" className="mb-5">
              <Leaf size={11} />
              Sustainability
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#f0f0f0] leading-tight">
              Corporate mobility that contributes to your ESG targets
            </h2>
            <p className="mt-5 text-sm text-[#555] leading-relaxed">
              Employee commuting is one of the largest, least-measured contributors to
              enterprise carbon footprint. CommuteOS makes it measurable, reportable, and
              reducible — without requiring behavior change employees resist.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="flex gap-3"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateY(8px)",
                      transition: `opacity 0.5s ease ${i * 80 + 300}ms, transform 0.5s ease ${i * 80 + 300}ms`,
                    }}
                  >
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-[#0d1f0d] border border-[#1a3a1a] flex items-center justify-center">
                      <Icon size={14} className="text-[#4caf50]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#e0e0e0]">{m.value}</div>
                      <div className="text-xs font-medium text-[#888] mt-0.5">{m.label}</div>
                      <div className="text-xs text-[#444] mt-0.5">{m.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
