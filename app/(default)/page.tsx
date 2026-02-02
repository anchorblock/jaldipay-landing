export const metadata = {
  title: "JaldiPay - Global Money Transfers",
  description: "Fast, secure money transfers to 50+ countries including UAE, Singapore, Malaysia, and more.",
};

import Hero from "@/components/hero-home";
import CurrencyMarquee from "@/components/currency-marquee";
import HowItWorks from "@/components/how-it-works";
import FeaturesHighlight from "@/components/features-highlight";
import FeatureSend from "@/components/feature-send";
import FeatureAdd from "@/components/feature-add";
import FeatureCards from "@/components/feature-cards";
import FeatureRemittance from "@/components/feature-remittance";
import Integrations from "@/components/integrations";
import TestimonialsHome from "@/components/testimonials-home";
import Stats from "@/components/stats";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrencyMarquee />
      <HowItWorks />
      <FeaturesHighlight />
      <FeatureSend />
      <FeatureAdd />
      <FeatureCards />
      <FeatureRemittance />
      <Integrations />
      <TestimonialsHome />
      <Stats />
      <FAQ />
    </>
  );
}
