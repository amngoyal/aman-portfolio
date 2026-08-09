"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * A custom hook to easily fade and slide elements in as they scroll into view.
 * @param ref The React ref of the element (or array of elements) to animate.
 * @param options Animation and ScrollTrigger configuration options.
 */
export function useScrollReveal(
  ref: React.RefObject<Element | null> | React.RefObject<Element | null>[] | React.MutableRefObject<(Element | null)[]>,
  options: {
    y?: number | string;
    x?: number | string;
    opacity?: number;
    scale?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    start?: string;
    markers?: boolean;
    matchMedia?: boolean;
  } = {}
) {
  useLayoutEffect(() => {
    // Collect targets whether it's a single ref, an array of refs, or a ref containing an array
    let targets: Element[] = [];
    
    if (Array.isArray(ref)) {
      targets = ref.map((r) => r.current).filter((el): el is Element => el !== null);
    } else if (Array.isArray(ref.current)) {
      targets = ref.current.filter((el): el is Element => el !== null);
    } else if (ref.current) {
      targets = [ref.current];
    }

    if (targets.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const {
      y = 50,
      x = 0,
      opacity = 0,
      scale = 1,
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      ease = "power3.out",
      start = "top 85%",
      markers = false,
      matchMedia = true,
    } = options;

    const setupAnimation = () => {
      return gsap.fromTo(
        targets,
        { y, x, opacity, scale },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: targets[0],
            start,
            toggleActions: "play none none reverse",
            markers,
          },
        }
      );
    };

    let mm: gsap.MatchMedia;
    
    if (matchMedia) {
      mm = gsap.matchMedia();
      // Only run the reveal animation if the user doesn't prefer reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        setupAnimation();
      });
      return () => mm.revert();
    } else {
      const anim = setupAnimation();
      return () => anim.kill();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, JSON.stringify(options)]); 
}
