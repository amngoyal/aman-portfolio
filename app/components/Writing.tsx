"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import { blogPosts } from "../data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Writing() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="writing" ref={sectionRef} className="py-24 px-4 max-w-5xl mx-auto">
      <div className="mb-16 animate-title">
        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 text-center">
          <AnimatedText text="Writing & Talks" direction="right" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto" />
      </div>

      <div className="flex flex-col border-t border-white/10">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.articleLink}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => { itemsRef.current[index] = el; }}
            className="group block py-8 border-b border-white/10 hover:bg-white/5 px-4 transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-accent-purple">{post.publishedAt}</span>
                  <span className="text-sm text-white/40">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="mt-2 text-white/60">{post.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {post.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
