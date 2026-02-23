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
    title: "Send Crypto\nReceive Local Currency",
    desc: "Enter the world of future payments. Hassle-free sending via trusted remittance operators.",
  },
  {
    title: "Deposit through\nMultiple Methods",
    desc: "Choose what suits you. Bank transfer, cards and digital wallets or currency recipients",
  },
  {
    title: "Get tax benefits\nfor transfers",
    desc: "Stablecoin rails bring informal remittance flows into transparent formal system",
  },
  {
    title: "Build\nForex Reserve",
    desc: "For Bangladesh, Stablecoins solve structural problem of limited USD reserves",
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
            <span className="text-white">Stablecoins are digital dollars and transfer money at the lowest cost on average.</span>{" "}
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
        <div className="mt-10 flex flex-col gap-2">
          {buttons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => toggleTable(btn.key)}
              className={`text-left text-sm transition-all flex items-center gap-2 ${
                activeTable === btn.key
                  ? "text-[#26db00]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {btn.label} <span className="text-lg">›</span>
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
              <h4 className="text-sm font-medium text-white whitespace-pre-line">{item.title}</h4>
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
            className="mx-4 max-w-lg rounded-2xl bg-[#0b2b03] p-8 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Crypto Disclosure
              </h3>
              <button
                onClick={() => setShowCryptoModal(false)}
                className="text-white/50 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              JaldiPay facilitates transactions using stablecoin payment rails. Stablecoins are digital assets pegged to fiat currencies. Cryptocurrency values can fluctuate. The 2.7% savings estimate is based on average comparisons with traditional remittance providers and may vary depending on transaction size, corridor, and market conditions. Past performance does not guarantee future results. Users should conduct their own research before engaging in any cryptocurrency transactions. JaldiPay is not a licensed financial advisor. Please consult with qualified professionals for financial advice.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
