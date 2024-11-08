import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
export const Contact = () => {
  return (
    <div className="contact content_section">
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
  );
};
