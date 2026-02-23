"use client";

import { useRef, useEffect } from "react";

export default function CardVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return;

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }

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
    <section ref={sectionRef} className="relative h-[400px] overflow-hidden bg-[#0b2b03]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b03] via-[#0b2b03] to-transparent z-[1]" />

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 42%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 42%)",
        }}
      >
        <source src="/videos/card-section.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="pl-[100px] pr-[50px]">
          <h2 className="text-2xl font-extralight text-white md:text-4xl">
            Find the JaldiPay card
            <br />
            that&apos;s right for you
          </h2>
          <button className="mt-6 rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#26db00] hover:border-[#26db00]">
            Get a card
          </button>
        </div>
      </div>
    </section>
  );
}
