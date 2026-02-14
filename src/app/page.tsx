import { Hero } from "@/components/sections/Hero";
import { TwoEngines } from "@/components/sections/TwoEngines";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { RatioDeepDive } from "@/components/sections/RatioDeepDive";
import { GridDeepDive } from "@/components/sections/GridDeepDive";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TwoEngines />
      <SocialProof />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <ProductShowcase />
      <RatioDeepDive />
      <GridDeepDive />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
