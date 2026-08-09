"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedText({ 
  text, 
  className = "", 
  direction = "up",
  animateOnScroll = true,
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  direction?: "up" | "down" | "right";
  animateOnScroll?: boolean;
  delay?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!animateOnScroll || !containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const words = containerRef.current.querySelectorAll('.cuberto-word');
    
    const fromVars: gsap.TweenVars = { opacity: 0, rotationZ: 5 };
    if (direction === "up") fromVars.y = "120%";
    else if (direction === "down") fromVars.y = "-120%";
    else if (direction === "right") fromVars.x = "-120%";

    const toVars: gsap.TweenVars = { 
      y: "0%", 
      x: "0%", 
      rotationZ: 0, 
      opacity: 1, 
      duration: 0.8, 
      stagger: 0.04, 
      ease: "power4.out",
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    };

    gsap.fromTo(words, fromVars, toVars);
    
  }, [direction, animateOnScroll, delay]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className={`inline-block overflow-hidden align-bottom pr-[0.3em] pb-[0.1em] -mb-[0.1em] ${animateOnScroll ? '' : 'cuberto-word-hero'}`}>
          <span className={`inline-block origin-bottom-left ${animateOnScroll ? 'cuberto-word' : 'cuberto-word-hero-inner'}`}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
