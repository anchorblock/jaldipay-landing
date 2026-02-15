const partners = [
  "TerraPay",
  "Thunes",
  "Zero Hash",
  "bKash",
  "Nagad",
  "Circle",
  "Fireblocks",
  "Chainalysis",
  "Sardine",
  "Plaid",
];

// Double for seamless loop
const doubledPartners = [...partners, ...partners];

export default function SafetyBand() {
  return (
    <section className="bg-[#0b2b03] py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 text-center">
        {/* Shield Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#26db00]/10">
          <svg className="h-8 w-8 text-[#26db00]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h2 className="text-xl font-extralight text-white md:text-2xl">
          Your safety is our priority
        </h2>
        <p className="mt-2 text-xs text-white/50">
          Trusted by leading financial institutions and compliance partners
        </p>

        {/* Scrolling Partner Logos */}
        <div className="mt-8 carousel-mask overflow-hidden">
          <div className="animate-scroll-logos flex items-center gap-12 whitespace-nowrap">
            {doubledPartners.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 text-white/40 transition-colors hover:text-white/70"
              >
                <span className="text-sm font-medium tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
