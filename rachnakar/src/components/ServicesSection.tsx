import { useRef, useEffect } from "react";
import { services } from "@/data/services";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="w-full bg-[#F5F0E8] rounded-t-[20px] pt-24 pb-32 px-6 md:px-12 -mt-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 ref={headerRef} className="font-display text-[#56423A] text-6xl md:text-8xl lg:text-[120px] leading-none mb-16 md:mb-24 border-b border-[#56423A]/20 pb-8 uppercase">
          WHAT WE DO
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="font-sans text-[#56423A] text-lg md:text-xl leading-relaxed">
              We translate abstract ideas into tangible reality. Our approach merges meticulous engineering with an uncompromising eye for design, ensuring every piece we machine serves its purpose flawlessly.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;
              return (
                <div 
                  key={index} 
                  className="group border-t-2 border-[#8C6A5B]/30 pt-6 hover:-translate-y-2 transition-transform duration-300"
                  data-testid={`service-card-${index}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-[#56423A]/5 text-[#8C6A5B] group-hover:bg-[#8C6A5B] group-hover:text-[#F5F0E8] transition-colors">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#56423A]">{service.name}</h3>
                  </div>
                  <p className="font-sans text-[#56423A]/70 text-sm leading-relaxed pl-16">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
