import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import MiniProjects from "@/components/MiniProjects";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return(
    <div>
      <HeroSection />
      <Skills />
      <Projects />
      <MiniProjects />
      <Contact />
    </div>
  );
}