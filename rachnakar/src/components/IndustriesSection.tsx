import { useRef, useEffect } from "react";
import { industries } from "@/data/industries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headerRef.current && sectionRef.current) {
      gsap.fromTo(headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="industries" className="w-full bg-[#F5F0E8] rounded-t-[20px] pt-24 pb-32 px-6 md:px-12 -mt-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 ref={headerRef} className="font-display text-[#56423A] text-6xl md:text-8xl lg:text-[120px] leading-none mb-16 md:mb-24 uppercase">
          WHO WE SERVE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group py-8 md:py-12 border-t border-[#8C6A5B]/30 hover:bg-[#8C6A5B]/10 transition-colors duration-300 px-4 -mx-4 cursor-default"
              data-testid={`industry-row-${index}`}
            >
              <h3 className="font-display text-4xl md:text-6xl text-[#56423A] group-hover:text-[#8C6A5B] transition-colors duration-300 mb-4 uppercase">
                {industry.name}
              </h3>
              <p className="font-sans text-sm md:text-base text-[#56423A]/70 leading-relaxed max-w-md">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
