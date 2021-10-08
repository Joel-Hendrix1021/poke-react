import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useFech } from "../../hooks/useFech";
import ListOfPoke from "../listOfPoke/ListOfPoke";
import LoadingPoke from "../LoadingPoke/LoadingPoke";
import NavPages from "../navPages/NavPages";
import "./pokemons.css";

const Pokemons = () => {
  const [pokes, setPokes] = useState([]);
  const [page, setPage] = useState(0);

  const { state, isLoading } = useFech(
    `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=25`
  );

  const handlePages = (n) => {
    setPage(n * 25);
  };
  // state.results.map((poke) => {
  //   return <ListOfPoke poke={poke} key={poke.name} />;
  // })
  return (
    <>
      {!isLoading ? (
        <div className="container">
          {state.results.map((poke) => {
            return <ListOfPoke poke={poke} key={poke.name} />;
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
