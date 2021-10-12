import React from "react";
import { useState } from "react";
import { useFavorite } from "../../hooks/useFavorite";
import { useFech } from "../../hooks/useFech";
import ListOfPoke from "../listOfPoke/ListOfPoke";
import LoadingPoke from "../LoadingPoke/LoadingPoke";
import NavPages from "../navPages/NavPages";
import "./pokemons.css";



const Pokemons = () => {
  
  const [page, setPage] = useState(0);
  
  const {favs, handleFavs} = useFavorite();

  const { state, isLoading } = useFech(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=25`);

  const handlePages = (n) => {
    setPage(n * 25);
  };
  
  
  return (
    <>
      {!isLoading ? (
        <div className="container">
          {state.results.map((poke) => {
            return <ListOfPoke poke={poke} key={poke.name} handleFavs={handleFavs} favs={favs}/>;
          })}
        </div>
      ) : (
        <LoadingPoke/>
      )}
      <NavPages handlePages={handlePages} />
    </>
  );
};

export default Pokemons;
