"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 py-[25px] shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-[35px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-[50px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/jaldipay-logo.svg"
            alt="JaldiPay"
            width={isScrolled ? 140 : 160}
            height={isScrolled ? 29 : 33}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center gap-[50px] absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14.4px] font-normal text-white/80 transition-colors hover:text-[#26db00]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Login */}
          <button className="p-2 text-white/70 transition-colors hover:text-[#26db00]">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          {/* Search */}
          <button className="p-2 text-white/70 transition-colors hover:text-[#26db00]">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70vw] bg-black/95 backdrop-blur-lg transform transition-transform duration-300 md:hidden z-[1001] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="p-2 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-6 px-8 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-white/80 transition-colors hover:text-[#26db00]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-[999]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
