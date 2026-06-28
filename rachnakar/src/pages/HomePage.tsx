import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { WhatsAppCTASection } from "@/components/WhatsAppCTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#56423A]">
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex flex-col relative overflow-hidden">
          <HeroSection />
          
          <MarqueeStrip 
            items={["CNC DESIGN", "·", "CAD MODELING", "·", "CUSTOM MANUFACTURING", "·", "PRECISION ENGINEERING", "·", "CNC ACCESSORIES", "·", "MACHINE COMPONENTS", "·"]}
            bg="#56423A" 
            textColor="#F5F0E8" 
            speed={35}
            direction="left"
          />
          
          <ServicesSection />
          
          <MarqueeStrip 
            items={["INDUSTRIAL PRECISION", "·", "ARCHITECTURAL ELEMENTS", "·", "CUSTOM FIXTURES", "·", "RAPID PROTOTYPING", "·", "HEAVY DUTY COMPONENTS", "·"]}
            bg="#F5F0E8" 
            textColor="#56423A" 
            speed={40}
            direction="right"
          />
          
          <ProductsSection />
          <IndustriesSection />
          <PortfolioSection />
          <WhyUsSection />
          <WhatsAppCTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
