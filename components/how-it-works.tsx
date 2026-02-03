"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Sign Up",
      description: "Create your account in 2 minutes with just your email and basic details.",
      highlight: "Quick & Easy",
    },
    {
      number: "2",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Send Money",
      description: "Enter amount, choose destination, and confirm. We handle the rest.",
      highlight: "Best Rates",
    },
    {
      number: "3",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Delivered Instantly",
      description: "Recipient gets funds in their local currency within minutes.",
      highlight: "Instant",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#9EE86F]/20 text-[#0A3700] text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl font-bold text-[#0A3700] md:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Send money internationally in three simple steps. No complicated forms, no hidden fees.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-[#9EE86F]/0 via-[#9EE86F] to-[#9EE86F]/0"></div>
            {/* Animated dots on the line */}
            <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
              <div className="absolute left-1/4 -translate-x-1/2 w-3 h-3 bg-[#9EE86F] rounded-full animate-pulse"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#9EE86F] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute left-3/4 -translate-x-1/2 w-3 h-3 bg-[#9EE86F] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#9EE86F]/30 transition-all duration-300 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 rounded-full bg-[#0A3700] flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-[#9EE86F] text-[#0A3700] text-xs font-semibold">
                      {step.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A3700] to-[#145200] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#0A3700] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <svg
                        className="w-6 h-6 text-[#9EE86F] animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay={500}>
          <a
            href="https://cal.com/shatil-ab/30min"
            className="btn-cta-primary px-8 py-4 text-base"
          >
            Start Sending Now
            <svg
              className="btn-arrow w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
