import { SiGithub } from "react-icons/si";
import { Cards } from "./Cards";
export const Projects = () => {
  return (
    <div className="projects content_section">
      <h2>Projetos</h2>
      <div className="d-flex align-itens-center">
        <p className="mb-0 me-2 fs-4">Conheça meu git</p>
        <SiGithub size={30} color="#181717" />
      </div>
      <p className="fs-5">Algumas criações próprias e a serviço da Embrapa</p>
      <Cards />
    </div>
  );
};
