"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { testimonials } from "../data";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="testimonials" className="w-full bg-black py-[30px] lg:py-16 px-4 lg:px-8 flex flex-col justify-center min-h-screen">
      {/* Massive White Rounded Container */}
      <div 
        ref={sectionRef}
        className="w-full max-w-[1400px] mx-auto bg-white rounded-[40px] lg:rounded-[50px] overflow-hidden relative flex flex-col items-center pt-10 pb-12 lg:pt-12 lg:pb-16 transition-colors px-4 lg:px-12"
      >
        
        <div className="animate-title">
          <p className="text-black/50 text-sm lg:text-base font-bold uppercase tracking-widest text-center mb-2 z-10 relative pointer-events-none">
            Testimonials.
          </p>
          <h2 className="text-4xl lg:text-[56px] font-black text-black tracking-tighter mb-4 lg:mb-8 text-center z-10 relative pointer-events-none leading-none">
            What others say
          </h2>
        </div>

        {/* Single Testimonial Card */}
        <div 
          ref={cardRef}
          className="w-full max-w-4xl bg-[#F0F4FF] p-6 lg:p-8 rounded-[30px] lg:rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-accent-cyan/30 transition-all duration-500 cursor-pointer"
        >
          <div>
            <span className="text-5xl lg:text-6xl text-black/20 font-serif leading-none block -mt-4 mb-2">"</span>
            <p className="text-black/80 font-medium text-base lg:text-lg leading-snug lg:leading-snug">
              {testimonials[0].quote}
            </p>
          </div>

          <div className="mt-8 lg:mt-10 flex items-center gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold text-lg lg:text-xl shrink-0">
              {testimonials[0].name.charAt(0)}
            </div>
            <div>
              <h4 className="text-black font-bold tracking-tight text-lg lg:text-xl">{testimonials[0].name}</h4>
              <p className="text-black/50 text-xs lg:text-sm font-medium mt-0.5">{testimonials[0].company}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
