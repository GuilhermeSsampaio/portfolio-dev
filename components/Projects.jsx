import { SiGithub } from "react-icons/si";
import { Cards } from "./Cards";

export const Projects = () => {
  return (
    <div className="projects content_section">
      <h2>Projetos</h2>
      <div className="row">
        <Cards
          imageCap="Projeto 1"
          title="Projeto 1"
          text="Descrição do projeto 1"
        />
        <Cards
          imageCap="Projeto 2"
          title="Projeto 2"
          text="Descrição do projeto 2"
        />
        <Cards
          imageCap="Projeto 3"
          title="Projeto 3"
          text="Descrição do projeto 3"
        />
      </div>
    </div>
  );
};
