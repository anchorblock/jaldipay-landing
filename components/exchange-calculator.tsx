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
        className={`floating-widget fixed bottom-[60px] z-[901] ${
          isScrolled ? "scrolled" : ""
        }`}
        style={{ right: isScrolled ? undefined : "80px" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex h-[42px] w-[42px] items-center justify-center rounded-full shadow-[0_4px_16px_rgba(38,219,0,0.4)] transition-all hover:shadow-[0_6px_24px_rgba(38,219,0,0.5)] hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #26db00 0%, #1fa600 100%)" }}
        >
          {/* Rotating arrows icon */}
          <svg className="h-5 w-5 text-white animate-arrows-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>

        {/* Label */}
        <span className="mt-1 block text-center text-[9px] text-white/50">
          Exchange
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
