import Image from "next/image";

const partners = [
  { name: "bKash", src: "/images/partners/bkash.svg" },
  { name: "Western Union", src: "/images/partners/western_union.svg" },
  { name: "Wise", src: "/images/partners/wise.svg" },
  { name: "MoneyGram", src: "/images/partners/moneygram.svg" },
  { name: "Nagad", src: "/images/partners/nagad.svg" },
  { name: "TerraPay", src: "/images/partners/terrapay.svg" },
  { name: "Thunes", src: "/images/partners/thunes.png" },
  { name: "UAE Exchange", src: "/images/partners/uae_exchange.png" },
  { name: "Zero Hash", src: "/images/partners/zerohash.png" },
];

// Double for seamless loop
const doubledPartners = [...partners, ...partners];

export default function SafetyBand() {
  return (
    <section id="security" className="bg-black py-[50px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Shield + Heading inline */}
        <div className="flex items-center gap-4 mb-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <svg className="h-10 w-10" viewBox="0 0 187.54 190.17" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="shield-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#26db00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0b2b03" stopOpacity="0.9" />
                </radialGradient>
              </defs>
              <path fill="url(#shield-grad)" d="M93.77,0L0,42.3v63.45c0,46.63,39.98,78.98,93.77,84.42,53.79-5.44,93.77-37.79,93.77-84.42V42.3L93.77,0Z"/>
              <path fill="#26db00" opacity="0.6" d="M93.77,20L20,52.3v53.45c0,36.63,29.98,68.98,73.77,74.42,43.79-5.44,73.77-37.79,73.77-74.42V52.3L93.77,20Z"/>
              <path fill="none" stroke="#6eff9e" strokeWidth="2" d="M93.77,40L40,62.3v43.45c0,26.63,19.98,58.98,53.77,64.42,33.79-5.44,53.77-37.79,53.77-64.42V62.3L93.77,40Z"/>
              <path fill="#26db00" d="M82,95l-15-15,7-7,8,8,25-25,7,7Z"/>
            </svg>
          </div>
          <h2 className="text-xl font-extralight text-white md:text-2xl">
            A new era of money security
          </h2>
        </div>

        <p className="text-xs text-white/50 ml-16">
          Jaldipay works with industry leading payment infrastructure providers.
        </p>

        {/* Scrolling Partner Logos */}
        <div className="mt-8 carousel-mask overflow-hidden">
          <div className="animate-scroll-logos flex items-center gap-[60px] whitespace-nowrap">
            {doubledPartners.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 transition-opacity hover:opacity-70"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={100}
                  height={20}
                  className="h-[20px] w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.4 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
