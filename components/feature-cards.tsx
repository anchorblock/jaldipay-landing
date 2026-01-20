import Image from "next/image";
import PhoneMockup from "./phone-mockup";

export default function FeatureCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left content */}
          <div data-aos="fade-right">
            <span className="text-[#9EE86F] font-medium text-sm uppercase tracking-wide">
              Coming Soon
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0A3700] md:text-4xl lg:text-5xl">
              Virtual &
              <br />
              Physical Cards
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              Get ready for seamless payments with our upcoming cards. Spend globally, manage your balance, and track expenses all in one place.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-500">Multiple card designs available</span>
            </div>
          </div>

          {/* Right content - Phone Mockup with Screenshot */}
          <div className="flex justify-center" data-aos="fade-left">
            <PhoneMockup>
              <Image
                src="/jaldipay-cards.png"
                alt="JaldiPay Cards Screen"
                width={390}
                height={844}
                className="w-full h-auto"
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
