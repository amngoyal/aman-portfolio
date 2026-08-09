"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactLinks } from "../data";
import AnimatedText from "./AnimatedText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      linksRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "+=0"
    );
  }, []);

  return (
    <footer id="contact" ref={sectionRef} className="relative py-[30px] lg:py-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10 mt-12 lg:mt-16">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <h2 
        ref={titleRef} className="text-6xl lg:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white mb-8 animate-title"
      >
        <AnimatedText text="Let's Talk" direction="right" />
      </h2>

      <div ref={linksRef} className="flex flex-wrap justify-center gap-6 lg:gap-12 relative z-10">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-accent-cyan/50 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:text-accent-cyan group-hover:scale-110 transition-all duration-300">
              <link.icon size={32} />
            </div>
            <span className="font-bold text-sm uppercase tracking-wider">{link.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-32 text-white/40 text-sm font-medium">
        <p>© {new Date().getFullYear()} Aman Goyal. All rights reserved.</p>
      </div>
    </footer>
  );
}
