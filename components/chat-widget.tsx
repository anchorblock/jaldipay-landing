"use client";

import { useState, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if (window.scrollY > 100 && isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* FAB Button */}
      <div
        className={`floating-widget fixed bottom-[60px] z-[899] ${
          isScrolled ? "scrolled" : ""
        }`}
        style={{ right: isScrolled ? undefined : "132px" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#0b2b03] shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
        >
          <svg className="h-5 w-5 text-[#26db00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <span className="mt-1 block text-center text-[9px] text-white/50">
          Chat
        </span>
      </div>

      {/* Expanded Chat Panel */}
      {isOpen && (
        <div className="fixed top-[220px] right-[50px] z-[900] w-[460px] max-w-[calc(100vw-24px)] rounded-2xl bg-white/98 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-[20px]">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-[#0b2b03] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26db00]">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white">JaldiPay Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/60 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[180px] overflow-y-auto p-5">
            <div className="inline-block max-w-[80%] rounded-xl rounded-tl-sm bg-[#9eeb8e] px-4 py-3">
              <p className="text-sm text-[#0b2b03]">
                Welcome to JaldiPay! 👋 How can we help you today?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#26db00] focus:outline-none focus:ring-1 focus:ring-[#26db00]"
              />
              <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#26db00] text-white transition-colors hover:bg-[#1fa600]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
