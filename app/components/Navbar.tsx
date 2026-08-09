"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks } from "../data";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const resumeLink = "https://drive.google.com/drive/folders/13-ed-g1u9CIfvGYYAkyZk4sFQUf8Mw_B";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down (moving down the page)
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up (moving towards the top of the page)
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5, clearProps: "all" }
    );
    // Listen for custom nav theme events dispatched by specific sections (like Testimonials Orbit)
    const handleNavTheme = (e: Event) => {
      const customEvent = e as CustomEvent<{ dark: boolean }>;
      setIsDark(customEvent.detail.dark);
    };
    
    window.addEventListener("nav-theme", handleNavTheme);
    
    return () => {
      window.removeEventListener("nav-theme", handleNavTheme);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 backdrop-blur-md border-b transition-all duration-300 ${
        isDark ? "bg-black/5 border-black/10" : "bg-white/5 border-white/10"
      } ${isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="flex items-center justify-between w-full">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`text-xl font-bold tracking-tighter transition-colors cursor-pointer ${isDark ? "text-black hover:text-black/80" : "text-white hover:text-white/80"}`}
        >
          AG.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors ${isDark ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
              >
                {link.title}
              </a>
            ))}
          </nav>
          
          <div className={`ml-8 flex items-center gap-4 border-l pl-8 transition-colors duration-300 ${isDark ? "border-black/10" : "border-white/10"}`}>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors ${isDark ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${isDark ? "bg-black/5 hover:bg-black/10 border-black/10 text-black" : "bg-white/10 hover:bg-white/20 border-white/10 text-white"}`}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`lg:hidden text-2xl transition-colors ${isDark ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <nav className={`flex flex-col gap-4 py-4 border-t transition-colors ${isDark ? "border-black/10" : "border-white/10"}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-sm font-medium transition-colors ${isDark ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
            >
              {link.title}
            </a>
          ))}
          <div className={`flex items-center gap-4 mt-4 pt-4 border-t transition-colors ${isDark ? "border-black/10" : "border-white/10"}`}>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex-1 text-center py-2 border border-white/10 rounded-full bg-white/5"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors flex-1 text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
