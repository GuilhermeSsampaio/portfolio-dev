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

export const Skills = () => {
  return (
    <div className="skills ">
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
  );
};
