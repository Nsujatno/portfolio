import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Playground from "@/components/Playground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return(
    <div>
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Playground />
      <Education />
      <Contact />
    </div>
  );
}
