"use client";

import { useState, useEffect, useRef } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ icon, endValue, suffix, label, delay }: StatItemProps) {
  // Start with the end value for SEO and initial render
  const [count, setCount] = useState(endValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add delay before starting animation
          setTimeout(() => {
            setHasAnimated(true);
            setIsAnimating(true);
            // Reset to 0 to start animation
            setCount(0);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, delay]);

  useEffect(() => {
    if (!isAnimating) return;

    const duration = 2000;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(endValue * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isAnimating, endValue]);

  return (
    <div ref={ref} className="text-center group">
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9EE86F]/20 transition-all duration-300 group-hover:bg-[#9EE86F]/40 group-hover:scale-110">
          {icon}
        </div>
        <div className="text-left">
          <div className="text-3xl font-bold text-[#0A3700] tabular-nums">
            <span
              className={`inline-block transition-all duration-300 ${
                isAnimating ? "text-[#9EE86F]" : ""
              }`}
            >
              {count}
              {suffix}
            </span>
          </div>
          <div className="text-sm text-gray-600 font-medium">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: (
        <svg
          className="h-7 w-7 text-[#0A3700]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
      endValue: 120,
      suffix: "M+",
      label: "Profiles",
      delay: 0,
    },
    {
      icon: (
        <svg
          className="h-7 w-7 text-[#0A3700]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      endValue: 20,
      suffix: "+",
      label: "Insights",
      delay: 150,
    },
    {
      icon: (
        <svg
          className="h-7 w-7 text-[#0A3700]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      ),
      endValue: 150,
      suffix: "+",
      label: "Countries",
      delay: 300,
    },
    {
      icon: (
        <svg
          className="h-7 w-7 text-[#0A3700]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      endValue: 400,
      suffix: "+",
      label: "Industries",
      delay: 450,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            className="text-xl font-semibold text-[#0A3700] md:text-2xl"
            data-aos="fade-up"
          >
            Go-to Prospecting Data Platform for Global Reach
          </h2>
        </div>

        <div
          className="rounded-2xl border border-[#9EE86F]/30 bg-gradient-to-br from-[#9EE86F]/5 to-[#9EE86F]/10 p-8 md:p-10 shadow-lg shadow-[#9EE86F]/10"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                icon={stat.icon}
                endValue={stat.endValue}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
