import { useState } from "react";
import { Link } from "react-router-dom";
import { useFech } from "../../hooks/useFech";
import { backgroundType, colorType } from "../../lib/colorType";
import Modal from "../modal/Modal";
import "./listOfPoke.css";

const URL_IMG =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const URL_IMG_2 =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const ListOfPoke = ({ poke }) => {
  const { state, isLoading } = useFech(poke.url);
  const [showModal, setShowModal] = useState(false)
  const [favs, setFavs] = useState(true)

  const handleBanner = ()=> {
    console.log("banner")
    setShowModal(true)
  }

  // backgroundType[`${state.types[0].type.name}`]
  
  // 

  return (
    <>
      {showModal ? <Modal poke={state} setShowModal={setShowModal}/>: null}
      {state.length !== 0 && (
        <div className="card__poke" style={{ backgroundImage:`${backgroundType[`${state.types[0].type.name}`]}`  }}>
         {favs 
         ?<span onClick={()=>setFavs(!favs)} className="fas fa-heart fav"></span>
         :<span onClick={()=>setFavs(!favs)} className="far fa-heart fav_not"></span>}
          
          
          <div className="img__container">
            {state.sprites.other.dream_world.front_default !== null ? (
          
              <img
                className="card__img"
                src={`${URL_IMG}/${state.id}.svg`}
                alt={state.name}
                onClick={handleBanner}
              />
            ) : (
              <img
                className="card__img"
                src={`${URL_IMG_2}/${state.id}.png`}
                alt={state.name}
                onClick={handleBanner}
              />
            )}
            
          </div>
          <p className="card__title">{state.name}</p>
          <div className="poke__type">
            {state.types ? (
              state.types.map((item) => {

                return (
                  <Link key={item.type.name} to={`/type/${item.type.url.split("/")[6]}`}>
                    <img
                      
                      className="card__logo__type"
                      src={`/type/${item.type.name}.png`}
                      alt=""
                    />
                  </Link>
                );
              })
            ) : (
              <h1>cargando..</h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ListOfPoke;
