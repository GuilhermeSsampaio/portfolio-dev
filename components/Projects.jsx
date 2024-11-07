import { SiGithub } from "react-icons/si";
import { Carousel } from "./Carousel";
export const Projects = () => {
  return (
    <div className="projects">
      <h2 className="col">Projetos</h2>
      <div className="">
        <p className="col-6">Conheça meu git</p>
        <SiGithub className="col-6" size={20} color="#181717" />
      </div>
      <p>Algumas criações próprias e a serviço da Embrapa</p>
      <Carousel />
    </div>
  );
};
