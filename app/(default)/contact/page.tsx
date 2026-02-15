export const metadata = {
  title: "Contact Us - JaldiPay",
  description: "Get in touch with JaldiPay. We're here to help with your global money transfer needs.",
};

import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#26db00]/20 px-4 py-1 text-sm font-medium text-[#26db00] mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl font-extralight text-white md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Have questions about our services? We&apos;re here to help. Reach out to us and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#26db00]/20">
                  <svg className="h-6 w-6 text-[#26db00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <a href="mailto:info@jaldipay.com" className="text-white/60 hover:text-[#26db00] transition">
                    info@jaldipay.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-xl border border-white/10 bg-[#0b2b03] p-6">
              <h3 className="font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/60">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/40">
                * All times are in GMT+6 (Bangladesh Standard Time)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
