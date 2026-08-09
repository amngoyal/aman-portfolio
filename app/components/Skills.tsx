"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillGroups } from "../data";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiGraphql, SiVercel,
  SiRedux, SiHtml5, SiCss, SiJavascript, SiMongodb, SiExpress,
  SiGithub, SiVite, SiFigma
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Tailwind': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'GraphQL': SiGraphql,
  'Vercel': SiVercel,
  'Storybook': SiFigma,
  'Redux': SiRedux,
  'HTML': SiHtml5,
  'CSS': SiCss,
  'JavaScript': SiJavascript,
  'MongoDB': SiMongodb,
  'Express': SiExpress,
  'Strapi': SiNodedotjs,
  'Git': SiGithub,
  'GitHub Copilot': SiGithub,
  'Cursor': SiVercel,
  'OpenAI Codex': SiVite,
  'Claude': SiFigma,
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const frontendSkills = skillGroups.find(g => g.title === 'Frontend')?.skills || [];
const backendSkills = skillGroups.find(g => g.title === 'Backend')?.skills || [];
const toolSkills = skillGroups.find(g => g.title === 'Tools')?.skills || [];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useScrollReveal(cardsRef, {
    y: 50,
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    start: "top 75%",
  });

  useEffect(() => {    // 2. Interactive 3D Grid Tilt (Single Sheet)
    const rotateXTo = gsap.quickTo(gridRef.current, "rotationX", { ease: "power2.out", duration: 0.5 });
    const rotateYTo = gsap.quickTo(gridRef.current, "rotationY", { ease: "power2.out", duration: 0.5 });

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      rotateYTo(x * 6);
      rotateXTo(y * -6);
    };

    const handleMouseLeave = () => {
      rotateYTo(0);
      rotateXTo(0);
    };

    const gridEl = gridRef.current;
    if (gridEl) {
      gridEl.addEventListener("mousemove", handleMouseMove);
      gridEl.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (gridEl) {
        gridEl.removeEventListener("mousemove", handleMouseMove);
        gridEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-[30px] lg:py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-8 animate-title">
        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-2 text-white">
          <AnimatedText text="Tech Stack" direction="right" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
      </div>

      {/* 3D Perspective Container */}
      <div style={{ perspective: "2000px" }}>
        
        {/* The Grid that tilts on mouse move */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONTEND CARD (Large) */}
          <div 
            ref={el => { cardsRef.current[0] = el; }}
            className="lg:col-span-2 p-4 lg:p-12 rounded-[32px] bg-[#111111] border border-cyan-500/50 lg:border-white/5 lg:hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden hover:shadow-[0_0_60px_rgba(34,211,238,0.15)] hover:-translate-y-2 z-10"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             <div className="relative z-10 flex items-center gap-5 mb-10">
               <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/60 lg:border-cyan-400/20 lg:group-hover:border-cyan-400/60 transition-colors shadow-inner">
                 <span className="text-2xl font-black text-cyan-400">Fr</span>
               </div>
               <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Frontend Architecture</h3>
             </div>
             
             <div className="flex flex-wrap gap-3 lg:gap-4 relative z-10">
                {frontendSkills.map(skill => {
                  const Icon = iconMap[skill];
                  return (
                    <span key={skill} className="px-5 py-2.5 bg-black/60 rounded-full text-white/70 group-hover:text-white border border-white/5 group-hover:border-cyan-500/30 font-medium transition-all tracking-wide flex items-center gap-2">
                      {Icon && <Icon className="text-cyan-500" />}
                      {skill}
                    </span>
                  );
                })}
             </div>
          </div>
          
          {/* BACKEND CARD (Small) */}
          <div 
            ref={el => { cardsRef.current[1] = el; }}
            className="lg:col-span-1 p-4 lg:p-12 rounded-[32px] bg-[#111111] border border-purple-500/50 lg:border-white/5 lg:hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_60px_rgba(168,85,247,0.15)] hover:-translate-y-2 z-10"
          >
             <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             <div className="relative z-10 flex items-center gap-5 mb-10">
               <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/60 transition-colors shadow-inner">
                 <span className="text-2xl font-black text-purple-400">Bk</span>
               </div>
               <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Backend</h3>
             </div>

             <div className="flex flex-wrap gap-3 relative z-10">
               {backendSkills.map(skill => {
                 const Icon = iconMap[skill];
                 return (
                   <span key={skill} className="px-4 py-2 bg-black/60 rounded-full text-white/70 group-hover:text-white border border-white/5 group-hover:border-purple-500/30 text-sm font-medium transition-all tracking-wide flex items-center gap-2">
                     {Icon && <Icon className="text-purple-500" />}
                     {skill}
                   </span>
                 );
               })}
             </div>
          </div>

          {/* TOOLS CARD (Full width) */}
          <div 
            ref={el => { cardsRef.current[2] = el; }}
            className="lg:col-span-3 p-4 lg:p-12 rounded-[32px] bg-[#111111] border border-white/5 hover:border-green-500/50 transition-all duration-500 group relative overflow-hidden hover:shadow-[0_0_60px_rgba(34,197,94,0.15)] hover:-translate-y-2 z-10"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10 justify-between">
               <div className="flex items-center gap-5">
                 <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/60 transition-colors shadow-inner shrink-0">
                   <span className="text-2xl font-black text-green-400">Tl</span>
                 </div>
                 <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Workflow & Tooling</h3>
               </div>
             </div>

             <div className="flex flex-wrap gap-3 lg:gap-4 relative z-10">
               {toolSkills.map(skill => {
                 const Icon = iconMap[skill];
                 return (
                   <span key={skill} className="px-5 py-2.5 bg-black/60 rounded-full text-white/70 group-hover:text-white border border-white/5 group-hover:border-green-500/30 font-medium transition-all tracking-wide flex items-center gap-2">
                     {Icon && <Icon className="text-green-500" />}
                     {skill}
                   </span>
                 );
               })}
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
