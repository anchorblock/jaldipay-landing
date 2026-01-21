import Image from "next/image";

const integrationPartners = [
  {
    name: "TerraPay",
    description: "Global payments infrastructure",
    logo: "/partners/terrapaylogo.png",
    className: "h-16 w-32",
  },
  {
    name: "Thunes",
    description: "Cross-border payments network",
    logo: "https://www.thunes.com/wp-content/uploads/2021/06/thunes-logo-dark.svg",
    className: "h-8 w-28",
  },
  {
    name: "Zero Hash",
    description: "Digital asset infrastructure",
    logo: "https://images.g2crowd.com/uploads/product/image/ff99b35fef9c6e274d51cab6406a7623/zerohash.png",
    className: "h-12 w-40",
  },
  {
    name: "bKash",
    description: "Mobile Wallet Support",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILJjwdVCygsxfLOoAPUgjE8ubYY8riy35RQ&s",
    className: "h-20 w-40",
  },
];

// const officialPartner = {
//   name: "bKash",
//   description: "Official local off-ramp partner for seamless mobile wallet payouts",
//   logo: "",
//   className: "h-12 w-40"
// };

export default function Integrations() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#9EE86F]/20 px-4 py-1 text-sm font-medium text-[#0A3700] mb-4">
            Powered By
          </span>
          <h2 className="text-2xl font-bold text-[#0A3700] md:text-3xl lg:text-4xl">
            Our Integration Partners
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We work with industry-leading payment infrastructure providers to ensure fast, secure, and reliable transfers worldwide.
          </p>
        </div>

        {/* Integration Partners Grid */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          {integrationPartners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:border-[#9EE86F]/50 hover:shadow-md"
            >
              <div className="mb-4 flex h-20 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={60}
                  className={`${partner.className} object-contain`}
                  unoptimized
                />
              </div>
              <h3 className="font-semibold text-gray-900">{partner.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Official Partner - bKash */}
        {/* <div className="rounded-2xl border-2 border-[#9EE86F] bg-gradient-to-br from-[#9EE86F]/10 to-white p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <Image
                src={officialPartner.logo}
                alt={`${officialPartner.name} logo`}
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
                unoptimized
              />
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0A3700] px-3 py-1 text-xs font-medium text-white mb-3">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Official Partner
              </div>
              <h3 className="text-xl font-bold text-[#0A3700] md:text-2xl">{officialPartner.name}</h3>
              <p className="mt-2 text-gray-600">{officialPartner.description}</p>
              <p className="mt-3 text-sm text-gray-500">
                Enabling instant payouts to millions of mobile wallet users across Bangladesh
              </p>
            </div>
          </div>
        </div> */}

        {/* Trust indicators */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3700]">50+</div>
            <div className="text-sm text-gray-500">Countries Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3700]">100+</div>
            <div className="text-sm text-gray-500">Currencies Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3700]">24/7</div>
            <div className="text-sm text-gray-500">Platform Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3700]">Instant</div>
            <div className="text-sm text-gray-500">Transfer Speed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
