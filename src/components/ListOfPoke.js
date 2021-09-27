import { useFech } from "../hooks/useFech";
import CardPokemons from "./CardPokemons";

const URL_IMG =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const ListOfPoke = ({ poke }) => {
  const { pokeDetails, isLoading } = useFech(poke.url);

  return (
    <>
      {pokeDetails && (
        <div className="card__poke">
          <h1 className="card__title">{pokeDetails.name}</h1>
          <div className="img__container">
            <img
              className="card__img"
              src={`${URL_IMG}/${pokeDetails.id}.svg`}
              alt={pokeDetails.name}
            />
          </div>
          <div className="card__type"></div>
        </div>
      )}
    </>
  );
};

export default ListOfPoke;
