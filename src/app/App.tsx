import { Hero } from "./components/Hero";
import { Target } from "./components/Target";
import { Program } from "./components/Program";
import { WhySpecial } from "./components/WhySpecial";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";

export default function App() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={scrollToCTA} />
      <Target />
      <Program />
      <WhySpecial />
      <Requirements />
      <Schedule />
      <Pricing />
      <CTA />
    </div>
  );
}
