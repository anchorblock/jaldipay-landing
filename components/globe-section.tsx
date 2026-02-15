"use client";

import { useState, useEffect, useRef } from "react";
import CountryFlagsMarquee from "./country-flags-marquee";

const stats = [
  {
    value: 30,
    prefix: "$",
    suffix: "B",
    label: "Sent home by Bangladeshi workers",
    description: "8th largest remittance recipient",
  },
  {
    value: 50000,
    prefix: "",
    suffix: "",
    label: "Bangladeshi students travel abroad annually",
    description: "",
  },
  {
    value: 175,
    prefix: "",
    suffix: "M",
    label: "Untapped market size",
    description: "Only 1.5% of Bangladesh has credit cards",
  },
];

function AnimatedStat({
  value,
  prefix,
  suffix,
  label,
  description,
  delay,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}) {
  const [count, setCount] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setCount(0);
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(eased * value));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay, hasAnimated]);

  const formatValue = (n: number) => {
    if (value >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="text-3xl font-light text-white md:text-4xl">
        {prefix}
        {formatValue(count)}
        {suffix && <span className="text-[#6eff9e]"> {suffix}</span>}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
      {description && (
        <p className="mt-0.5 text-xs text-white/40">{description}</p>
      )}
    </div>
  );
}

export default function GlobeSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(11, 43, 3, 0.8) 0%, rgba(0, 0, 0, 0.95) 70%)",
        }}
      />

      {/* SVG World Map (simplified) */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <defs>
            <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6eff9e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6eff9e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="250" fill="url(#globeGrad)" />
          {/* Stylized grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={`h-${i}`}
              cx="400"
              cy="300"
              rx="250"
              ry={50 + i * 50}
              fill="none"
              stroke="#6eff9e"
              strokeWidth="0.5"
              opacity="0.15"
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ellipse
              key={`v-${i}`}
              cx="400"
              cy="300"
              rx={50 + i * 40}
              ry="250"
              fill="none"
              stroke="#6eff9e"
              strokeWidth="0.5"
              opacity="0.15"
              transform={`rotate(${i * 30} 400 300)`}
            />
          ))}
          {/* Scattered dots representing countries (deterministic to avoid hydration mismatch) */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * Math.PI * 2;
            const seed = ((i * 7 + 13) % 37) / 37;
            const r = 80 + seed * 160;
            const cx = 400 + Math.cos(angle) * r;
            const cy = 300 + Math.sin(angle) * r * 0.7;
            const dotR = 2 + ((i * 3 + 5) % 11) / 11 * 2;
            const dotOpacity = 0.3 + ((i * 11 + 7) % 19) / 19 * 0.5;
            return (
              <circle
                key={`dot-${i}`}
                cx={cx}
                cy={cy}
                r={dotR}
                fill="#6eff9e"
                opacity={dotOpacity}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#26db00] mb-4">
              Send money to 50+ countries worldwide
            </p>
            <h2 className="text-2xl font-extralight text-white md:text-4xl lg:text-[43.2px] leading-[1.2]">
              Connect to the global
              <br />
              digital economy
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-lg">
              JaldiPay makes transferring money as easy and secure as moving data. Our network spans across continents saving physical visits, SWIFT fees, paperwork and waiting for days.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-16">
              {stats.map((stat, i) => (
                <AnimatedStat key={stat.label} {...stat} delay={i * 200} />
              ))}
            </div>
          </div>

          {/* Right side is the SVG globe (positioned absolutely) */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Country Flags Marquee */}
      <div className="relative z-10 mt-16">
        <CountryFlagsMarquee />
      </div>
    </section>
  );
}
