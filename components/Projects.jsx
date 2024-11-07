import { SiGithub } from "react-icons/si";
import { Carousel } from "./Carousel";
export const Projects = () => {
  return (
    <div className="projects">
      <h2 className="col">Projetos</h2>
      <div className="d-flex align-itens-center">
        <p className="mb-0 me-2">Conheça meu git</p>
        <SiGithub size={20} color="#181717" />
      </div>
      <p>Algumas criações próprias e a serviço da Embrapa</p>
      <Carousel />
    </div>
  );
};
