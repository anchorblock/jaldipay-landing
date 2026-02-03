"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  flag: string;
  rating: number;
  text: string;
  avatar: string;
  transferRoute: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    flag: "🇦🇪",
    rating: 5,
    text: "JaldiPay saved me 40% on fees sending money to my family in Bangladesh. The transfer was instant and the exchange rate was the best I've found!",
    avatar: "/images/testimonials/avatar-1.svg",
    transferRoute: "UAE → Bangladesh",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Singapore",
    flag: "🇸🇬",
    rating: 5,
    text: "I've tried many services, but JaldiPay's speed is unmatched. My parents in India receive the money within minutes. Highly recommended!",
    avatar: "/images/testimonials/avatar-2.svg",
    transferRoute: "Singapore → India",
  },
  {
    id: 3,
    name: "Mohammad Hassan",
    location: "Riyadh, KSA",
    flag: "🇸🇦",
    rating: 5,
    text: "The app is so easy to use and the customer support is excellent. I send money to Pakistan every month and never had any issues.",
    avatar: "/images/testimonials/avatar-3.svg",
    transferRoute: "Saudi Arabia → Pakistan",
  },
  {
    id: 4,
    name: "Li Wei",
    location: "Kuala Lumpur",
    flag: "🇲🇾",
    rating: 5,
    text: "Best exchange rates in Malaysia! I compared with banks and other apps - JaldiPay consistently offers better value for sending to China.",
    avatar: "/images/testimonials/avatar-4.svg",
    transferRoute: "Malaysia → China",
  },
  {
    id: 5,
    name: "Fatima Al-Sayed",
    location: "Doha, Qatar",
    flag: "🇶🇦",
    rating: 5,
    text: "Finally a service that understands our needs! Fast, reliable, and transparent. No hidden fees, ever. My go-to for family transfers.",
    avatar: "/images/testimonials/avatar-5.svg",
    transferRoute: "Qatar → Egypt",
  },
];

export default function TestimonialsHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#9EE86F]/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9EE86F]/20 text-[#0A3700] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Trusted by Thousands
          </div>
          <h2 className="text-3xl font-bold text-[#0A3700] md:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust JaldiPay for their
            international money transfers.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-[#9EE86F]/20 p-8 md:p-12 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9EE86F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9EE86F]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Quote Icon */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-[#9EE86F]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6 justify-center md:justify-start">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 text-center md:text-left transition-all duration-500">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9EE86F] to-[#0A3700] p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl">
                      {currentTestimonial.flag}
                    </div>
                  </div>
                </div>

                {/* Name & Location */}
                <div className="text-center md:text-left">
                  <div className="font-semibold text-[#0A3700] text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {currentTestimonial.location}
                  </div>
                </div>

                {/* Transfer Route Badge */}
                <div className="md:ml-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A3700]/5 text-[#0A3700] text-sm font-medium">
                    <svg
                      className="w-4 h-4"
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
                    {currentTestimonial.transferRoute}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-[#0A3700]"
                    : "w-3 h-3 bg-[#9EE86F]/50 hover:bg-[#9EE86F]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4">
            <button
              onClick={() =>
                goToSlide(
                  (currentIndex - 1 + testimonials.length) % testimonials.length
                )
              }
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0A3700] hover:bg-[#9EE86F]/10 transition-colors -translate-x-6"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                goToSlide((currentIndex + 1) % testimonials.length)
              }
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0A3700] hover:bg-[#9EE86F]/10 transition-colors translate-x-6"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Stats */}
        <div
          className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0A3700]">
              10K+
            </div>
            <div className="text-sm text-gray-500">Happy Customers</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-2xl md:text-3xl font-bold text-[#0A3700]">
              4.9/5
            </div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0A3700]">
              98%
            </div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
