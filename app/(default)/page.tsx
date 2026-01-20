export const metadata = {
  title: "JaldiPay - Global Money Transfers",
  description: "Fast, secure money transfers to 50+ countries including UAE, Singapore, Malaysia, and more.",
};

import Hero from "@/components/hero-home";
import FeaturesHighlight from "@/components/features-highlight";
import FeatureSend from "@/components/feature-send";
import FeatureAdd from "@/components/feature-add";
import Stats from "@/components/stats";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesHighlight />
      <FeatureSend />
      <FeatureAdd />
      <Stats />
      <FAQ />
    </>
  );
}
