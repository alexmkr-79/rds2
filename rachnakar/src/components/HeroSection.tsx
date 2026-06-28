import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

export function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
    }
  });

  return (
    <section className="min-h-screen bg-[#56423A] flex items-center justify-center px-4 pt-24 pb-6" data-testid="section-hero">
      <div 
        ref={cardRef}
        className="w-full max-w-[1400px] rounded-[20px] bg-[#F5F0E8] overflow-hidden flex flex-col relative opacity-0" 
        style={{ minHeight: "85vh" }}
      >
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-12">
          <h1 
            style={{ fontFamily: "'Bebas Neue', serif", fontSize: "clamp(72px, 13vw, 200px)", lineHeight: 0.9, letterSpacing: "-0.02em" }} 
            className="text-[#1a1008] uppercase"
          >
            PRECISION<br/>MACHINED.
          </h1>
          <h2 className="font-serif text-2xl md:text-4xl italic font-bold text-[#8C6A5B] mt-4">
            Masterfully Designed.
          </h2>
        </div>
        
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-16 py-6 border-t border-[#8C6A5B]/20">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#56423A]/60">For CNC Machine Owners & Manufacturers</p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#56423A]/60 hidden md:block">From design to final cut</p>
          <button 
            onClick={() => window.open(buildWhatsAppUrl(), "_blank")}
            className="px-6 py-3 rounded-full border border-[#56423A]/30 font-sans text-xs uppercase tracking-wider text-[#56423A] hover:bg-[#56423A] hover:text-[#F5F0E8] transition-all duration-300"
            data-testid="button-hero-start"
          >
            Start Your Project ↗
          </button>
        </div>
      </div>
    </section>
  );
}
