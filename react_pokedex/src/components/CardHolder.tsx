import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

interface Pokemon {
  id: number;
  url: string;
  name: string;
}

const CardHolder = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=800"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon data.");
        }

        const data = await response.json();

        let newPokemonData: Pokemon[] = data.results.map(
          (pokemon: { name: string }, index: number) => {
            return {
              id: index + 1,
              url: imgSrc + (index + 1) + ".png",
              name: pokemon.name,
            };
          }
        );

        setPokemonData(newPokemonData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4 border border-success rounded m-0 pb-5 mb-5">
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="col">
            <div className="card">
              <img
                src={pokemon.url}
                className="card-img-top"
                alt={pokemon.name}
                style={{
                  maxHeight: "150px",
                  aspectRatio: "1/1",
                  objectFit: "contain",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">ID: {pokemon.id}</p>
                <Link to="./pokemonDetails" className="stretched-link" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CardHolder;
