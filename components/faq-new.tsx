"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is JaldiPay?",
    answer:
      "JaldiPay is a stablecoin-powered payment platform that enables fast, low-cost money transfers between Bangladesh and the world. We use blockchain technology to make international remittances as easy as sending a text message.",
  },
  {
    question: "How are stablecoins different from regular cryptocurrency?",
    answer:
      "Stablecoins are digital currencies pegged 1:1 to the US dollar, meaning they maintain a stable value unlike volatile cryptocurrencies like Bitcoin. This makes them perfect for payments and remittances.",
  },
  {
    question: "Is JaldiPay safe and regulated?",
    answer:
      "Yes. JaldiPay operates with full compliance with Bangladesh banking regulations. All transactions are transparent, auditable, and secure using blockchain technology.",
  },
  {
    question: "How much does it cost to send money?",
    answer:
      "JaldiPay charges fractions of a cent per transaction on average\u2014significantly lower than traditional remittance services. There are no hidden fees or unfavorable exchange rates.",
  },
  {
    question: "How long do transfers take?",
    answer:
      "Transfers settle in seconds, not days. Unlike traditional banking which operates on business hours, stablecoin rails work 24/7/365.",
  },
  {
    question: "Do I need to understand crypto to use JaldiPay?",
    answer:
      "No. JaldiPay is designed to be as simple as any banking app. We handle all the blockchain complexity behind the scenes\u2014you just send money like normal.",
  },
];

export default function FAQNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6 md:px-12">
        <h2 className="mb-12 text-center text-2xl font-extralight text-white md:text-[41.2px] leading-[1.2]">
          You&apos;ve got questions
          <br />
          We&apos;ve got answers
        </h2>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left group"
              >
                <span
                  className={`text-base font-normal transition-colors ${
                    openIndex === index ? "text-[#26db00]" : "text-white group-hover:text-[#26db00]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`faq-icon ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-[#26db00] text-xl font-light ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <p className="pt-4 text-[14.4px] leading-relaxed text-white/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
