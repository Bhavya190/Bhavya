import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
