import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/hero/Stats";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
