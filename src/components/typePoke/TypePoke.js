import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFavorite } from "../../hooks/useFavorite";
import { useFech } from "../../hooks/useFech";
import { cutArray } from "../../lib/cutArray";

import ListOfPoke from "../listOfPoke/ListOfPoke";
import LoadingPoke from "../LoadingPoke/LoadingPoke";
import NavPages from "../navPages/NavPages";

const TypePoke = () => {
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [cutArrays, setCutArrays] = useState([]);
  const { state, isLoading } = useFech(`https://pokeapi.co/api/v2/type/${id}`);

  const { favs, handleFavs } = useFavorite();

  useEffect(() => {
    setPage(0);
  }, [id]);

  const handlePages = (n) => {
    if (cutArrays.length > 0) {
      return setPage(n);
    }
    setPage(n * 25);
  };

  useEffect(() => {
    if (state.length !== 0) {
      const newArray = cutArray(state.pokemon);
      setCutArrays(newArray);

    }
  }, [state]);

  return (
    <>
      {cutArrays.length > 0 ? (
        <>
          <div className="container">
            {cutArrays[page].map((poke) => {
              return (
                <ListOfPoke
                  poke={poke.pokemon}
                  key={poke.pokemon.name}
                  handleFavs={handleFavs}
                  favs={favs}
                />
              );
            })}
          </div>
          <NavPages handlePages={handlePages} cutArrays={cutArrays}/> 
        </>
      ) : (
        <LoadingPoke />
      )}
    </>
  );
};

export default TypePoke;

{
  /* <div className="container">
        {cutArrays.length > 0 ? (
          cutArrays[page].map((poke) => {
            
            return <ListOfPoke poke={poke.pokemon} key={poke.pokemon.name} />;
          })
        ) : (
          <h1>cargando....</h1>
        )}
      </div>
      <NavPages handlePages={handlePages} cutArrays={cutArrays}/> */
}
