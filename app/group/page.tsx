export const metadata = {
  title: "ИИшенка Pro",
  description: "Участвуй в прогрессе ИИ",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Features />
      <Cta />
    </>
  );
}
