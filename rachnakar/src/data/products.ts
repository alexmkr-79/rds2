export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "cnc-router-spoilboard",
    name: "CNC Router Spoilboard",
    description: "Heavy-duty MDF spoilboard for CNC routers, featuring a precision-drilled grid pattern for reliable fixturing.",
    image: "/images/product-spoilboard.webp",
    category: "CNC Accessories",
    featured: true,
  },
  {
    id: "tslot-aluminum-profile",
    name: "T-Slot Aluminum Profile",
    description: "Extruded aluminum T-slot profile engineered for rigid and modular machine fixtures.",
    image: "/images/product-tslot.webp",
    category: "Machine Components",
    featured: false,
  },
  {
    id: "brass-engraving-insert",
    name: "Brass Engraving Insert",
    description: "Precision brass inlay insert, perfectly sized for high-end decorative and architectural engraving.",
    image: "/images/product-brass.webp",
    category: "CNC Accessories",
    featured: false,
  },
  {
    id: "custom-aluminum-jig-plate",
    name: "Custom Aluminum Jig Plate",
    description: "Machined aluminum fixture plate tailored with a custom hole pattern to meet exact production requirements.",
    image: "/images/product-jigplate.webp",
    category: "Machine Components",
    featured: true,
  },
  {
    id: "phenolic-resin-base",
    name: "Phenolic Resin Base Plate",
    description: "High-density phenolic base designed for uncompromising stability in demanding CNC workholding setups.",
    image: "/images/product-phenolic.webp",
    category: "CNC Accessories",
    featured: false,
  },
  {
    id: "vacuum-hold-down",
    name: "Vacuum Hold-Down Table",
    description: "Precision flat vacuum table surface engineered to secure thin materials flawlessly during intricate CNC cutting.",
    image: "/images/product-vacuum.webp",
    category: "Machine Components",
    featured: true,
  },
  {
    id: "custom-steel-bracket",
    name: "Custom Steel Bracket Set",
    description: "Laser-cut and CNC-milled steel brackets providing structural integrity for specialized industrial fixtures.",
    image: "/images/product-bracket.webp",
    category: "Machine Components",
    featured: false,
  },
  {
    id: "engraved-signage-panel",
    name: "Engraved Signage Panel",
    description: "CNC-routed aluminum composite panel finished for striking and resilient exterior branding.",
    image: "/images/product-signage.webp",
    category: "Architectural",
    featured: false,
  }
];
