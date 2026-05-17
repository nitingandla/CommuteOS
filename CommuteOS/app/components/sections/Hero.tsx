"use client";
import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

function RouteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Nodes: represent city pickup/drop points
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    const nodes = [
      { x: W * 0.12, y: H * 0.25 },
      { x: W * 0.28, y: H * 0.15 },
      { x: W * 0.45, y: H * 0.35 },
      { x: W * 0.62, y: H * 0.18 },
      { x: W * 0.78, y: H * 0.28 },
      { x: W * 0.92, y: H * 0.42 },
      { x: W * 0.18, y: H * 0.55 },
      { x: W * 0.35, y: H * 0.65 },
      { x: W * 0.52, y: H * 0.58 },
      { x: W * 0.70, y: H * 0.72 },
      { x: W * 0.88, y: H * 0.62 },
      { x: W * 0.08, y: H * 0.75 },
      { x: W * 0.42, y: H * 0.85 },
      { x: W * 0.65, y: H * 0.90 },
    ];

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
      [0, 6], [6, 7], [7, 8], [8, 9], [9, 10],
      [6, 11], [7, 12], [9, 13],
      [2, 7], [3, 8], [4, 9], [5, 10],
      [1, 6], [2, 8], [8, 13],
    ];

    let frame = 0;
    const particles: { edge: number; t: number; speed: number }[] = [];

    // Initialize particles
    for (let i = 0; i < 12; i++) {
      particles.push({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw edges
      edges.forEach(([a, b]) => {
        const from = nodes[a];
        const to = nodes[b];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.12)";
        ctx.fill();
      });

      // Draw moving particles (vehicles)
      particles.forEach((p) => {
        const [a, b] = edges[p.edge];
        const from = nodes[a];
        const to = nodes[b];
        const x = from.x + (to.x - from.x) * p.t;
        const y = from.y + (to.y - from.y) * p.t;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,255,200,0.55)";
        ctx.fill();

        // Trail
        const trailLen = 0.08;
        const trailT = Math.max(0, p.t - trailLen);
        const tx = from.x + (to.x - from.x) * trailT;
        const ty = from.y + (to.y - from.y) * trailT;
        const grad = ctx.createLinearGradient(tx, ty, x, y);
        grad.addColorStop(0, "rgba(120,220,120,0)");
        grad.addColorStop(1, "rgba(120,220,120,0.2)");
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.edge = Math.floor(Math.random() * edges.length);
        }
      });

      frame++;
      requestAnimationFrame(draw);
    };

    const raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Route network canvas */}
      <RouteBackground />

      {/* Radial gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #0a0a0a 75%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <Badge variant="green" className="mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6fcf73] animate-pulse" />
            Now live in Bengaluru, Hyderabad & Mumbai
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tighter leading-[1.08] text-[#f0f0f0]"
          style={{ animationDelay: "80ms" }}
        >
          Transform Employee Commutes Into an{" "}
          <span
            className="italic font-normal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Intelligent Shared
          </span>{" "}
          Mobility Network
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up mt-6 max-w-xl text-base md:text-lg text-[#666] leading-relaxed"
          style={{ animationDelay: "160ms" }}
        >
          Reduce traffic, lower transport costs, and improve employee productivity
          with AI-powered corporate mobility infrastructure built for modern enterprises.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-3 mt-10"
          style={{ animationDelay: "240ms" }}
        >
          <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto">
            Book a Demo
            <ArrowRight size={15} />
          </Button>
          <Button variant="secondary" size="lg" className="gap-2 w-full sm:w-auto">
            <Play size={13} className="fill-current" />
            Explore Platform
          </Button>
        </div>

        {/* Social proof */}
        <p
          className="animate-fade-up mt-8 text-xs text-[#444] tracking-wide"
          style={{ animationDelay: "320ms" }}
        >
          Trusted by 120+ enterprise companies across India
        </p>

        {/* Company logos */}
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6 opacity-25"
          style={{ animationDelay: "400ms" }}
        >
          {["Infosys", "Wipro", "TCS", "Flipkart", "Zomato", "Swiggy"].map((co) => (
            <span key={co} className="text-xs font-medium tracking-widest uppercase text-[#888]">
              {co}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
