"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredProjects } from "../data";
import AnimatedText from "./AnimatedText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    // Header entry animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    const getScrollAmount = () => {
      let trackWidth = trackRef.current!.scrollWidth;
      return -(trackWidth - window.innerWidth);
    };
    
    const tween = gsap.to(trackRef.current, {
      x: getScrollAmount,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="w-full bg-transparent py-[30px] lg:py-24">
      <div ref={headerRef} className="px-4 max-w-7xl mx-auto w-full mb-4 animate-title">
        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
          <AnimatedText text="Featured Projects" direction="right" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
      </div>

      <div ref={sectionRef} className="w-full overflow-hidden flex items-center relative py-12">
        <div 
          ref={trackRef} 
          className="flex items-stretch gap-8 lg:gap-16 px-4 lg:px-12 lg:px-24 w-max"
        >
          {featuredProjects.map((project, i) => (
            <div 
              key={i} 
              className="w-[90vw] lg:w-[75vw] lg:w-[65vw] max-w-[1100px] shrink-0 flex"
            >
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-[30px] lg:rounded-[40px] border border-white/10 bg-[#151515] shadow-2xl transition-all duration-500 hover:border-white/20 hover:-translate-y-2"
              >
                {/* Text Content - Left Side */}
                <div className="w-full lg:w-[45%] p-8 lg:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10 border-t lg:border-t-0 lg:border-r border-white/5">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-white/70 text-xs font-mono tracking-wider bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 leading-none">{project.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed font-medium line-clamp-4">{project.description}</p>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-4 text-accent-cyan font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    <span>EXPLORE PROJECT</span>
                    <span className="text-2xl">→</span>
                  </div>
                </div>

                {/* Image - Right Side (Presentation Stage) */}
                <div className="w-full lg:w-[55%] relative overflow-hidden order-1 lg:order-2 bg-[#1A1A1A] flex items-center justify-center p-8 lg:p-12">
                  <img 
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
