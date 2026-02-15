"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const cards = [
  {
    id: "wage",
    label: "WAGE",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    amount: "৳ 500",
    button: "Move your money",
    image: "/images/cards/card-wage.jpg",
    description: "Discover how numerous workers abroad send their income home with no hefty commissions",
    gradient: "from-[#a8c5b8] to-[#d4e3d8]",
  },
  {
    id: "college",
    label: "COLLEGE FEE",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    amount: "৳ 6,000",
    button: "Pay your bills",
    image: "/images/cards/card-college.jpg",
    description: "Switch to simpler expense management built for students and international scholars",
    gradient: "from-[#e8e8e8] to-[#f5f5f5]",
    isCenter: true,
  },
  {
    id: "ott",
    label: "OTT PLAN",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    amount: "৳ 1,000",
    button: "Manage subscriptions",
    image: "/images/cards/card-ott.jpg",
    description: "Get assured cashbacks every time you Jaldipay. Save big even if you don't have a credit card",
    gradient: "from-[#f5e6d3] to-[#faf0e6]",
  },
];

export default function FeatureCardsNew() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0b2b03] py-16 md:py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 text-center mb-12">
        <h2 className="text-2xl font-extralight text-white md:text-4xl lg:text-[43.2px]">
          Join millions of customers
          <br />
          worldwide and in Bangladesh
        </h2>
        <p className="mt-4 text-sm text-white/60">
          Send money easily, spend smartly and save big
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[1050px] px-6">
        <div className="feature-cards-container flex flex-col md:flex-row items-center justify-center gap-6">
          {cards.map((card) => {
            const isActive = hoveredCard === card.id || (!hoveredCard && card.isCenter);
            return (
              <div
                key={card.id}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`feature-card relative overflow-hidden rounded-2xl cursor-pointer ${
                    isActive
                      ? "w-[280px] h-[420px]"
                      : "w-[240px] h-[380px]"
                  }`}
                >
                  {/* Card Image */}
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    {/* Top - Icon & Label */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                        {card.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        {card.label}
                      </span>
                    </div>

                    {/* Bottom - Amount & Button */}
                    <div>
                      <p
                        className={`font-light text-white transition-all duration-500 ${
                          isActive ? "text-4xl" : "text-3xl"
                        }`}
                      >
                        {card.amount}
                      </p>
                      <button
                        className={`mt-3 w-full rounded-lg py-2 text-xs font-medium transition-all ${
                          isActive || card.isCenter
                            ? "bg-[#26db00] text-white"
                            : "border border-white/50 text-white hover:bg-white/10"
                        }`}
                      >
                        {card.button}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description - visible on hover */}
                <p
                  className={`mt-3 max-w-[280px] text-center text-[11px] text-[#4dff00] transition-all duration-300 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card Video Section */}
      <div className="relative mt-16 h-[400px] overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)",
          }}
        >
          <source src="/videos/card-section.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <h3 className="text-2xl font-extralight text-white md:text-4xl">
              Find the JaldiPay card
            </h3>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Virtual and physical cards for everyday spending, anywhere in the world.
            </p>
            <button className="mt-6 rounded-full border border-[#26db00] px-6 py-3 text-sm font-medium text-[#26db00] transition-all hover:bg-[#26db00] hover:text-white">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
