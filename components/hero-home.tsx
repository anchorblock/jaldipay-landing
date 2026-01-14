"use client";

import { useState, useCallback } from "react";
import ExchangeRateChart from "./exchange-rate-chart";

export default function HeroHome() {
  const [sendAmount, setSendAmount] = useState<number>(1000);
  const [exchangeRate, setExchangeRate] = useState<number>(122.2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rateJustUpdated, setRateJustUpdated] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchExchangeRate = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await response.json();
      if (data.rates?.BDT) {
        const newRate = data.rates.BDT;
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
  }, []);

  const recipientAmount = sendAmount * exchangeRate;

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
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Left content */}
            <div>
              <h1
                className="text-4xl font-bold tracking-tight text-[#0A3700] md:text-5xl lg:text-6xl"
                data-aos="fade-up"
              >
                SEND MONEY
                <br />
                GLOBALLY
                <br />
                FOR LESS
              </h1>
              <p
                className="mt-6 text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Move your money where it matters. Save on international transfer in over 50 currencies, without any hidden fees.
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay={400}>
                <a
                  href="https://cal.com/shatil-ab/30min"
                  className="inline-flex items-center rounded-full bg-[#0A3700] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0A3700]/90"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right content - Combined Exchange Rate Card */}
            <div
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#0A3700]">USD to BDT Exchange Rate</h3>
                <span className="text-xs text-gray-500">
                  {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : "Default rate"}
                </span>
              </div>

              {/* Exchange rate display */}
              <div
                className={`mb-5 rounded-lg bg-[#9EE86F]/20 px-4 py-4 text-center transition-all duration-300 ${
                  rateJustUpdated ? "ring-2 ring-[#9EE86F] scale-[1.02]" : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2 text-[#0A3700]">
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Fetching live rate...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    {lastUpdated && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                      </span>
                    )}
                    <span className="text-xl font-bold text-[#0A3700]">1 USD = {formatNumber(exchangeRate, 3)} BDT</span>
                  </div>
                )}
              </div>

              {/* Currency converter */}
              <div className="mb-5 grid grid-cols-2 gap-3">
                {/* USD input */}
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500">You send</label>
                  <div className="flex h-12 items-center justify-between rounded-lg border border-gray-200 px-3 transition-all focus-within:border-[#9EE86F] focus-within:ring-1 focus-within:ring-[#9EE86F]">
                    <input
                      type="text"
                      value={formatNumber(sendAmount, 0)}
                      onChange={handleAmountChange}
                      className="w-full min-w-0 text-lg font-semibold text-gray-800 bg-transparent border-none outline-none focus:ring-0 p-0"
                    />
                    <span className="ml-2 shrink-0 text-sm font-medium text-gray-500">USD</span>
                  </div>
                </div>

                {/* BDT output */}
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
                    <span className="ml-2 shrink-0 text-sm font-medium text-[#0A3700]">BDT</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-5 border-t border-gray-100 pt-5">
                <ExchangeRateChart />
              </div>

              {/* Refresh button */}
              <button
                onClick={fetchExchangeRate}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0A3700] py-3 text-sm font-medium text-white transition hover:bg-[#0A3700]/90 disabled:opacity-50"
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
                {isLoading ? "Fetching Live Rate..." : "Refresh Exchange Rate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
