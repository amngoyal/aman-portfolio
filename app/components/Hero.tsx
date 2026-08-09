"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedText from "./AnimatedText";
import StrokeText from "./StrokeText";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // StrokeText handles its own entrance animation.
    // It takes ~3 seconds to draw and fill (1.6s draw + 0.2s delay + 0.8s fill + 0.4s stagger).
    // We delay the rest of the Hero elements until it is almost finished.
    const tl = gsap.timeline();

    tl.fromTo(
      ".cuberto-word-hero-inner",
      { y: "120%", rotationZ: 5, opacity: 0 },
      { y: "0%", rotationZ: 0, opacity: 1, duration: 0.8, stagger: 0.04, ease: "power4.out" },
      2.8
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-24 lg:pt-32"
    >
      <h1
        ref={textRef}
        className="w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[1200px] mx-auto flex flex-col items-center justify-center -mt-8"
      >
        <StrokeText 
          text="AMAN GOYAL" 
          strokeColor="#00f2fe" 
          fillColor="#ffffff" 
          trigger="scroll" 
          letterSpacing={2}
          fontFamily='"Helvetica Neue", Helvetica, Arial, sans-serif'
          fontWeight={800}
        />
      </h1>
      
      <p 
        ref={subtextRef}
        className="mt-4 text-xl lg:text-2xl font-medium text-white/80 max-w-2xl"
      >
        <AnimatedText text="Senior JavaScript Engineer" animateOnScroll={false} />
        <span className="block mt-2 text-base lg:text-lg text-white/60 font-normal">
          <AnimatedText text="Crafting Performant, Interactive & Elegant Web Experiences." animateOnScroll={false} />
        </span>
      </p>

      <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-6 justify-center js-hidden">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-colors duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full font-semibold border border-white/10 transition-colors duration-300"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}
