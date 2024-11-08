import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Job } from "@/components/Job";
import { Formation } from "@/components/Formation";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import ArrowUp from "@/components/ArrowUp";

export default function Home() {
  return (
    <div className="bg-dark text-light">
      <Header />
      <section id="job" className="content_section">
        <Job />
      </section>
      <section id="formation">
        <Formation />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ArrowUp />
      <Footer />
    </div>
  );
}
