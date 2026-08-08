"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiGraphql, SiVercel, SiFramer, SiGreensock,
  SiRedux, SiHtml5, SiCss, SiJavascript, SiMongodb, SiExpress,
  SiFirebase, SiGithub, SiVite, SiFigma
} from "react-icons/si";

const techIcons = [
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "#FFFFFF" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiTailwindcss, color: "#38B2AC" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiGraphql, color: "#E10098" },
  { icon: SiVercel, color: "#FFFFFF" },
  { icon: SiFramer, color: "#0055FF" },
  { icon: SiGreensock, color: "#88CE02" },
  { icon: SiRedux, color: "#764ABC" },
  { icon: SiHtml5, color: "#E34F26" },
  { icon: SiCss, color: "#1572B6" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiExpress, color: "#FFFFFF" },
  { icon: SiFirebase, color: "#FFCA28" },
  { icon: SiGithub, color: "#FFFFFF" },
  { icon: SiVite, color: "#646CFF" },
  { icon: SiFigma, color: "#F24E1E" },
];

export default function Playground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bodiesRef = useRef<Matter.Body[]>([]);

  useEffect(() => {
    if (!sceneRef.current || typeof window === 'undefined') return;

    const Engine = Matter.Engine,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);
    const roof = Bodies.rectangle(width / 2, -500, width, 50, wallOptions);
    World.add(world, [ground, leftWall, rightWall, roof]);

    const tagBodies = techIcons.map((_, i) => {
      const w = 80; 
      const h = 80;
      const x = Math.random() * (width - 200) + 100;
      const y = -Math.random() * 800 - 100;
      return Bodies.rectangle(x, y, w, h, { 
        restitution: 0.7,
        friction: 0.1,
        render: { visible: false }
      });
    });

    World.add(world, tagBodies);
    bodiesRef.current = tagBodies;

    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    World.add(world, mouseConstraint);
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    const runner = Runner.create();
    
    ScrollTrigger.create({
      trigger: sceneRef.current,
      start: "top 80%",
      onEnter: () => Runner.run(runner, engine),
    });

    let animationFrame: number;
    const update = () => {
      tagBodies.forEach((body, i) => {
        const el = elementsRef.current[i];
        if (el) {
          el.style.transform = `translate(${body.position.x}px, ${body.position.y}px) rotate(${body.angle}rad) translate(-50%, -50%)`;
        }
      });
      animationFrame = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(animationFrame);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <section id="beyond-code" className="max-w-7xl mx-auto px-4 w-full py-[30px] lg:py-16">
      <div className="mb-8 lg:mb-12 animate-title flex justify-between items-end">
        <div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
            Beyond Code
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-accent-cyan" />
        </div>
        <button 
          onClick={() => {
            if (!bodiesRef.current.length || !sceneRef.current) return;
            const width = sceneRef.current.clientWidth;
            bodiesRef.current.forEach(body => {
              const x = Math.random() * (width - 200) + 100;
              const y = -Math.random() * 800 - 100;
              Matter.Body.setPosition(body, { x, y });
              Matter.Body.setVelocity(body, { x: 0, y: 0 });
              Matter.Body.setAngularVelocity(body, 0);
            });
          }}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-bold tracking-widest uppercase transition-colors"
        >
          Drop Again
        </button>
      </div>

      <div 
        ref={sceneRef} 
        id="beyond-code-scene"
        className="w-full h-[400px] lg:h-[500px] relative bg-[#050505] border border-white/10 rounded-[40px] overflow-hidden shadow-inner cursor-grab active:cursor-grabbing"
      >
        {techIcons.map((item, i) => (
          <div
            key={i}
            ref={(el) => { elementsRef.current[i] = el; }}
            className="absolute top-0 left-0 bg-white/5 border border-white/10 text-white flex items-center justify-center rounded-2xl select-none"
            style={{ 
              width: '80px',
              height: '80px',
              transformOrigin: 'center',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              color: item.color
            }}
          >
            <item.icon size={40} />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="text-[100px] lg:text-[150px] font-black uppercase tracking-tighter text-white text-center leading-none mix-blend-overlay">
            PLAY
          </span>
        </div>
      </div>
    </section>
  )
}
