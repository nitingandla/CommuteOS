"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Building2, CheckCircle } from "lucide-react";

const proof = [
  "No long onboarding. You're live in 2 weeks.",
  "Dedicated implementation support included.",
  "Works with your existing HR and payroll systems.",
  "SOC 2 Type II certified infrastructure.",
];

export function CTA() {
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
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div
        ref={ref}
        className="relative bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl overflow-hidden p-10 md:p-16"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        
        <div className="absolute inset-0 grid-pattern opacity-40" />

     
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(76,175,80,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs text-[#4caf50] font-medium bg-[#0d1f0d] border border-[#1a3a1a] px-3 py-1.5 rounded-full mb-7">
            <Building2 size={12} />
            Enterprise-ready
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#f0f0f0] leading-tight">
            Ready to fix employee commuting?
          </h2>
          <p className="mt-5 text-sm text-[#555] leading-relaxed max-w-lg">
            Talk to our team and see how CommuteOS can integrate with your existing
            operations. Most companies see measurable cost reduction within the first month.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
  variant="primary"
  size="lg"
  className="gap-2"
  onClick={() => {
    const section = document.getElementById("employee-form");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
>
  Book a Demo
  <ArrowRight size={14} />
</Button>
            
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {proof.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle size={13} className="text-[#4caf50] shrink-0 mt-0.5" />
                <span className="text-xs text-[#555]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
