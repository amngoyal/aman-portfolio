"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import { experiences } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftColRef.current || !rightColRef.current) return;
    
    // We rely natively on Tailwind's lg:sticky for the left column 
    // instead of GSAP pinning, which injects a fixed-width pin-spacer
    // that breaks the flexbox percentage ratio and causes the right column to suddenly widen.
    
    const items = rightColRef.current!.querySelectorAll('.exp-item');
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-[30px] lg:py-24 px-4 max-w-7xl mx-auto relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
      
      {/* Sticky Left Column */}
      <div ref={leftColRef} className="w-full lg:w-1/3 lg:sticky lg:top-32">
        <div className="animate-title">
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
            <AnimatedText text="Experience" direction="right" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mb-4" />
          <p className="text-white/50 text-lg leading-relaxed">
            A track record of building and scaling high-performance web applications, leading engineering teams, and optimizing core web vitals for millions of users.
          </p>
        </div>
      </div>

      {/* Scrolling Right Column */}
      <div ref={rightColRef} className="w-full lg:w-2/3 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-purple/50 transition-colors duration-500">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                <span className="text-xl font-medium text-accent-cyan">{exp.company_name}</span>
              </div>
              <span className="text-white/40 font-mono mt-2 lg:mt-0">{exp.date}</span>
            </div>
            
            <div className="space-y-8">
              {exp.clients.map((client, cIndex) => (
                <div key={cIndex}>
                  {client.name && <h4 className="font-semibold text-white/90 text-lg mb-4">{client.name}</h4>}
                  <ul className="space-y-3 mb-6">
                    {client.points.map((point, pIndex) => (
                      <li key={pIndex} className="text-white/60 leading-relaxed flex items-start gap-3">
                        <span className="text-accent-cyan opacity-50 shrink-0 text-sm">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {client.chips.map((chip, chIndex) => (
                      <span key={chIndex} className="text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
