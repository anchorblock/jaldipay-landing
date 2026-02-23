"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
          <label className="block text-[10px] font-medium text-white/80 mb-0.5">From</label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Your account"
            className="w-full border-none bg-transparent px-0 py-1 text-[12.96px] text-white placeholder-white/60 focus:outline-none focus:text-[#c8ffc0]"
          />
        </div>

        {/* To */}
        <div className="flex-1 min-w-0">
          <label className="block text-[10px] font-medium text-white/80 mb-0.5">To</label>
          <input
            type="text"
            placeholder="Recipient"
            className="w-full border-none bg-transparent px-0 py-1 text-[12.96px] text-white placeholder-white/60 focus:outline-none focus:text-[#c8ffc0]"
          />
        </div>

        {/* Amount */}
        <div className="flex-1 min-w-0">
          <label className="block text-[10px] font-medium text-white/80 mb-0.5">Amount</label>
          <input
            type="text"
            placeholder="৳ 0.00"
            className="w-full border-none bg-transparent px-0 py-1 text-[12.96px] text-white placeholder-white/60 focus:outline-none focus:text-[#c8ffc0]"
          />
        </div>

        {/* Transfer Button */}
        <button className="shrink-0 rounded-lg bg-[#0b2b03] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0b2b03]/80">
          Transfer
        </button>

        {/* Sign Up Text */}
        <span className="hidden md:inline text-[11px] text-white/70 whitespace-nowrap">
          First time user?{" "}
          <Link href="/signup" className="text-white underline hover:no-underline">
            Sign up
          </Link>
        </span>

        {/* Close */}
        <button
          onClick={onClose}
          className="shrink-0 p-1 text-white/80 transition-colors hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
