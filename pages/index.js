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
    <div className="container-fluid">
      <div className="header container text-center">
        <div className="row align-itens-start">
          <h1 className="col">Eu</h1>
          <h1 className="col">Projetos</h1>
          <h1 className="col">Contato</h1>
        </div>
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
        <div className="what-i-know ">
          <h2>Do que eu entendo?</h2>
          <div className="container text-center">
            <div className="row">
              <FaHtml5 className="col" size={60} color="#E34F26" />
              <FaNodeJs className="col" size={60} color="#F7DF1E" />
              <SiNextdotjs className="col" size={60} color="#000000" />
              <FaPython className="col" size={60} color="#000000" />
              <SiMysql className="col" size={60} color="#4479A1" />
              <SiMongodb className="col" size={60} color="#47A248" />
            </div>
            <div className="row">
              <FaCss3Alt className="col" size={60} color="#2965F1" />
              <SiReact className="col" size={60} color="#61DAFB" />
              <SiStrapi className="col" size={60} color="#4945FF" />
              <SiDocker className="col" size={60} color="#2496ED" />
              <BiLogoPostgresql className="col" size={60} color="#336791" />
              <SiGit className="col" size={60} color="#F1502F" />
              <SiGithub className="col" size={60} color="#181717" />
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="row">
            <h2 className="col">Projetos</h2>
            <p className="col">Conheça meu git</p>
            <SiGithub className="col-1" size={20} color="#181717" />
          </div>
          <p>Algumas criações próprias e a serviço da Embrapa</p>
          <div className="carrousel">Carrossel de imagens de projetos</div>
        </div>
        <div className="contact">
          <h2>Contato</h2>
          <p>Onde você pode me encontrar para um projeto?</p>
          <div className="container text-center">
            <div className="row">
              <FaLinkedin className="col" size={40} color="#00000" />
              <SiGmail className="col" size={40} color="#00000" />
              <RiInstagramFill className="col" size={40} color="#00000" />
            </div>
          </div>
        </div>
      </div>
      <div className="Footer">©️Guilherme Sampaio 2024</div>
    </div>
  );
}
