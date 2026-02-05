"use client";

const destinations = [
  { code: "AED", symbol: "د.إ", flag: "🇦🇪", name: "UAE" },
  { code: "SAR", symbol: "﷼", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "QAR", symbol: "﷼", flag: "🇶🇦", name: "Qatar" },
  { code: "KWD", symbol: "د.ك", flag: "🇰🇼", name: "Kuwait" },
  { code: "SGD", symbol: "S$", flag: "🇸🇬", name: "Singapore" },
  { code: "MYR", symbol: "RM", flag: "🇲🇾", name: "Malaysia" },
  { code: "IDR", symbol: "Rp", flag: "🇮🇩", name: "Indonesia" },
  { code: "BDT", symbol: "৳", flag: "🇧🇩", name: "Bangladesh" },
  { code: "INR", symbol: "₹", flag: "🇮🇳", name: "India" },
  { code: "PKR", symbol: "₨", flag: "🇵🇰", name: "Pakistan" },
  { code: "PHP", symbol: "₱", flag: "🇵🇭", name: "Philippines" },
  { code: "THB", symbol: "฿", flag: "🇹🇭", name: "Thailand" },
  { code: "VND", symbol: "₫", flag: "🇻🇳", name: "Vietnam" },
  { code: "EGP", symbol: "£", flag: "🇪🇬", name: "Egypt" },
  { code: "NPR", symbol: "₨", flag: "🇳🇵", name: "Nepal" },
  { code: "LKR", symbol: "Rs", flag: "🇱🇰", name: "Sri Lanka" },
];

export default function CurrencyMarquee() {
  // Double the array for seamless infinite scroll
  const doubledDestinations = [...destinations, ...destinations];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#9EE86F]/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0A3700]/60 uppercase tracking-[0.2em] mb-3">
            Global Reach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Send money to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3700] via-[#1a6b00] to-[#9EE86F] animate-gradient-x bg-[length:200%_auto]">
              50+ countries
            </span>{" "}
            worldwide
          </h2>
        </div>
      </div>

      <div className="relative marquee-fade">
        <div className="flex animate-marquee gap-5 py-4">
          {doubledDestinations.map((dest, index) => (
            <div
              key={`${dest.code}-${index}`}
              className="group relative flex flex-col items-center justify-center w-[140px] h-[160px] shrink-0 cursor-default"
            >
              {/* Glassmorphism card background */}
              <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_48px_rgba(158,232,111,0.15)] group-hover:border-[#9EE86F]/30 transition-all duration-500 group-hover:scale-[1.02]" />

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-[#9EE86F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content container */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Currency Symbol with circular gradient background */}
                <div className="relative mb-3">
                  {/* Gradient circle backdrop */}
                  <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-[#0A3700] via-[#145a00] to-[#9EE86F] opacity-10 group-hover:opacity-20 blur-sm transition-all duration-500 group-hover:scale-110" />
                  <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0A3700]/5 to-[#9EE86F]/10 group-hover:from-[#0A3700]/10 group-hover:to-[#9EE86F]/20 transition-all duration-500">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0A3700] to-[#1a6b00] group-hover:from-[#0A3700] group-hover:to-[#9EE86F] transition-all duration-500 group-hover:scale-110">
                      {dest.symbol}
                    </span>
                  </div>
                </div>

                {/* Flag and Country */}
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {dest.flag}
                  </span>
                  <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {dest.code}
                  </span>
                </div>

                {/* Country Name */}
                <span className="text-[11px] text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                  {dest.name}
                </span>
              </div>

              {/* Decorative glow ring on hover */}
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#9EE86F]/0 via-[#9EE86F]/20 to-[#9EE86F]/0 blur-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Hover instruction */}
      <div className="mt-10 flex justify-center">
        <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9EE86F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9EE86F]"></span>
          </span>
          Hover to pause
        </div>
      </div>
    </section>
  );
}
