"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll(".bg-shape");

    shapes.forEach((shape) => {
      gsap.to(shape, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        rotation: "random(-45, 45)",
        duration: "random(10, 20)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#111111]"
    >
      {/* Cyan glow */}
      <div className="bg-shape absolute top-[10%] left-[10%] w-[300px] h-[300px] md:w-[30vw] md:h-[30vw] bg-accent-cyan/7 md:bg-accent-cyan/10 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen" />
      
      {/* Purple glow */}
      <div className="bg-shape absolute bottom-[10%] right-[10%] w-[350px] h-[350px] md:w-[40vw] md:h-[40vw] bg-accent-purple/7 md:bg-accent-purple/10 rounded-full blur-[90px] md:blur-[120px] mix-blend-screen" />

      {/* Abstract thin geometric lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {/* Large Triangle Left */}
        <polygon
          className="bg-shape"
          points="0,-100 86,50 -86,50"
          fill="none"
          stroke="var(--color-accent-cyan)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(20vw, 30vh)' }}
        />
        
        {/* Large Hexagon Right */}
        <polygon
          className="bg-shape"
          points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40"
          fill="none"
          stroke="var(--color-accent-cyan)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(85vw, 50vh)', opacity: 0.3 }}
        />

        {/* Medium Triangle Right */}
        <polygon
          className="bg-shape"
          points="0,-50 43,25 -43,25"
          fill="none"
          stroke="var(--color-accent-purple)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(80vw, 75vh)' }}
        />
        
        {/* Diamond Bottom */}
        <rect
          className="bg-shape"
          x="-50"
          y="-50"
          width="100"
          height="100"
          fill="none"
          stroke="var(--color-accent-cyan)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(50vw, 85vh) rotate(45deg)' }}
        />
        
        {/* Large Circle Left-Bottom */}
        <circle
          className="bg-shape"
          cx="0"
          cy="0"
          r="80"
          fill="none"
          stroke="var(--color-accent-purple)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(15vw, 75vh)', opacity: 0.5 }}
        />
        
        {/* Dots */}
        <circle
          className="bg-shape"
          cx="0"
          cy="0"
          r="4"
          fill="var(--color-accent-cyan)"
          style={{ transformOrigin: 'center', transform: 'translate(85vw, 20vh)' }}
        />
        <circle
          className="bg-shape"
          cx="0"
          cy="0"
          r="3"
          fill="var(--color-accent-purple)"
          style={{ transformOrigin: 'center', transform: 'translate(10vw, 20vh)' }}
        />
        <circle
          className="bg-shape"
          cx="0"
          cy="0"
          r="3"
          fill="var(--color-accent-cyan)"
          style={{ transformOrigin: 'center', transform: 'translate(50vw, 15vh)', opacity: 0.5 }}
        />

        {/* Crosses */}
        <path
          className="bg-shape"
          d="M 0,-15 L 0,15 M -15,0 L 15,0"
          fill="none"
          stroke="var(--color-accent-cyan)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(35vw, 85vh)' }}
        />
        <path
          className="bg-shape"
          d="M 0,-10 L 0,10 M -10,0 L 10,0"
          fill="none"
          stroke="var(--color-accent-purple)"
          strokeWidth="1"
          style={{ transformOrigin: 'center', transform: 'translate(75vw, 25vh)', opacity: 0.6 }}
        />
      </svg>
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
