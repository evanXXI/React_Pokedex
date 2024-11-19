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
            <a className="text-decoration-none text-light" href="./">
              <strong>PokéDex v0.1</strong>
            </a>
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
