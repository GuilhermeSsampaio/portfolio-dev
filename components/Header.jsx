export const Header = () => {
  return (
    <div className="header container-fluid text-center">
      <div className="row justify-content-center">
        <a href="#job" className="col mx-1 p-3 link-light text-decoration-none">
          <h1>Eu</h1>
        </a>
        <a
          href="#projects"
          className="col mx-1 p-3 link-light text-decoration-none"
        >
          <h1>Projetos</h1>
        </a>
        <a
          href="#contact"
          className="col mx-1 p-3 link-light text-decoration-none ms-2"
        >
          <h1>Contato</h1>
        </a>
      </div>
    </div>
  );
};
