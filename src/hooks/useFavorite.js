import { useState } from "react";

export function useFavorite(){
    const local = localStorage.getItem("favs")
    const [favs, setFavs] = useState(local? local.split(",").map(item=> Number(item)):[])

   const handleFavs=(id)=> {
    if(favs.includes(id)){
        setFavs(favs.filter(f=> f !== id))
      }else {
       setFavs((favs)=> [...favs, id])
  
      }
   }
 
   localStorage.setItem("favs", favs)

   return {favs , handleFavs}
}