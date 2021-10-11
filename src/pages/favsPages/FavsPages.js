

import ListOfPoke from "../../components/listOfPoke/ListOfPoke"
import { useFavorite } from "../../hooks/useFavorite"
import { useFech } from "../../hooks/useFech"

const URL = "https://pokeapi.co/api/v2/pokemon"

const FavsPages = () => {
    const {favs, handleFavs}=useFavorite()

 
    return (
        <div className="container">
            {favs.map((poke) => {
            return <ListOfPoke poke={`${URL}/${poke}`} key={poke} handleFavs={handleFavs} favs={favs}/>;
          })}
        </div>
    )
}

export default FavsPages

