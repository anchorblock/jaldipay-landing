"use client";

import { useState } from "react";
import Image from "next/image";

const TakaSymbol = () => (
  <svg className="inline-block h-[0.8em] w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30">
    <path fill="white" d="M18.83,15.32c-.78-1.45-1.88-2.58-3.26-3.37-1.38-.79-2.97-1.18-4.73-1.18-.65,0-1.26.05-1.85.15v2.75c.57-.15,1.19-.23,1.85-.23,1.15,0,2.19.26,3.11.77.91.51,1.63,1.29,2.16,2.32.54,1.04.81,2.33.81,3.85,0,1.25-.19,2.34-.55,3.26,0,0,0,.02,0,.03-.05.11-.09.22-.14.33-.83,1.82-2.54,3.08-4.51,3.08-1.82,0-3.41-1.07-4.3-2.67-.04-.04-.08-.07-.1-.11-.47-.9-.73-2.01-.79-3.29v-12.4h10.43v-2.59H6.51V0H0v2.59h3.37v3.42H0v2.59h3.37v12.25h0c.04,1.79.43,3.39,1.16,4.75h0c.78,1.45,1.88,2.58,3.26,3.37.22.12.42.23.61.34.04.02.08.04.11.06.7.36,1.33.56,2.31.62.11,0,.21,0,.31,0,.08,0,.16,0,.24,0,.69,0,1.35-.1,1.94-.27.8-.21,1.55-.53,2.24-.93,1.38-.79,2.48-1.92,3.26-3.37h0c.78-1.44,1.17-3.14,1.17-5.06s-.39-3.62-1.17-5.06Z"/>
  </svg>
);

const cards = [
  {
    id: "wage",
    label: "Wage",
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 62">
        <g>
          <g>
            <g>
              <rect fill="#0b2b03" x="17.4" y="17.73" width="46.2" height="24.54" transform="translate(-7.7 15.26) rotate(-19.53)"/>
              <ellipse fill="#fff" cx="40.5" cy="30" rx="5.05" ry="8.3" transform="translate(-7.7 15.26) rotate(-19.53)"/>
            </g>
            <g>
              <polygon fill="#0b2b03" points="29.39 19.26 15.83 21.29 16.23 23.93 29.39 19.26"/>
              <polygon fill="#0b2b03" points="51.61 40.74 65.17 38.71 64.77 36.07 51.61 40.74"/>
            </g>
          </g>
        </g>
      </svg>
    ),
    amount: "500",
    button: "Move your money",
    image: "/images/cards/card-wage.jpg",
    description: "Discover how numerous workers abroad send their income home with no hefty commissions",
  },
  {
    id: "college",
    label: "College Fee",
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 62">
        <path fill="#0b2b03" d="M57.03,4.72l-5.51,5.51-5.51-5.51-5.51,5.51-5.51-5.51-5.51,5.51-5.51-5.51-4.97,4.97v40.42c0,3.95,3.21,7.16,7.16,7.16h28.68c3.95,0,7.16-3.21,7.16-7.16V9.69l-4.97-4.97ZM50.45,34.76c1.21,0,2.18,1.1,2.18,2.46,0,.19-.02.37-.06.55h-1.09c.04-.18.06-.36.06-.55,0-1.08-.62-1.98-1.47-2.31l-1.3.63v4.89c-1.87,1.11-4.87,1.84-8.26,1.84s-6.39-.73-8.26-1.84v-5.11l-5.09-2.58,13.31-6.46,13.38,6.8-3.5,1.7s.06,0,.1,0Z"/>
      </svg>
    ),
    amount: "6,000",
    button: "Pay your bills",
    image: "/images/cards/card-college.jpg",
    description: "Switch to simpler expense management built for students and international scholars",
    isCenter: true,
  },
  {
    id: "ott",
    label: "OTT Plan",
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 62">
        <path fill="#0b2b03" d="M54.8,10.37h-28.61c-2.04,0-3.7,1.66-3.7,3.7v11.05c0,2.04,1.66,3.7,3.7,3.7h8.59v-1.19c0-2.32,1.89-4.21,4.22-4.21s4.31,1.91,4.31,4.26v1.15h11.49c2.04,0,3.7-1.66,3.7-3.7v-11.05c0-2.04-1.66-3.7-3.7-3.7Z"/>
        <path fill="#0b2b03" d="M53.95,40.28c0-1.36-1.1-2.46-2.46-2.46-.65,0-1.24.25-1.68.66-.26-1.08-1.23-1.89-2.39-1.89-.69,0-1.31.28-1.75.73-.23-1.12-1.22-1.96-2.41-1.96-.66,0-1.26.26-1.70.69v-8.35h0s0-.03,0-.05c0-1.38-1.12-2.51-2.51-2.51,0,0-.02,0-.02,0,0,0-.02,0-.02,0-1.36,0-2.46,1.10-2.46,2.46,0,0,0,.02,0,.02,0,0,0,.02,0,.02,0,.02,0,.03,0,.05h0v12c-.44-.53-2.42-2.61-5.27-1.69l5.58,12.08s.05.10.05.10c.42.85,1.30,1.44,2.32,1.44h12.14c1.43,0,2.59-1.16,2.59-2.59v-8.45c0-.05,0-.11,0-.16,0-.05,0-.10,0-.16Z"/>
      </svg>
    ),
    amount: "1,000",
    button: "Manage subscriptions",
    image: "/images/cards/card-ott.jpg",
    description: "Get assured cashbacks every time you Jaldipay. Save big even if you don't have a credit card",
  },
];

export default function FeatureCardsNew() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="features" className="relative bg-[#0b2b03] pt-[60px] pb-[200px] px-[50px]">
      {/* Section Header */}
      <div className="mx-auto max-w-[1400px] text-center mb-12">
        <h2 className="text-2xl font-extralight text-white md:text-4xl lg:text-[43.2px]">
          Join millions of customers
          <br />
          worldwide and in Bangladesh
        </h2>
        <p className="mt-4 text-[16.2px] font-normal text-white/80">
          Send money easily, spend smartly and save big
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[1050px]">
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
                    className={`object-cover transition-all duration-500 ${isActive ? "contrast-[1.15] brightness-[1.05]" : ""}`}
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
                        <TakaSymbol />
                        {card.amount}
                      </p>
                      <button
                        className={`mt-3 w-full rounded-lg py-2 transition-all duration-500 ${
                          isActive
                            ? "bg-[#0b2b03] text-[15.3px] font-medium text-white border-[0.5px] border-white"
                            : "text-[13.5px] font-medium border-[0.5px] border-white text-white hover:bg-white/10"
                        }`}
                      >
                        {card.button}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description - visible on hover */}
                <p
                  className={`mt-3 max-w-[280px] text-center text-[11px] text-[#4dff00] transition-all duration-300 absolute bottom-[-50px] ${
                    isActive ? "opacity-100 bottom-[-55px]" : "opacity-0"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
