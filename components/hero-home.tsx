"use client";

import { useState, useCallback, useEffect } from "react";

// Currency data with flags and default rates
const CURRENCIES = {
  // Source currencies
  USD: { flag: "🇺🇸", name: "US Dollar", symbol: "$" },
  EUR: { flag: "🇪🇺", name: "Euro", symbol: "€" },
  GBP: { flag: "🇬🇧", name: "British Pound", symbol: "£" },
  // Destination currencies - Middle East
  AED: { flag: "🇦🇪", name: "UAE Dirham", symbol: "د.إ" },
  SAR: { flag: "🇸🇦", name: "Saudi Riyal", symbol: "﷼" },
  QAR: { flag: "🇶🇦", name: "Qatari Riyal", symbol: "﷼" },
  KWD: { flag: "🇰🇼", name: "Kuwaiti Dinar", symbol: "د.ك" },
  // Destination currencies - Southeast Asia
  SGD: { flag: "🇸🇬", name: "Singapore Dollar", symbol: "S$" },
  MYR: { flag: "🇲🇾", name: "Malaysian Ringgit", symbol: "RM" },
  IDR: { flag: "🇮🇩", name: "Indonesian Rupiah", symbol: "Rp" },
  // Destination currencies - South Asia
  BDT: { flag: "🇧🇩", name: "Bangladeshi Taka", symbol: "৳" },
  INR: { flag: "🇮🇳", name: "Indian Rupee", symbol: "₹" },
};

// Simulated bank rates (typically 3-5% worse than market rate)
const BANK_MARGIN = 0.035; // 3.5% margin

const SOURCE_CURRENCIES = ["USD", "EUR", "GBP"] as const;
const DEST_CURRENCIES = ["AED", "SAR", "QAR", "KWD", "SGD", "MYR", "IDR", "BDT", "INR"] as const;

type CurrencyCode = keyof typeof CURRENCIES;

