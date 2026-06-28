import { buildWhatsAppUrl } from "@/utils/whatsapp";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppCTASection() {
  return (
    <section className="w-full bg-[#56423A] pt-32 pb-40 px-6 md:px-12 text-center z-0 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <h2 
          className="font-display text-[#F5F0E8] uppercase leading-[0.85] tracking-tight mb-8"
          style={{ fontSize: "clamp(60px, 11vw, 180px)" }}
        >
          READY TO START<br/>YOUR PROJECT?
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-[#F5F0E8]/70 font-light mb-12 max-w-2xl">
          Get a direct quote on WhatsApp. Fast response. Real answers.
        </p>
        
        <button
          onClick={() => window.open(buildWhatsAppUrl(), "_blank")}
          className="px-10 py-5 bg-[#F5F0E8] text-[#56423A] font-sans text-sm font-medium uppercase tracking-wider hover:bg-[#8C6A5B] hover:text-[#F5F0E8] transition-colors duration-300 rounded-full flex items-center gap-3"
          data-testid="button-cta-whatsapp"
        >
          <FaWhatsapp size={20} />
          Chat on WhatsApp ↗
        </button>
      </div>
    </section>
  );
}
