"use client";

import { useState, useEffect, useCallback } from "react";

const CURRENCIES: Record<string, { name: string; symbol: string }> = {
  USD: { name: "US Dollar", symbol: "$" },
  AED: { name: "UAE Dirham", symbol: "د.إ" },
  AUD: { name: "Australian Dollar", symbol: "A$" },
  BDT: { name: "Bangladeshi Taka", symbol: "৳" },
  CAD: { name: "Canadian Dollar", symbol: "C$" },
  EUR: { name: "Euro", symbol: "€" },
  GBP: { name: "British Pound", symbol: "£" },
  INR: { name: "Indian Rupee", symbol: "₹" },
  MYR: { name: "Malaysian Ringgit", symbol: "RM" },
  PKR: { name: "Pakistani Rupee", symbol: "₨" },
  SAR: { name: "Saudi Riyal", symbol: "﷼" },
  SGD: { name: "Singapore Dollar", symbol: "S$" },
};

const BANK_MARGIN = 0.035;

export default function ExchangeCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AED");
  const [sendAmount, setSendAmount] = useState(1000);
  const [exchangeRate, setExchangeRate] = useState(3.6725);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRate = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await res.json();
      if (data.rates?.[toCurrency]) {
        setExchangeRate(data.rates[toCurrency]);
        setLastUpdated(new Date());
      }
    } catch {
      console.error("Failed to fetch rate");
    } finally {
      setIsLoading(false);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency, fetchRate]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      if (scrolled && isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const receiveAmount = sendAmount * exchangeRate;
  const bankRate = exchangeRate * (1 - BANK_MARGIN);
  const bankAmount = sendAmount * bankRate;
  const savings = receiveAmount - bankAmount;

  const formatNum = (n: number, d = 2) =>
    n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

  return (
    <>
      {/* FAB Button */}
      <div
        className={`floating-widget group fixed bottom-[60px] z-[901] ${
          isScrolled ? "scrolled" : ""
        }`}
        style={{ right: isScrolled ? undefined : "80px" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex h-[42px] w-[42px] items-center justify-center rounded-full shadow-[0_4px_16px_rgba(38,219,0,0.4)] transition-all hover:shadow-[0_6px_24px_rgba(38,219,0,0.5)] hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #26db00 0%, #1fa600 100%)" }}
        >
          {/* Animated arrows with dollar/taka crossfade */}
          <svg className="h-7 w-7" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g className="animate-arrows-spin" style={{ transformOrigin: "center" }}>
              <path d="M48.91,141.41l-.55,18.07-17.52,2.19" fill="none" stroke="#3cfa0c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M45.01,154.99c-30.37-30.37-30.37-79.61,0-109.98,25.62-25.62,64.66-29.63,94.48-12.02" fill="none" stroke="#3cfa0c" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="33.33"/>
              <path d="M151.09,58.59l.55-18.07,17.52-2.19" fill="none" stroke="#3cfa0c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M154.99,45.01c30.37,30.37,30.37,79.61,0,109.98-25.62,25.62-64.66,29.63-94.48,12.02" fill="none" stroke="#3cfa0c" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="33.33"/>
            </g>
            <path className="animate-symbol-dollar" d="M104.17,54.17v8.33c10,2.5,16.67,9.17,16.67,17.5h-10.83c0-4.17-3.33-7.5-9.17-7.5s-9.17,2.5-9.17,6.67c0,3.33,2.5,5,10.83,7.5,10.83,3.33,19.17,7.5,19.17,19.17,0,9.17-7.5,15.83-17.5,17.5v10h-8.33v-10c-10-1.67-17.5-9.17-17.5-19.17h10.83c0,5.83,4.17,9.17,10.83,9.17s10.83-2.5,10.83-7.5c0-4.17-3.33-5.83-11.67-8.33-10-3.33-18.33-8.33-18.33-18.33,0-9.17,7.5-15,15-16.67v-8.33h8.33Z" fill="#fff"/>
            <g className="animate-symbol-taka" transform="translate(100,100) scale(0.85) translate(-97,-101)">
              <path d="M126.87,105.71c0-.05,0-.11,0-.16-.02-1.89-.12-3.06-.48-4.26-2.03-9.18-10.21-15.47-19.98-16.05-5.12-.3-9.41.73-9.41.73v10.09l1.81-.47c1.34-.35,2.81-.53,4.35-.53,2.67,0,5.08.6,7.19,1.78,2.05,1.15,5.41,4.06,5.79,10.6.17,2.95-.44,5.57-1.32,7.81-.1.25-.21.5-.33.76,0,0,0,.02-.01.03h0c-1.97,4.31-5.86,6.98-10.15,6.98-3.95,0-7.56-2.26-9.67-6.04l-.14-.23-.14-.13c-1.05-2.06-1.65-4.63-1.78-7.58v-30.09h26.51v-9.48h-26.51v-15.29h-19.45v9.48h8.56v5.81h-8.56v9.48h8.56v30.64s.04.02.04.02c.21,4.44,1.25,8.41,3.1,11.83,2.12,3.92,5.1,6.99,8.85,9.13.57.32,1.09.61,1.67.91l.24.13c1.82.92,3.61,1.57,6.46,1.72.2.01.41.02.6.01h.41c.16.01.32.02.48.02,1.84,0,3.63-.25,5.29-.73,2.05-.54,4.08-1.38,6.04-2.5,3.75-2.14,6.73-5.21,8.85-9.13,2.09-3.87,3.15-8.43,3.15-13.54,0-.58,0-1.09,0-1.57,0-.05,0-.1,0-.16Z" fill="#fff"/>
            </g>
          </svg>
        </button>

        {/* Label */}
        <span className="mt-1 block text-center text-[9px] text-[#26db00] font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none leading-[1.2] whitespace-nowrap">
          Exchange Rate
          <br />
          Calculator
        </span>
      </div>

      {/* Expanded Calculator Panel */}
      {isOpen && (
        <div className="fixed top-[220px] right-[50px] z-[902] w-[460px] max-w-[calc(100vw-24px)] rounded-2xl bg-white/98 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-[20px]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <h3 className="text-sm font-semibold text-gray-900">
              Exchange Rate Calculator
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Rate Display Band */}
          <div className="mx-4 rounded-lg bg-[#26db00] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-white" />
                <span className="text-sm font-medium text-white">
                  1 {fromCurrency} = {formatNum(exchangeRate, 4)} {toCurrency}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Currency Selects */}
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="rounded bg-white/20 border-none px-2 py-1 text-xs text-white focus:ring-0"
                >
                  {Object.keys(CURRENCIES).map((c) => (
                    <option key={c} value={c} className="text-black">{c}</option>
                  ))}
                </select>
                <span className="text-white/70">→</span>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="rounded bg-white/20 border-none px-2 py-1 text-xs text-white focus:ring-0"
                >
                  {Object.keys(CURRENCIES).map((c) => (
                    <option key={c} value={c} className="text-black">{c}</option>
                  ))}
                </select>
              </div>
            </div>
            {lastUpdated && (
              <p className="mt-1 text-[10px] text-white/60">
                Updated {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>

          {/* Amount Inputs */}
          <div className="px-5 py-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  SEND
                </label>
                <input
                  type="number"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(Number(e.target.value) || 0)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-lg font-semibold text-gray-900 focus:border-[#26db00] focus:outline-none focus:ring-1 focus:ring-[#26db00]"
                />
                <span className="mt-1 block text-[10px] text-gray-400">{fromCurrency}</span>
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  RECEIVE
                </label>
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
                  <span className="text-lg font-semibold text-gray-900">
                    {formatNum(receiveAmount, 0)}
                  </span>
                </div>
                <span className="mt-1 block text-[10px] text-gray-400">{toCurrency}</span>
              </div>
            </div>
          </div>

          {/* Savings Result */}
          {sendAmount > 0 && (
            <div className="mx-4 mb-4 rounded-lg bg-[#0b2b03] px-4 py-3">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#26db00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-white">
                  You save {formatNum(savings, 0)} {toCurrency}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-[11px]">
                <span className="text-white/40 line-through">
                  Bank Rate: {formatNum(bankRate, 4)}
                </span>
                <span className="text-[#26db00] font-medium">
                  JaldiPay: {formatNum(exchangeRate, 4)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
