import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Job } from "@/components/Job";
import { Formation } from "@/components/Formation";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-dark text-light">
      <Header />
      <Job />
      <Formation />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
