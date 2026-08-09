"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Fast track for the main dot, slower track for the trailing glow
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" });
    
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    let isHidden = false;

    const handleMouseMove = (e: MouseEvent) => {
      const isOverPlayground = !!(e.target as Element)?.closest('#beyond-code-scene');
      
      if (isOverPlayground && !isHidden) {
        isHidden = true;
        gsap.to([cursor, dot], { opacity: 0, duration: 0.2, overwrite: "auto" });
      } else if (!isOverPlayground && isHidden) {
        isHidden = false;
        gsap.to([cursor, dot], { opacity: 1, duration: 0.2, overwrite: "auto" });
      }

      // Center the elements on the cursor
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-12 h-12 bg-white/20 rounded-full blur-[8px] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference transition-colors duration-300"
      />
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference transition-colors duration-300"
      />
    </>
  );
}
