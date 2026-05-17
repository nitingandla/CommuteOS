"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  Route,
  Brain,
  ShieldCheck,
  BarChart2,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Carpooling",
    description:
      "Automatically match employees by location, shift timing, and commute preferences. Reduce per-seat costs without sacrificing convenience.",
    tag: "Core",
  },
  {
    icon: Route,
    title: "Dynamic Shuttle Routing",
    description:
      "Routes adapt daily based on who's in office and where they live. No more fixed routes that serve 40% of the fleet.",
    tag: "Routing",
  },
  {
    icon: Brain,
    title: "AI Route Optimization",
    description:
      "Our model ingests real-time traffic, historic patterns, and demand signals to build routes that are genuinely faster and cheaper.",
    tag: "AI",
  },
  {
    icon: ShieldCheck,
    title: "Employee Safety",
    description:
      "Live trip tracking, verified driver profiles, panic alerts, and women-safe ride preferences — safety controls that HR teams can configure.",
    tag: "Safety",
  },
  {
    icon: BarChart2,
    title: "Commute Analytics",
    description:
      "Understand fleet utilization, peak demand corridors, cost per employee, and commute satisfaction scores in one dashboard.",
    tag: "Insights",
  },
  {
    icon: Leaf,
    title: "Carbon Tracking",
    description:
      "Measure scope 3 emissions from employee commutes. Get monthly ESG-ready reports and track reduction against baseline.",
    tag: "ESG",
  },
];

export function Features() {
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
    <section id="features" className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-xl mb-14">
        <Badge className="mb-5">Platform Features</Badge>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#f0f0f0] leading-tight">
          Everything your mobility team needs,{" "}
          <span className="text-[#555]">in one place</span>
        </h2>
        <p className="mt-4 text-[#666] text-sm leading-relaxed">
          CommuteOS handles the full complexity of corporate mobility — from matching
          employees to vehicles, to surfacing the data your ops team needs to improve.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#1a1a1a]">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="group bg-[#0a0a0a] p-6 hover:bg-[#0e0e0e] transition-all duration-200 cursor-default"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease, background 0.2s",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#161616] border border-[#222] flex items-center justify-center group-hover:border-[#2a2a2a] transition-colors">
                  <Icon size={16} className="text-[#888] group-hover:text-[#bbb] transition-colors" />
                </div>
                <span className="text-2xs text-[#444] font-medium tracking-widest uppercase">
                  {feat.tag}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#e0e0e0] mb-2">{feat.title}</h3>
              <p className="text-xs text-[#555] leading-relaxed">{feat.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
