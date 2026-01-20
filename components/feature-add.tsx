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
            <div className="mt-8 flex flex-wrap gap-4">
              {/* <a
                href="https://cal.com/shatil-ab/30min"
                className="inline-flex items-center rounded-full bg-[#0A3700] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0A3700]/90"
              >
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
