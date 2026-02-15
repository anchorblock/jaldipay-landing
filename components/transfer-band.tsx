"use client";

import { useEffect, useRef } from "react";

interface TransferBandProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransferBand({ isOpen, onClose }: TransferBandProps) {
  const bandRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 500);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (bandRef.current && !bandRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={bandRef}
      className={`transfer-band mt-6 rounded-full bg-gradient-to-r from-[#26db00] to-[#1fa600] ${
        isOpen ? "active" : ""
      }`}
      style={{ minWidth: isOpen ? "min(1000px, 90vw)" : 0 }}
    >
      <div className="flex items-center gap-3 px-6 py-3 md:gap-4 md:px-8 md:py-4">
        {/* From */}
        <div className="flex-1 min-w-0">
          <input
            ref={inputRef}
            type="text"
            placeholder="From (Account)"
            className="w-full rounded-lg border-none bg-white/20 px-3 py-2 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* To */}
        <div className="flex-1 min-w-0">
          <input
            type="text"
            placeholder="To (Recipient)"
            className="w-full rounded-lg border-none bg-white/20 px-3 py-2 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* Amount */}
        <div className="flex-1 min-w-0">
          <input
            type="text"
            placeholder="Amount (BDT)"
            className="w-full rounded-lg border-none bg-white/20 px-3 py-2 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* Transfer Button */}
        <button className="shrink-0 rounded-lg bg-[#0b2b03] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0b2b03]/80">
          Transfer
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="shrink-0 p-1 text-white/80 transition-colors hover:text-white"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
