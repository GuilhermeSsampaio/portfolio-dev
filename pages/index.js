import {
  SiMysql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiStrapi,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>Eu</h1>
        <h1>Projetos</h1>
        <h1>Contato</h1>
      </div>
      <div className="content">
        <div className="job">
          <h2>Desenvolvedor Web</h2>
          <ul>
            <li>Desenvolvimento websites</li>
            <li>Desenvolvimento APIs</li>
            <li>Manutenção e hospedagem (mediante a mensalidade)</li>
          </ul>
        </div>
        <div className="my-formation">
          <h2>Minha Formação</h2>
          <ul>
            <li>Técnico Em Informática Para Internet - IFMS (2022)</li>
            <li>Bacharelado em Sistemas de Informação - UFGD (Em curso)</li>
          </ul>
        </div>
        <div className="experience">
          <h2>Experiência Profissional</h2>
          <p>Estagiário como Desenvolvedor web na Embrapa (2023 - 2024)</p>
        </div>
        <div className="what-i-know">
          <h2>Do que eu entendo?</h2>
          <FaHtml5 size={60} color="#E34F26" />
          <FaNodeJs size={60} color="#F7DF1E" />
          <SiNextdotjs size={60} color="#000000" />
          <FaPython size={60} color="#000000" />
          <SiMysql size={60} color="#4479A1" />
          <SiMongodb size={60} color="#47A248" />
          <FaCss3Alt size={60} color="#2965F1" />
          <SiReact size={60} color="#61DAFB" />
          <SiStrapi size={60} color="#4945FF" />
          <SiDocker size={60} color="#2496ED" />
          <BiLogoPostgresql size={60} color="#336791" />
          <SiGit size={60} color="#F1502F" />
          <SiGithub size={60} color="#181717" />
        </div>
        <div className="projects">
          <div className="ajustar-titulo">
            <h2>Projetos</h2>
            <p>Conheça meu git</p>
            <SiGithub size={20} color="#181717" />
          </div>
          <p>Algumas criações próprias e a serviço da Embrapa</p>
          <div className="carrousel">Carrossel de imagens de projetos</div>
        </div>
        <div className="contact">
          <h2>Contato</h2>
          <p>Onde você pode me encontrar para um projeto?</p>
          <FaLinkedin size={40} color="#00000" />
          <SiGmail size={40} color="#00000" />
          <RiInstagramFill size={40} color="#00000" />
        </div>
      </div>
      <div className="Footer">©️Guilherme Sampaio 2024</div>
    </div>
  );
}
