"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 w-full py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#0A3700]">
                Jaldi Pa<span className="text-[#9EE86F]">y</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#0A3700] transition"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-[#0A3700] transition"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium text-gray-600 hover:text-[#0A3700] transition"
            >
              Terms
            </Link>
          </nav>

          {/* Get Started button */}
          <div className="flex items-center gap-4">
            <a
              href="https://cal.com/shatil-ab/30min"
              className="btn-cta-primary"
            >
              Get Started
              <svg
                className="btn-arrow w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-[#0A3700] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 hover:text-[#0A3700] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-gray-600 hover:text-[#0A3700] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
