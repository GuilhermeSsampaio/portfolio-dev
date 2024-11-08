import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
export const Contact = () => {
  return (
    <div className="contact content_section">
      <h2>Contato</h2>
      <p className="fs-4">Onde você pode me encontrar para um projeto?</p>
      <div className="container text-center">
        <div className="row">
          <a
            href="https://www.linkedin.com/in/guilhermessampaio"
            target="_blank"
            className="col text-decoration-none"
          >
            <FaLinkedin size={40} color="#FFFFFF" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=guilhermessampaio20@gmail.com"
            target="_blank"
            className="col text-decoration-none"
          >
            <SiGmail size={40} color="#FFFFFF" />
          </a>
          <a
            href="https://www.instagram.com/guilhermessampaio20"
            target="_blank"
            className="col text-decoration-none"
          >
            <RiInstagramFill size={40} color="#FFFFFF" />
          </a>
        </div>
      </div>
    </div>
  );
};
