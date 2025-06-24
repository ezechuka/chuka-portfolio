import Contact from "@/sections/Contact";
import About from "@/sections/About";
import { Footer } from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";
import TestimonialsSection from "@/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <TestimonialsSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
