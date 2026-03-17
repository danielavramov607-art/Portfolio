import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 text-center border-t border-white/8">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Daniel Avramov — Open to new opportunities
        </p>
      </footer>
      <ScrollToTop />
    </main>
  );
}
