"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services, stats } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = gsap.utils.toArray<HTMLElement>('.animate-up');
    
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-[30px] lg:py-24 px-4 max-w-7xl mx-auto">
      {/* Introduction Section */}
      <div className="mb-12 lg:mb-16 max-w-4xl animate-up">
        <div className="animate-title">
          <p className="text-accent-cyan text-sm font-bold uppercase tracking-widest mb-4">
            Introduction.
          </p>
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">
            Overview
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium mb-6">
            I build React and Next.js products with a focus on frontend architecture, performance, and SEO. My work usually lives at the intersection of clean UX, strong Core Web Vitals, and scalable component systems.
          </p>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
            I've led frontend teams through migrations, reusable library design, and product modernization. The goal is always the same: ship polished interfaces that are fast, maintainable, and easy for teams to extend.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="animate-up flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-2">
              {stat.value}
            </h3>
            <p className="text-white/60 font-medium tracking-wide uppercase text-sm text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-8 lg:mb-12 animate-title">
        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">
          Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="animate-up group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:border-accent-cyan/50 transition-colors duration-500 flex flex-col"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-accent-cyan group-hover:scale-110 transition-transform duration-500">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mt-auto">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
