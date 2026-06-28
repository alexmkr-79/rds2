import { buildWhatsAppUrl } from "@/utils/whatsapp";

export function Footer() {
  return (
    <footer className="w-full bg-[#56423A] pt-24 pb-8 px-6 md:px-12 z-0 relative border-t border-[#F5F0E8]/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-24">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/logo.png" 
              alt="Rachnakar Design Studio" 
              className="h-12 w-auto object-contain mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
              data-testid="img-logo-footer"
            />
            <p className="font-sans text-sm text-[#F5F0E8]/70 max-w-xs font-light text-center md:text-left">
              Precision Engineered. Masterfully Designed.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F5F0E8]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-[#F5F0E8]/50">
            © {new Date().getFullYear()} Rachnakar Design Studio. All rights reserved.
          </p>
          <button
            onClick={() => window.open(buildWhatsAppUrl(), "_blank")}
            className="font-sans text-xs font-medium text-[#F5F0E8]/80 hover:text-[#F5F0E8] uppercase tracking-[0.1em] transition-colors"
            data-testid="link-whatsapp-footer"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </footer>
  );
}
