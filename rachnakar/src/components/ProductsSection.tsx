import { useRef, useEffect } from "react";
import { products } from "@/data/products";
import { buildWhatsAppUrl } from "@/utils/whatsapp";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProductsSection() {
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
    <section ref={sectionRef} id="products" className="w-full bg-[#56423A] pt-24 pb-32 px-6 md:px-12 z-0 relative">
      <div className="max-w-[1400px] mx-auto">
        <h2 ref={headerRef} className="font-display text-[#F5F0E8] text-6xl md:text-8xl lg:text-[120px] leading-none mb-16 md:mb-24 border-b border-[#F5F0E8]/20 pb-8 uppercase">
          OUR PRODUCTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
              className="group relative flex flex-col bg-[#F5F0E8]/10 border border-[#F5F0E8]/20 rounded-xl overflow-hidden cursor-pointer"
              data-testid={`card-product-${product.id}`}
            >
              {product.featured && (
                <div className="absolute top-4 left-4 z-10 bg-[#8C6A5B] text-[#F5F0E8] px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest rounded-full">
                  Featured
                </div>
              )}
              
              <div className="aspect-video w-full overflow-hidden relative bg-[#F5F0E8]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid={`img-product-${product.id}`}
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="font-sans text-xs uppercase tracking-wider text-[#74A89F] mb-2 font-medium">
                  {product.category}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-3 leading-tight">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-[#F5F0E8]/60 leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#F5F0E8]/20">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#F5F0E8]/60">
                    Contact For Price
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(buildWhatsAppUrl(product.name), "_blank");
                    }}
                    className="font-sans text-xs font-bold uppercase tracking-wider text-[#8C6A5B] hover:text-[#74A89F] transition-colors flex items-center gap-2"
                    data-testid={`button-quote-${product.id}`}
                  >
                    Get Quote →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
