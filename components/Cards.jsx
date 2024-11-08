export const Cards = ({ imageCap, title, text }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
      <div
        className="card  bg-dark text-white"
        style={{ maxWidth: "18rem", width: "100%" }}
      >
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image cap"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            {imageCap}
          </text>
        </svg>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fs-4">{text}</p>
          <a href="#" className="btn btn-primary">
            Conhecer
          </a>
        </div>
      </div>
    </div>
  );
};
