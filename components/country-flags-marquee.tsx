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
  { code: "ae", name: "UAE", currency: "AED" },
  { code: "om", name: "Oman", currency: "OMR" },
  { code: "bh", name: "Bahrain", currency: "BHD" },
  { code: "np", name: "Nepal", currency: "NPR" },
  { code: "lk", name: "Sri Lanka", currency: "LKR" },
  { code: "mm", name: "Myanmar", currency: "MMK" },
  { code: "jp", name: "Japan", currency: "JPY" },
  { code: "kr", name: "South Korea", currency: "KRW" },
  { code: "au", name: "Australia", currency: "AUD" },
  { code: "ca", name: "Canada", currency: "CAD" },
  { code: "de", name: "Germany", currency: "EUR" },
  { code: "fr", name: "France", currency: "EUR" },
  { code: "it", name: "Italy", currency: "EUR" },
];

// Double the list for seamless infinite scroll
const doubledCountries = [...countries, ...countries];

export default function CountryFlagsMarquee() {
  return (
    <div className="marquee-fade overflow-hidden py-4">
      <div className="animate-scroll-flags flex items-center gap-6 whitespace-nowrap">
        {doubledCountries.map((country, i) => (
          <div
            key={`${country.code}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/10 px-4 py-2.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://flagcdn.com/w40/${country.code}.png`}
              alt={country.name}
              width={24}
              height={16}
              className="h-4 w-6 shrink-0 rounded-sm object-cover"
            />
            <span className="shrink-0 text-xs font-medium leading-none text-white/80">
              {country.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
