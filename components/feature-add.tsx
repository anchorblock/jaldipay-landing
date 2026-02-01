import Image from "next/image";
import PhoneMockup from "./phone-mockup";

export default function FeatureAdd() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left content - Phone Mockup with Screenshot */}
          <div className="flex justify-center order-2 md:order-1" data-aos="fade-right">
            <PhoneMockup>
              <Image
                src="/jaldipay-add.png"
                alt="Add Money Screen"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </PhoneMockup>
          </div>

          {/* Right content */}
          <div className="order-1 md:order-2" data-aos="fade-left">
            <span className="text-[#9EE86F] font-medium text-sm uppercase tracking-wide">
              Easy Deposits
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0A3700] md:text-4xl lg:text-5xl">
              Top Up Your
              <br />
              Wallet Instantly
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              Multiple deposit methods including bank transfer, cards, and digital wallets. Fund your account in seconds with minimal fees.
            </p>

            {/* Yield Feature */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#9EE86F]/20 to-[#9EE86F]/5 border border-[#9EE86F]/30 px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9EE86F]/30">
                <svg className="h-5 w-5 text-[#0A3700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-[#0A3700]">Earn Yield</span>
                <p className="text-sm text-gray-600">Your balance works for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
