import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return(
    <div>
      <HeroSection />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
