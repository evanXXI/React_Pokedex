import { Link } from "react-router-dom";
import pokedexLogo from "../images/Pokedex_logo.png";

const Hero = () => {
  return (
    <>
      <section className="row bg-light rounded-bottom mb-5 ms-0 me-0">
        <div className="d-flex justify-content-center py-2">
          <Link
            className="d-flex flex-column text-decoration-none text-dark"
            to="./"
          >
            <img src={pokedexLogo} className="img-fluid" alt="pokedexLogo" />
            <small className="ms-2 fw-bold">(v0.1)</small>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
