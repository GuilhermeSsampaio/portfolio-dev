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
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const Skills = () => {
  return (
    <div className="skills content_section">
      <h2>Do que eu entendo?</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaHtml5 size={60} color="#E34F26" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaNodeJs size={60} color="#F7DF1E" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiNextdotjs size={60} color="#000000" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaPython size={60} color="#000000" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiMysql size={60} color="#4479A1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiMongodb size={60} color="#47A248" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaCss3Alt size={60} color="#2965F1" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiReact size={60} color="#61DAFB" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiStrapi size={60} color="#4945FF" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiDocker size={60} color="#2496ED" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <BiLogoPostgresql size={60} color="#336791" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiGit size={60} color="#F1502F" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <SiGithub size={60} color="#181717" />
          </div>
        </div>
      </div>
    </div>
  );
};
