"use client";

import { useState } from "react";

type TableKey = "upgrade" | "traditional" | "mfs";

const tableData: Record<
  TableKey,
  { headers: [string, string]; rows: { left: string; right: string; highlight: boolean }[] }
> = {
  upgrade: {
    headers: ["Traditional Rails", "Stablecoin Rails"],
    rows: [
      { left: "2-5 days settlement", right: "30 seconds settlement", highlight: false },
      { left: "5-7% remittance fees", right: "<1% fees", highlight: true },
      { left: "Bank hours only", right: "24/7/365", highlight: false },
      { left: "Requires bank accounts", right: "Works with phones", highlight: false },
      { left: "Complex compliance", right: "Programmable compliance", highlight: false },
    ],
  },
  traditional: {
    headers: ["Traditional Remittance", "JaldiPay"],
    rows: [
      { left: "High transfer fees (5-7%)", right: "Near-zero fees (<1%)", highlight: true },
      { left: "3-5 business days", right: "Seconds to minutes", highlight: false },
      { left: "Bank branch visits required", right: "Send from your phone", highlight: false },
      { left: "Limited operating hours", right: "24/7 availability", highlight: false },
      { left: "Hidden exchange rate markups", right: "Transparent mid-market rates", highlight: true },
    ],
  },
  mfs: {
    headers: ["MFS & Fintech", "JaldiPay"],
    rows: [
      { left: "2-3% transfer fees", right: "<1% fees", highlight: true },
      { left: "Limited to local corridors", right: "50+ countries worldwide", highlight: false },
      { left: "Requires credit card", right: "Works without credit card", highlight: false },
      { left: "No crypto on-ramp", right: "Built-in stablecoin rails", highlight: true },
      { left: "Basic compliance", right: "Programmable compliance", highlight: false },
    ],
  },
};

const buttons: { key: TableKey; label: string }[] = [
  { key: "upgrade", label: "See the Upgrade" },
  { key: "traditional", label: "Compare Traditional Remittance" },
  { key: "mfs", label: "Compare MFS & Fintech" },
];

const statItems = [
  {
    title: "Send Crypto, Receive Local Currency",
    desc: "Seamless conversion between stablecoins and local fiat currencies",
  },
  {
    title: "Deposit through Multiple Methods",
    desc: "Bank transfer, cards, mobile money, and crypto wallets",
  },
  {
    title: "Get tax benefits for transfers",
    desc: "Transparent records for tax reporting and compliance",
  },
  {
    title: "24/7 Global Availability",
    desc: "Send and receive money anytime, anywhere in the world",
  },
];

export default function StablecoinBand() {
  const [activeTable, setActiveTable] = useState<TableKey | null>(null);
  const [showCryptoModal, setShowCryptoModal] = useState(false);

  const toggleTable = (key: TableKey) => {
    setActiveTable(activeTable === key ? null : key);
  };

  return (
    <section className="bg-[#0b2b03] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extralight text-white md:text-4xl lg:text-[43.2px]">
            Jaldipay uses Stablecoin
            <br />
            payment rails
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            Stablecoins are digital dollars and transfer money at the lowest cost on average.
            They settle in seconds, work 24/7, and cost fractions of a taka per transaction.
            You could get up to 2.7% more on Jaldipay.*
          </p>

          {/* Crypto Disclosure */}
          <button
            onClick={() => setShowCryptoModal(true)}
            className="mt-4 flex items-center gap-2 text-xs text-[#26db00]/70 transition-colors hover:text-[#26db00]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Crypto Disclosure
          </button>
        </div>

        {/* Comparison Table Buttons */}
        <div className="mt-10 flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => toggleTable(btn.key)}
              className={`rounded-full px-5 py-2.5 text-xs font-medium transition-all ${
                activeTable === btn.key
                  ? "bg-[#26db00] text-white"
                  : "border border-white/20 text-white/60 hover:border-[#26db00]/50 hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div
          className={`comparison-table mt-4 ${activeTable ? "open" : ""}`}
        >
          {activeTable && (
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 font-medium text-white/50">
                      {tableData[activeTable].headers[0]}
                    </th>
                    <th className="px-4 py-3 font-medium text-[#26db00]">
                      {tableData[activeTable].headers[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData[activeTable].rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="px-4 py-3 text-white/50">{row.left}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.highlight
                            ? "bg-[#26db00]/10 font-medium text-[#26db00]"
                            : "text-white/70"
                        }`}
                      >
                        {row.right}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statItems.map((item) => (
            <div key={item.title} className="border-l border-[#26db00]/30 pl-4">
              <h4 className="text-sm font-medium text-white">{item.title}</h4>
              <p className="mt-1 text-xs text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Crypto Disclosure Modal */}
      {showCryptoModal && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowCryptoModal(false)}
        >
          <div
            className="mx-4 max-w-lg rounded-2xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Crypto Disclosure
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              JaldiPay uses stablecoin technology (USDC/USDT) as payment rails for international money transfers.
              Stablecoins are digital currencies pegged 1:1 to the US dollar.
              Users are not required to hold, buy, or manage any cryptocurrency.
              All conversions happen automatically behind the scenes.
              JaldiPay is not an investment platform and does not offer cryptocurrency trading services.
              Transfer rates and fees may vary based on corridor, amount, and payment method.
            </p>
            <button
              onClick={() => setShowCryptoModal(false)}
              className="mt-6 rounded-lg bg-[#26db00] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1fa600]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
