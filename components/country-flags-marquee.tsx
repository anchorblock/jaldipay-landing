const countries = [
  { code: "us", name: "United States", currency: "USD" },
  { code: "sg", name: "Singapore", currency: "SGD" },
  { code: "my", name: "Malaysia", currency: "MYR" },
  { code: "id", name: "Indonesia", currency: "IDR" },
  { code: "gb", name: "United Kingdom", currency: "GBP" },
  { code: "bd", name: "Bangladesh", currency: "BDT" },
  { code: "in", name: "India", currency: "INR" },
  { code: "pk", name: "Pakistan", currency: "PKR" },
  { code: "ph", name: "Philippines", currency: "PHP" },
  { code: "th", name: "Thailand", currency: "THB" },
  { code: "vn", name: "Vietnam", currency: "VND" },
  { code: "sa", name: "Saudi Arabia", currency: "SAR" },
  { code: "qa", name: "Qatar", currency: "QAR" },
  { code: "kw", name: "Kuwait", currency: "KWD" },
];

// Double the list for seamless infinite scroll
const doubledCountries = [...countries, ...countries];

export default function CountryFlagsMarquee({ inline }: { inline?: boolean }) {
  return (
    <div className="marquee-fade overflow-hidden py-4">
      <div className={`animate-scroll-flags flex items-center gap-6 whitespace-nowrap ${inline ? "gap-4" : ""}`}>
        {doubledCountries.map((country, i) => (
          <div
            key={`${country.code}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/[0.18] px-3 py-1 backdrop-blur-[10px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://flagcdn.com/w40/${country.code}.png`}
              alt={country.name}
              width={24}
              height={16}
              className="h-4 w-6 shrink-0 rounded-sm object-cover"
            />
            <div className="flex flex-col">
              <span className="shrink-0 text-xs font-medium leading-tight text-white/80">
                {country.name}
              </span>
              <span className="shrink-0 text-[10px] leading-tight text-white/50">
                {country.currency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
