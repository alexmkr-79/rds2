export function MarqueeStrip({ 
  items, 
  direction = "left", 
  bg = "#56423A", 
  textColor = "#F5F0E8", 
  speed = 30 
}: { 
  items: string[]; 
  direction?: "left" | "right";
  bg?: string;
  textColor?: string;
  speed?: number;
}) {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  return (
    <div 
      className="w-full overflow-hidden flex whitespace-nowrap py-6 md:py-8 border-t border-b border-white/10"
      style={{ backgroundColor: bg, color: textColor }}
      data-testid={`marquee-${direction}`}
    >
      <div 
        className={`flex min-w-full items-center ${animationClass}`} 
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl mx-8 md:mx-12 leading-none uppercase">
            {item}
          </span>
        ))}
      </div>
      <div 
        className={`flex min-w-full items-center ${animationClass}`} 
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="font-display text-4xl md:text-6xl mx-8 md:mx-12 leading-none uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
