import {
  SiMysql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiStrapi,
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
} from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import React, { useState, useEffect } from "react";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      icon: <FaHtml5 size={60} color="#E34F26" />,
      name: "HTML5",
      description: "Linguagem de marcação para a web",
    },
    {
      icon: <FaNodeJs size={60} color="#F7DF1E" />,
      name: "Node.js",
      description: "Ambiente de execução JavaScript",
    },
    {
      icon: <SiNextdotjs size={60} color="#000000" />,
      name: "Next.js",
      description: "Framework React para produção",
    },
    {
      icon: <FaPython size={60} color="#000000" />,
      name: "Python",
      description: "Linguagem de programação versátil",
    },
    {
      icon: <SiMysql size={60} color="#4479A1" />,
      name: "MySQL",
      description: "Sistema de gerenciamento de banco de dados",
    },
    {
      icon: <SiMongodb size={60} color="#47A248" />,
      name: "MongoDB",
      description: "Banco de dados NoSQL",
    },
    {
      icon: <FaCss3Alt size={60} color="#2965F1" />,
      name: "CSS3",
      description: "Folhas de estilo em cascata",
    },
    {
      icon: <SiReact size={60} color="#61DAFB" />,
      name: "React",
      description: "Biblioteca JavaScript para interfaces",
    },
    {
      icon: <SiStrapi size={60} color="#4945FF" />,
      name: "Strapi",
      description: "CMS headless",
    },
    {
      icon: <SiDocker size={60} color="#2496ED" />,
      name: "Docker",
      description: "Plataforma de containers",
    },
    {
      icon: <BiLogoPostgresql size={60} color="#336791" />,
      name: "PostgreSQL",
      description: "Sistema de gerenciamento de banco de dados",
    },
    {
      icon: <SiGit size={60} color="#F1502F" />,
      name: "Git",
      description: "Sistema de controle de versão",
    },
    {
      icon: <SiGithub size={60} color="#181717" />,
      name: "GitHub",
      description: "Hospedagem de código-fonte",
    },
    {
      icon: <SiJavascript size={60} color="#F7DF1E" />,
      name: "JavaScript",
      description: "Linguagem de programação para a web",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedSkill !== null && !event.target.closest(".skill.selected")) {
        setSelectedSkill(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedSkill]);

  return (
    <div className="skills content_section">
      <h2>Do que eu entendo?</h2>
      <div className="container text-center">
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`col-6 col-md-4 col-lg-2 mb-4 skill ${
                selectedSkill === index ? "selected" : ""
              }`}
              onClick={() => setSelectedSkill(index)}
            >
              {skill.icon}
              {selectedSkill === index && (
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
