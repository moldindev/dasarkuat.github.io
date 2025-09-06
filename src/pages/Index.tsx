import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { ProgramSection } from "@/components/ProgramSection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const scrollToCTA = () => {
    ctaSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onCtaClick={scrollToCTA} />
      
      {/* Pain Points Section */}
      <PainPointsSection />
      
      {/* Outcomes Section */}
      <OutcomesSection />
      
      {/* Program & CTA Section */}
      <div ref={ctaSectionRef}>
        <ProgramSection />
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
