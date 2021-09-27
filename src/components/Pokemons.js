import React, { useEffect } from "react";
import { useState } from "react";
import ListOfPoke from "./ListOfPoke";


const Pokemons = () => {
    
    const [pokes, setPokes] = useState([])
    
    useEffect(() => {
       
       getPokes()
       .then(poke=> setPokes(poke.results))
    }, [])

    const getPokes = async() => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        const poke = res.json()
        return poke
    }

    return (
        <div className="container">
            {
                pokes.length > 0 
                ? pokes.map(poke=> {
                    return <ListOfPoke poke={poke} key={poke.name}/>
                })
                : <h1>cargando....</h1>
            }
        </div>
    )
}

export default Pokemons
