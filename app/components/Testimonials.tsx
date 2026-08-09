"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../data";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || !orbitRef.current || !sectionRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Delay setup to allow Projects section to finish pinning, which changes vertical offsets
    const timeout = setTimeout(() => {
      // Animate the orbit (clip-path expansion)
      gsap.fromTo(
        orbitRef.current,
        { clipPath: "circle(20% at 50% 50%)" },
        {
          clipPath: "circle(150% at 50% 50%)", // expand to cover screen
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center", // start expanding when top hits center
            end: "bottom bottom", // finish when we scroll through
            scrub: 1, // smooth scrubbing
            onUpdate: (self) => {
              const shouldBeDark = self.progress > 0.83;
              // @ts-expect-error - Attach lastTheme state to the ScrollTrigger instance to avoid closure staleness
              if (self.lastThemeDark !== shouldBeDark) {
                // @ts-expect-error - Attach lastTheme state to the ScrollTrigger instance to avoid closure staleness
                self.lastThemeDark = shouldBeDark;
                window.dispatchEvent(new CustomEvent("nav-theme", { detail: { dark: shouldBeDark } }));
              }
            }
          }
        }
      );
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom bottom", // Starts exactly when the animation above finishes
        end: "bottom top", // Ends when the bottom of the section leaves the top of the screen
        onEnter: () => {
          window.dispatchEvent(new CustomEvent("nav-theme", { detail: { dark: true } }));
        },
        onLeave: () => {
          // Section has completely scrolled out of view at the top, revert to light mode for the next section
          window.dispatchEvent(new CustomEvent("nav-theme", { detail: { dark: false } }));
        },
        onEnterBack: () => {
          // Scrolling back up into the white section
          window.dispatchEvent(new CustomEvent("nav-theme", { detail: { dark: true } }));
        }
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="relative w-full h-[110vh] bg-transparent">
      {/* Sticky container holds the viewport while scrolling the 200vh section */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background dark rings for aesthetics (Orbit rings) */}
        <div className="absolute w-[40vh] h-[40vh] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute w-[80vh] h-[80vh] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute w-[120vh] h-[120vh] rounded-full border border-white/5 pointer-events-none" />

        {/* The Expanding Orbit Container (White) */}
        <div 
          ref={orbitRef} 
          className="absolute inset-0 bg-white flex flex-col items-center justify-center rounded-t-[40px] lg:rounded-t-[60px]"
          style={{ clipPath: 'circle(20% at 50% 50%)' }}
        >
           <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col items-center z-10 relative">
             <div className="mb-8 lg:mb-12">
               <p className="text-black/50 text-sm lg:text-base font-bold uppercase tracking-widest text-center mb-2 z-10 relative pointer-events-none">
                 Testimonials.
               </p>
               <h2 className="text-4xl lg:text-[56px] font-black text-black tracking-tighter text-center z-10 relative pointer-events-none leading-none">
                 What others say
               </h2>
             </div>
             
             {/* Single Testimonial Card */}
             <div className="w-full max-w-4xl bg-[#F0F4FF] p-6 lg:p-8 rounded-[30px] lg:rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-accent-cyan/30 transition-all duration-500 cursor-pointer">
               <div>
                 <span className="text-5xl lg:text-6xl text-black/20 font-serif leading-none block -mt-4 mb-2">&quot;</span>
                 <p className="text-black/80 font-medium text-base lg:text-lg leading-snug lg:leading-snug text-left">
                   {testimonials[0].quote}
                 </p>
               </div>

               <div className="mt-8 lg:mt-10 flex items-center gap-4">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold text-lg lg:text-xl shrink-0">
                   {testimonials[0].name.charAt(0)}
                 </div>
                 <div className="text-left">
                   <h4 className="text-black font-bold tracking-tight text-lg lg:text-xl">{testimonials[0].name}</h4>
                   <p className="text-black/50 text-xs lg:text-sm font-medium mt-0.5">{testimonials[0].company}</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
