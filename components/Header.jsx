export const Header = () => {
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      section.classList.add("highlight-background");
      setTimeout(() => {
        section.classList.remove("highlight");
      }, 2000);
    }
  };

  return (
    <div className="header container-fluid text-center">
      <div className="row justify-content-center">
        <a
          href="#job"
          className="col mx-1 p-3 link-light text-decoration-none"
          // onClick={(e) => handleLinkClick(e, "job")}
        >
          <h1>Eu</h1>
        </a>
        <a
          href="#projects"
          className="col mx-1 p-3 link-light text-decoration-none"
          onClick={(e) => handleLinkClick(e, "projects")}
        >
          <h1>Projetos</h1>
        </a>
        <a
          href="#contact"
          className="col mx-1 p-3 link-light text-decoration-none ms-2"
          onClick={(e) => handleLinkClick(e, "contact")}
        >
          <h1>Contato</h1>
        </a>
      </div>
    </div>
  );
};
