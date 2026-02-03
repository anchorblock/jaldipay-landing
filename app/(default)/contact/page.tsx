export const metadata = {
  title: "Contact Us - JaldiPay",
  description: "Get in touch with JaldiPay. We're here to help with your global money transfer needs.",
};

import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#9EE86F]/20 px-4 py-1 text-sm font-medium text-[#0A3700] mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl font-bold text-[#0A3700] md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We&apos;re here to help. Reach out to us and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-[#0A3700] mb-6">Contact Information</h2>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#9EE86F]/20">
                  <svg className="h-6 w-6 text-[#0A3700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a href="mailto:faruk@jaldipay.com" className="text-gray-600 hover:text-[#0A3700] transition">
                    faruk@jaldipay.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#9EE86F]/20">
                  <svg className="h-6 w-6 text-[#0A3700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/anchorblock/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0A3700] transition"
                  >
                    Anchorblock
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-[#0A3700] mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
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
              <p className="mt-4 text-sm text-gray-500">
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
