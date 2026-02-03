"use client";

const destinations = [
  { code: "AED", flag: "🇦🇪", name: "UAE" },
  { code: "SAR", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "QAR", flag: "🇶🇦", name: "Qatar" },
  { code: "KWD", flag: "🇰🇼", name: "Kuwait" },
  { code: "SGD", flag: "🇸🇬", name: "Singapore" },
  { code: "MYR", flag: "🇲🇾", name: "Malaysia" },
  { code: "IDR", flag: "🇮🇩", name: "Indonesia" },
  { code: "BDT", flag: "🇧🇩", name: "Bangladesh" },
  { code: "INR", flag: "🇮🇳", name: "India" },
  { code: "PKR", flag: "🇵🇰", name: "Pakistan" },
  { code: "PHP", flag: "🇵🇭", name: "Philippines" },
  { code: "THB", flag: "🇹🇭", name: "Thailand" },
  { code: "VND", flag: "🇻🇳", name: "Vietnam" },
  { code: "EGP", flag: "🇪🇬", name: "Egypt" },
  { code: "NPR", flag: "🇳🇵", name: "Nepal" },
  { code: "LKR", flag: "🇱🇰", name: "Sri Lanka" },
];

export default function CurrencyMarquee() {
  // Double the array for seamless infinite scroll
  const doubledDestinations = [...destinations, ...destinations];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-gray-500">
            Send money to <span className="text-[#0A3700] font-semibold">50+ countries</span> worldwide
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden marquee-fade">
        <div className="flex animate-marquee">
          {doubledDestinations.map((dest, index) => (
            <div
              key={`${dest.code}-${index}`}
              className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-gray-50 border border-gray-100 hover:border-[#9EE86F] hover:bg-[#9EE86F]/5 transition-all duration-300 cursor-default shrink-0"
            >
              <span className="text-2xl">{dest.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#0A3700]">{dest.code}</span>
                <span className="text-xs text-gray-500">{dest.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
