import { SiGithub } from "react-icons/si";
import { Cards } from "./Cards";

export const Projects = () => {
  var LogoTecnofam = require("../public/logo-256x256.png");

  return (
    <div className="projects content_section">
      <h2>Projetos</h2>
      <div className="row">
        <Cards
          imageCap="Tecnofam App"
          title="Tecnofam App"
          text="Cartilha da agricultura familiar desenvolvida em conjunto com a Embrapa, que consome dados de uma API feita com Strapi JS."
          imageSrc={LogoTecnofam}
          link="https://tecnofamapp.cpao.embrapa.br/home"
        >
          <p>Desenvolvido em colaboração com Pedro Mota.</p>
        </Cards>
        {/* <Cards
          imageCap="Projeto 2"
          title="Projeto 2"
          text="Descrição do projeto 2"
          imageSrc="/public/logo2.png"
        />
        <Cards
          imageCap="Projeto 3"
          title="Projeto 3"
          text="Descrição do projeto 3"
          imageSrc="/public/logo3.png"
        /> */}
      </div>
    </div>
  );
};
