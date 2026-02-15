export const metadata = {
  title: "JaldiPay - Change the way you transfer money",
  description:
    "Fast, secure money transfers to 50+ countries with near-zero fees using stablecoin payment rails.",
};

import Hero from "@/components/hero";
import FeatureCardsNew from "@/components/feature-cards-new";
import GlobeSection from "@/components/globe-section";
import StablecoinBand from "@/components/stablecoin-band";
import SafetyBand from "@/components/safety-band";
import FAQNew from "@/components/faq-new";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCardsNew />
      <GlobeSection />
      <StablecoinBand />
      <SafetyBand />
      <FAQNew />
    </>
  );
}
