import { useState, useEffect } from "react";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 ${
        isScrolled ? "bg-[#56423A]/90 backdrop-blur-md" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="relative z-50">
          <img 
            src="/logo.png" 
            alt="Rachnakar Design Studio" 
            className="h-8 w-auto object-contain transition-all duration-300"
            style={isScrolled ? { filter: "brightness(0) invert(1)" } : {}}
            data-testid="img-logo-navbar"
          />
        </a>

        <button
          onClick={() => window.open(buildWhatsAppUrl(), "_blank")}
          className="relative z-50 px-5 py-2 rounded-full border border-[#F5F0E8]/40 bg-transparent text-[#F5F0E8] font-sans text-sm font-medium hover:bg-[#F5F0E8] hover:text-[#56423A] transition-colors duration-300"
          data-testid="button-quote-nav"
        >
          Get Quote ↗
        </button>
      </div>
    </header>
  );
}
