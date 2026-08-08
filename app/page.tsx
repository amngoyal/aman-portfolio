import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Playground from "./components/Playground";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Playground />
      <Writing />
      <Contact />
    </main>
  );
}
