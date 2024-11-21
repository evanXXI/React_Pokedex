import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="text-light text-center mt-auto py-1"
        style={{ fontSize: "0.9em" }}
      >
        <hr />
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-light">
              <strong>PokéDex v0.1</strong>
            </Link>
          </p>
          <p>
            Created with 💛 by <strong>Evan</strong>
          </p>
          <p>
            All Pokémon data &copy; Nintendo, Game Freak, and The Pokémon
            Company.
            <br />
            This is a fan-made project for educational and entertainment
            purposes.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
