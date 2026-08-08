"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(
      subtextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
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
        className="text-6xl lg:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]"
      >
        Aman <br /> Goyal
      </h1>
      
      <p 
        ref={subtextRef}
        className="mt-4 text-xl lg:text-2xl font-medium text-white/80 max-w-2xl"
      >
        Senior JavaScript Engineer
        <span className="block mt-2 text-base lg:text-lg text-white/60 font-normal">
          Crafting Performant, Interactive & Elegant Web Experiences.
        </span>
      </p>

      <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-6 justify-center">
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
