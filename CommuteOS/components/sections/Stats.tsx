"use client";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 40,
    suffix: "%",
    label: "Lower commute costs",
    description: "Average savings per employee vs. individual cab reimbursements",
  },
  {
    value: 3,
    suffix: "×",
    label: "Better vehicle utilization",
    description: "Higher seat occupancy through AI-powered ride pooling",
  },
  {
    value: 25,
    suffix: "%",
    label: "Less commute stress",
    description: "Reported by employees using scheduled, predictable routes",
  },
  {
    value: 60,
    suffix: "%",
    label: "Fewer idle seats",
    description: "Reduction in empty seats across corporate shuttle fleets",
  },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.value, 1000, inView);

  return (
    <div
      className="border-t border-[#1e1e1e] pt-7 pb-5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(8px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
      }}
    >
      <div className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#f0f0f0] tabular-nums">
        {count}
        <span className="text-[#888]">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-[#c0c0c0]">{stat.label}</div>
      <div className="mt-1.5 text-xs text-[#555] leading-relaxed">{stat.description}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
