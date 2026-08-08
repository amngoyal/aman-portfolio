"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Slight delay to ensure DOM is fully rendered
    setTimeout(() => {
      const titles = gsap.utils.toArray<HTMLElement>('.animate-title');
      
      titles.forEach((title) => {
        // Clear any existing animation to prevent overlap
        gsap.killTweensOf(title);
        
        gsap.fromTo(title,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, 100);
  }, []);
  
  return null;
}
