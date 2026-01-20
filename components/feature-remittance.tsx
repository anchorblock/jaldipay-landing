import Image from "next/image";
import PhoneMockup from "./phone-mockup";

export default function FeatureRemittance() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left content - Phone Mockup with Screenshot */}
          <div className="flex justify-center order-2 md:order-1" data-aos="fade-right">
            <PhoneMockup>
              <Image
                src="/jaldipay-remmitence.png"
                alt="JaldiPay Remittance Screen"
                width={390}
                height={844}
                className="w-full h-auto"
              />
            </PhoneMockup>
          </div>

          {/* Right content */}
          <div className="order-1 md:order-2" data-aos="fade-left">
            <span className="text-[#9EE86F] font-medium text-sm uppercase tracking-wide">
              Global Network
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0A3700] md:text-4xl lg:text-5xl">
              Remittance
              <br />
              Made Simple
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              Connect with trusted remittance operators worldwide. Send money through Pioneer, Western Union, and more with competitive rates and fast delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                <div className="h-6 w-6 rounded-full bg-yellow-400"></div>
                <span className="text-sm font-medium text-gray-700">Pioneer</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
                <span className="text-sm font-medium text-gray-700">Western Union</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm font-medium text-gray-500">+ More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
