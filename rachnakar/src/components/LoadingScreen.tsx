import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 200);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center bg-[#56423A] overflow-hidden"
          data-testid="loading-screen"
        >
          <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col">
            <h1 className="font-display text-[#F5F0E8] leading-[0.8] tracking-tighter" style={{ fontSize: "clamp(60px, 12vw, 160px)" }}>
              PRECISION MACHINED.
            </h1>
            <h2 className="font-display text-[#8C6A5B] leading-[0.8] tracking-tighter mt-2" style={{ fontSize: "clamp(40px, 8vw, 120px)" }}>
              MASTERFULLY DESIGNED.
            </h2>
          </div>
          
          <div className="absolute bottom-8 left-8 md:left-16">
            <p className="font-sans text-xs text-[#F5F0E8]/60 uppercase tracking-widest">Loading:</p>
          </div>
          
          <div className="absolute bottom-4 right-8 md:right-16">
            <span className="font-display text-7xl md:text-8xl text-[#F5F0E8] leading-none">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