export default function HeroHome() {
  const [sendAmount, setSendAmount] = useState<number>(1000);
  const [sourceCurrency, setSourceCurrency] = useState<CurrencyCode>("USD");
  const [destCurrency, setDestCurrency] = useState<CurrencyCode>("AED");
  const [exchangeRate, setExchangeRate] = useState<number>(3.67);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rateJustUpdated, setRateJustUpdated] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchExchangeRate = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${sourceCurrency}`);
      const data = await response.json();
      if (data.rates?.[destCurrency]) {
        const newRate = data.rates[destCurrency];
        setExchangeRate(newRate);
        setLastUpdated(new Date());

        // Trigger flash animation
        setRateJustUpdated(true);
        setTimeout(() => setRateJustUpdated(false), 1000);
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
    } finally {
      setIsLoading(false);
    }
  }, [sourceCurrency, destCurrency]);

  // Fetch rate on currency change
  useEffect(() => {
    fetchExchangeRate();
  }, [sourceCurrency, destCurrency, fetchExchangeRate]);

  const recipientAmount = sendAmount * exchangeRate;
  const bankRate = exchangeRate * (1 - BANK_MARGIN);
  const bankAmount = sendAmount * bankRate;
  const savings = recipientAmount - bankAmount;

  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setSendAmount(numValue);
    } else if (value === "") {
      setSendAmount(0);
    }
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9EE86F]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#9EE86F]/15 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[#0A3700]/10 rounded-full blur-2xl animate-float-fast"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Left content */}
            <div>
              <h1
                className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                data-aos="fade-up"
              >
                <span className="text-[#0A3700]">SEND MONEY</span>
                <br />
                <span className="bg-gradient-to-r from-[#0A3700] via-[#9EE86F] to-[#0A3700] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                  GLOBALLY
                </span>
                <br />
                <span className="text-[#0A3700]">FOR LESS</span>
              </h1>
              <p
                className="mt-6 text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Move your money where it matters. Save on international transfers across 50+ countries, without any hidden fees.
              </p>
              <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay={400}>
                <a
                  href="https://cal.com/shatil-ab/30min"
                  className="btn-cta-primary btn-cta-glow px-8 py-4 text-base"
                >
                  Get Started
                  <svg
                    className="btn-arrow w-5 h-5"
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
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9EE86F]/20">
                    <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9EE86F]/20">
                    <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Licensed & Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9EE86F]/20">
                    <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Instant Transfers</span>
                </div>
              </div>

              {/* Supported corridors preview */}
              <div className="mt-8" data-aos="fade-up" data-aos-delay={600}>
                <p className="text-sm text-gray-500 mb-3">Popular destinations</p>
                <div className="flex flex-wrap gap-2">
                  {DEST_CURRENCIES.slice(0, 6).map((code) => (
                    <span
                      key={code}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm border border-gray-200 hover:border-[#9EE86F] hover:bg-[#9EE86F]/5 transition-colors cursor-default"
                    >
                      <span>{CURRENCIES[code].flag}</span>
                      <span className="text-gray-700">{code}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content - Interactive Corridor Selector */}
            <div
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg relative"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#0A3700]">Exchange Rate Calculator</h3>
                <span className="text-xs text-gray-500">
                  {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : "Select currencies"}
                </span>
              </div>

              {/* Currency selectors */}
              <div className="mb-4 grid grid-cols-2 gap-3">
                {/* Source currency */}
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500">From</label>
                  <div className="relative">
                    <select
                      value={sourceCurrency}
                      onChange={(e) => setSourceCurrency(e.target.value as CurrencyCode)}
                      className="w-full h-12 appearance-none rounded-lg border border-gray-200 bg-white pl-3 pr-10 text-base font-medium text-gray-800 focus:border-[#9EE86F] focus:outline-none focus:ring-1 focus:ring-[#9EE86F]"
                    >
                      {SOURCE_CURRENCIES.map((code) => (
                        <option key={code} value={code}>
                          {CURRENCIES[code].flag} {code}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Destination currency */}
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500">To</label>
                  <div className="relative">
                    <select
                      value={destCurrency}
                      onChange={(e) => setDestCurrency(e.target.value as CurrencyCode)}
                      className="w-full h-12 appearance-none rounded-lg border border-gray-200 bg-white pl-3 pr-10 text-base font-medium text-gray-800 focus:border-[#9EE86F] focus:outline-none focus:ring-1 focus:ring-[#9EE86F]"
                    >
                      {DEST_CURRENCIES.map((code) => (
                        <option key={code} value={code}>
                          {CURRENCIES[code].flag} {code}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchange rate display */}
              <div
                className={`mb-4 rounded-lg bg-[#9EE86F]/20 px-4 py-3 text-center transition-all duration-300 ${
                  rateJustUpdated ? "ring-2 ring-[#9EE86F] scale-[1.02]" : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2 text-[#0A3700]">
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Fetching rate...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    {lastUpdated && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                      </span>
                    )}
                    <span className="text-lg font-bold text-[#0A3700]">
                      1 {sourceCurrency} = {formatNumber(exchangeRate, 4)} {destCurrency}
                    </span>
                  </div>
                )}
              </div>

              {/* Amount converter */}
              <div className="mb-4 grid grid-cols-2 gap-3">
                {/* Send amount */}
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500">You send</label>
                  <div className="flex h-12 items-center justify-between rounded-lg border border-gray-200 px-3 transition-all focus-within:border-[#9EE86F] focus-within:ring-1 focus-within:ring-[#9EE86F]">
                    <input
                      type="text"
                      value={formatNumber(sendAmount, 0)}
                      onChange={handleAmountChange}
                      className="w-full min-w-0 text-lg font-semibold text-gray-800 bg-transparent border-none outline-none focus:ring-0 p-0"
                    />
                    <span className="ml-2 shrink-0 text-sm font-medium text-gray-500">{sourceCurrency}</span>
                  </div>
                </div>

                {/* Receive amount */}
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500">They receive</label>
                  <div className={`flex h-12 items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 transition-all duration-300 ${
                    rateJustUpdated ? "bg-[#9EE86F]/10" : ""
                  }`}>
                    <span className={`text-lg font-semibold truncate transition-all duration-300 ${
                      rateJustUpdated ? "text-[#0A3700]" : "text-gray-800"
                    }`}>
                      {formatNumber(recipientAmount, 0)}
                    </span>
                    <span className="ml-2 shrink-0 text-sm font-medium text-[#0A3700]">{destCurrency}</span>
                  </div>
                </div>
              </div>

              {/* Savings Comparison */}
              {sendAmount > 0 && (
                <div className="mb-4 rounded-lg border border-[#9EE86F]/50 bg-[#9EE86F]/10 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-[#0A3700]">
                      You save {formatNumber(savings, 0)} {destCurrency}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="line-through text-gray-400">Bank rate: {formatNumber(bankRate, 4)}</span>
                    <span className="mx-2">•</span>
                    <span className="text-[#0A3700] font-medium">JaldiPay: {formatNumber(exchangeRate, 4)}</span>
                  </div>
                </div>
              )}

              {/* Refresh button */}
              <button
                onClick={fetchExchangeRate}
                disabled={isLoading}
                className="btn-cta-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                <svg
                  className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                {isLoading ? "Fetching..." : "Get Live Rate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
