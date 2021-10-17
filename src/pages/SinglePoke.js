
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingPoke from "../components/LoadingPoke/LoadingPoke";
import { useFech } from "../hooks/useFech";
import { backgroundType } from "../lib/colorType";
import Error404 from "./Error404";

import "./singlePoke.css";

const URL_IMG =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const SinglePoke = () => {
  const { keyword } = useParams();
  const history = useHistory();

  const { state, isLoading, isError } = useFech(
    `https://pokeapi.co/api/v2/pokemon/${keyword}`
  );

  useEffect(() => {
    if(isError) {
      history.push('/*')
    }
  }, [isError])
  
  if(isError) {
    return <Error404/>
  }

  return !isError && isLoading ? (
    <LoadingPoke />
  ) : (
    <>
    <div
      className="container flex"
      style={{
        backgroundImage: `${backgroundType[`${state.types[0].type.name}`]}`,
      }}
    >
      <div className="col">
        <img
          className="single__img "
          src={`${URL_IMG}${state.id}.svg`}
          alt={state.name}
        />
        <div className="single__img__type">
          {state.types ? (
            state.types.map((item) => {
              return (
                <Link
                  key={item.type.name}
                  to={`/type/${item.type.url.split("/")[6]}`}
                >
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
        <h1 className="single__title">{state.name}</h1>
      </div>
      <div className="col col__lef">
        <div className="single__info">
          {state.stats.map((item) => {
            return (
              <div className="modal__info--item" key={item.stat.name}>
                <p className="modal__item__name">{item.stat.name}</p>
                <p className="modal__item__num">{item.base_stat}</p>
                <p className="modal__barPower">
                  <span style={{ width: `${item.base_stat}%` }}></span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default SinglePoke;
