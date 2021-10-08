import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFech } from "../../hooks/useFech";
import { cutArray } from "../../lib/cutArray";

import ListOfPoke from "../listOfPoke/ListOfPoke";
import NavPages from "../navPages/NavPages";

const TypePoke = () => {

  const { id } = useParams();
  const [page, setPage] = useState(0)
  const [cutArrays, setCutArrays] = useState([])
  const { state, isLoading } = useFech(`https://pokeapi.co/api/v2/type/${id}`);

  useEffect(() => {
    setPage(0)
  }, [id])

  const handlePages=(n)=> {
    if(cutArrays.length > 0){
      return setPage(n)
    }
    setPage((n*25)) 
  }
 
  useEffect(() => {
    if(state.length !== 0) {
     const newArray = cutArray(state.pokemon)
     setCutArrays(newArray)
    }
  }, [state])

  return (
    <>
      <div className="container">
        {cutArrays.length > 0 ? (
          cutArrays[page].map((poke) => {
            
            return <ListOfPoke poke={poke.pokemon} key={poke.pokemon.name} />;
          })
        ) : (
          <h1>cargando....</h1>
        )}
      </div>
      <NavPages handlePages={handlePages} cutArrays={cutArrays}/>
    </>
  );
};

export default TypePoke;
