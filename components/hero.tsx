"use client";

import { useState, useRef, useEffect } from "react";
import TransferBand from "./transfer-band";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showTransferBand, setShowTransferBand] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
        style={{ objectPosition: "center 35%" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-20 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <h1
            className="text-3xl font-thin leading-[1.2] text-white md:text-5xl lg:text-[64.8px]"
            style={{ textShadow: "2px 2px 20px rgba(0, 0, 0, 0.5)" }}
          >
            Change the way
            <br />
            you transfer money
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Download the App */}
            <button className="rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black md:px-8 md:py-4 md:text-base">
              Download the App
            </button>

            {/* Transfer Money */}
            <button
              onClick={() => setShowTransferBand(true)}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-[#26db00] hover:text-white md:px-8 md:py-4 md:text-base"
            >
              Transfer Money
            </button>
          </div>

          {/* Transfer Band */}
          <TransferBand
            isOpen={showTransferBand}
            onClose={() => setShowTransferBand(false)}
          />
        </div>
      </div>
    </section>
  );
}
