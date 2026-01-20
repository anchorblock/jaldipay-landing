import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="h2 mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="inline-flex items-center gap-3 before:h-px before:w-12 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-12 after:bg-linear-to-l after:from-transparent after:to-green-200/50">
              <span className="text-lg text-green-400">
                Fast, Secure, and Transparent Money Transfers
              </span>
            </div>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-md gap-8 md:max-w-none md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {/* Instant Money Transfers */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Instant Money Transfers
              </h3>
              <p className="text-base text-green-200/65">
                Send money instantly to over 50 countries. Our fast transfer system ensures your funds reach your family or business partners within minutes, not days.
              </p>
            </article>

            {/* Send to Bank & Mobile Wallets */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 9h-4v4h4v-4zm5-6h-5v4h5V5z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Bank Accounts & Mobile Wallets
              </h3>
              <p className="text-base text-green-200/65">
                Send directly to bank accounts or popular mobile wallets in the destination country. Recipients can access funds instantly for their daily needs.
              </p>
            </article>

            {/* Transparent Currency Exchange */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Transparent Currency Exchange
              </h3>
              <p className="text-base text-green-200/65">
                Real-time exchange rates with full transparency. See exactly how much your money will be worth before you send—no hidden fees or surprises.
              </p>
            </article>

            {/* Simple and Secure Sign-In */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.38-2.85 8.51-7 9.79-4.15-1.28-7-5.42-7-9.79V6.3l7-3.12z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Simple and Secure Sign-In
              </h3>
              <p className="text-base text-green-200/65">
                No complicated passwords needed. Sign in securely using your existing Google account, making it easy to get started while keeping your financial information protected.
              </p>
            </article>

            {/* Verified Safety */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.5 1.414-1.414 3.085 3.085 6.827-6.827 1.414 1.414-8.24 8.242z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Verified Safety (Digital KYC)
              </h3>
              <p className="text-base text-green-200/65">
                Keep your transactions safe and compliant with international regulations. Our quick digital verification process ensures every transfer is secure and legal.
              </p>
            </article>

            {/* 24/7 Digital Access */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.99 5c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm.5-10H11V6h1v3zm3.54 2.27l-.7-.7-2.12 2.12.7.7 2.12-2.12z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                24/7 Digital Access
              </h3>
              <p className="text-base text-green-200/65">
                Send money anytime, anywhere. Our mobile-friendly platform is available around the clock—no need to visit a physical exchange office.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
