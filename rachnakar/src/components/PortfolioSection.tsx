import { useRef, useEffect } from "react";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioSection() {
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
    <section ref={sectionRef} id="portfolio" className="w-full bg-[#56423A] pt-24 pb-32 px-6 md:px-12 z-0 relative">
      <div className="max-w-[1400px] mx-auto">
        <h2 ref={headerRef} className="font-display text-[#F5F0E8] text-6xl md:text-8xl lg:text-[120px] leading-none mb-16 md:mb-24 border-b border-[#F5F0E8]/20 pb-8 uppercase">
          OUR WORK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => {
            // Staggered grid layout
            const colSpan = index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "md:col-span-1";
            
            return (
              <motion.div
                key={index}
                className={`relative rounded-xl overflow-hidden bg-[#F5F0E8] aspect-[4/3] group cursor-pointer ${colSpan}`}
                whileHover="hover"
                data-testid={`portfolio-item-${index}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <motion.div 
                  variants={{
                    initial: { y: "100%", opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
                  initial="initial"
                  className="absolute inset-0 bg-gradient-to-t from-[#56423A]/90 via-[#56423A]/40 to-transparent flex flex-col justify-end p-6 md:p-8"
                >
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#74A89F] mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#F5F0E8] leading-tight">
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
