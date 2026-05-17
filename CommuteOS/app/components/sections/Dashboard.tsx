"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { TrendingDown, TrendingUp, Users, Bus, Leaf, AlertCircle } from "lucide-react";

const occupancyData = [72, 65, 81, 78, 88, 91, 76, 83, 69, 74, 87, 92];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Mon", "Tue", "Wed", "Thu", "Fri", "Mon", "Tue"];

const routes = [
  { name: "Whitefield — Koramangala", vehicles: 4, occupancy: 91, status: "on-time" },
  { name: "Electronic City — MG Road", vehicles: 6, occupancy: 84, status: "on-time" },
  { name: "Hebbal — Marathahalli", vehicles: 3, occupancy: 67, status: "delayed" },
  { name: "JP Nagar — Indiranagar", vehicles: 5, occupancy: 95, status: "on-time" },
];

const kpis = [
  { label: "Active Employees", value: "2,847", change: "+124", up: true, icon: Users },
  { label: "Vehicles Today", value: "186", change: "+12", up: true, icon: Bus },
  { label: "CO₂ Saved (kg)", value: "1,240", change: "+8%", up: true, icon: Leaf },
  { label: "Idle Seats", value: "9.2%", change: "-3.1%", up: false, icon: AlertCircle },
];

const heatmapValues = [
  0.82,0.34,0.91,0.45,0.73,0.28,0.88,0.51,0.67,0.39,
  0.76,0.92,0.41,0.85,0.23,0.69,0.57,0.94,0.32,0.78,
  0.55,0.71,0.38,0.96,0.44,0.83,0.61,0.29,0.87,0.52,
  0.43,0.68,0.79,0.35,0.91,0.56,0.74,0.47,0.83,0.62,
  0.89,0.31,0.64,0.77,0.42,0.95,0.58,0.36,0.71,0.84,
  0.27,0.86,0.49,0.93,0.38,0.65,0.81,0.44,0.72,0.53,
  0.91,0.46,0.75,0.33,0.88,0.61,0.79,0.41,0.94,0.57,
  0.68,0.85,0.37,0.92,0.54,0.76,0.43,0.89,0.62,0.31,
];

export function Dashboard() {
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

  const maxOcc = Math.max(...occupancyData);

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#080808] border-y border-[#161616]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <Badge className="mb-5">Admin Dashboard</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#f0f0f0] leading-tight">
              Full visibility into your{" "}
              <span className="text-[#555]">entire fleet operation</span>
            </h2>
          </div>
          <p className="text-sm text-[#555] max-w-xs">
            Monitor routes, utilization, and costs in real time from one unified ops view.
          </p>
        </div>

        <div
          ref={ref}
          className="rounded-xl border border-[#1c1c1c] bg-[#0d0d0d] overflow-hidden"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a] bg-[#0a0a0a]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#444]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50] animate-pulse" />
              Live — Thursday, 09:14 AM
            </div>
            <div className="w-16" />
          </div>

          <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <div key={kpi.label} className="bg-[#111] border border-[#1a1a1a] rounded-lg p-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <Icon size={13} className="text-[#555]" />
                        <span className={`text-2xs font-medium flex items-center gap-0.5 ${kpi.up ? "text-[#6fcf73]" : "text-[#e05252]"}`}>
                          {kpi.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                          {kpi.change}
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-[#e8e8e8] tracking-tight tabular-nums">{kpi.value}</div>
                      <div className="text-2xs text-[#444] mt-0.5">{kpi.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-medium text-[#c0c0c0]">Seat Occupancy</div>
                    <div className="text-2xs text-[#444] mt-0.5">Last 12 working days</div>
                  </div>
                  <span className="text-xs text-[#6fcf73] font-medium">avg 81.1%</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {occupancyData.map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-sm"
                        style={{
                          height: `${(val / maxOcc) * 100}%`,
                          background: val > 85 ? "rgba(111,207,115,0.6)" : val > 70 ? "rgba(111,207,115,0.3)" : "rgba(255,255,255,0.08)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-1.5 mt-2">
                  {weekDays.map((d, i) => (
                    <div key={i} className="flex-1 text-center text-2xs text-[#333]">{d[0]}</div>
                  ))}
                </div>
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-medium text-[#c0c0c0]">Commute Demand Zones — Bengaluru</div>
                  <Badge variant="subtle" className="text-2xs">Live</Badge>
                </div>
                <div className="grid grid-cols-10 gap-0.5 rounded-md overflow-hidden">
                  {heatmapValues.map((intensity, i) => {
                    const isHot = intensity > 0.7;
                    const isMed = intensity > 0.4;
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-sm"
                        style={{
                          background: isHot
                            ? `rgba(111,207,115,${0.2 + intensity * 0.5})`
                            : isMed
                            ? `rgba(111,207,115,${intensity * 0.15})`
                            : "rgba(255,255,255,0.03)",
                        }}
                      />
                    );
                  })}
                </div>
                <div className="flex gap-4 mt-3 text-2xs text-[#444]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-[rgba(111,207,115,0.7)]" />High demand
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-[rgba(111,207,115,0.2)]" />Medium
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-[rgba(255,255,255,0.05)]" />Low
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-4 flex-1">
                <div className="text-xs font-medium text-[#c0c0c0] mb-4">Active Routes</div>
                <div className="flex flex-col gap-2">
                  {routes.map((route) => (
                    <div key={route.name} className="rounded-lg border border-[#1a1a1a] bg-[#0d0d0d] p-3 hover:border-[#242424] transition-colors">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs text-[#c0c0c0] leading-snug font-medium">{route.name}</span>
                        <span className={`shrink-0 text-2xs px-1.5 py-0.5 rounded font-medium ${route.status === "on-time" ? "bg-[#0d1f0d] text-[#6fcf73]" : "bg-[#2a1010] text-[#e07070]"}`}>
                          {route.status === "on-time" ? "On time" : "Delayed"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-2xs text-[#444]">
                        <span>{route.vehicles} vehicles</span>
                        <span className="text-[#6fcf73] font-medium">{route.occupancy}% full</span>
                      </div>
                      <div className="mt-2 h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#4caf50] opacity-60" style={{ width: `${route.occupancy}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0d1f0d] border border-[#1a3a1a] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#6fcf73]">Carbon Impact</span>
                  <Leaf size={13} className="text-[#4caf50]" />
                </div>
                <div className="text-2xl font-semibold text-[#6fcf73] tracking-tight tabular-nums">−14.2t</div>
                <div className="text-2xs text-[#3a7a3e] mt-1">CO₂ saved this month</div>
                <div className="mt-3 h-1 bg-[#1a3a1a] rounded-full">
                  <div className="h-full w-[68%] rounded-full bg-[#4caf50] opacity-70" />
                </div>
                <div className="flex justify-between text-2xs text-[#3a7a3e] mt-1.5">
                  <span>0t</span>
                  <span>Target: 20.8t</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
