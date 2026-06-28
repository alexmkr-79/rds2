import { useRef, useEffect } from "react";
import { whyUs } from "@/data/whyUs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhyUsSection() {
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
    <section ref={sectionRef} className="w-full bg-[#F5F0E8] rounded-t-[20px] pt-24 pb-32 px-6 md:px-12 -mt-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 ref={headerRef} className="font-display text-[#56423A] text-6xl md:text-8xl lg:text-[120px] leading-none mb-16 md:mb-24 uppercase">
          WHY RACHNAKAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {whyUs.map((feature, index) => (
            <div 
              key={index}
              className="border-t border-[#8C6A5B]/30 pt-6"
              data-testid={`why-us-item-${index}`}
            >
              <div className="flex items-baseline gap-6 mb-4">
                <span className="font-display text-4xl text-[#8C6A5B] w-12 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#56423A] leading-none">
                  {feature.title}
                </h3>
              </div>
              <p className="font-sans text-base text-[#56423A]/70 leading-relaxed pl-[72px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
