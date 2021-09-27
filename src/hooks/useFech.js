import { useEffect, useState } from "react";

export  function useFech(url) {
    const [pokeDetails, setPokeDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    

  useEffect(() => {
    
    getInfoPoke(url)
    .then(res=> setPokeDetails(res))
  
  }, [url]);

 
  const getInfoPoke = async (n) => {
    const res = await fetch(n);
    const poke = res.json();
    
    return poke;
  };
  return { pokeDetails }
}
