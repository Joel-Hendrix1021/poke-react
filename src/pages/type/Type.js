import { Link } from "react-router-dom";
import { useFech } from "../../hooks/useFech";
import { colorType } from "../../lib/colorType";
import LoadingPoke from '../../components/LoadingPoke/LoadingPoke'
import "./type.css";

const Type = () => {
  const { state, isLoading } = useFech("https://pokeapi.co/api/v2/type");

  return (
    <>
      {!isLoading ? (
        <div className="container">
          {state.results.map((type) => {
            return (
              <div
                className="card__type"
                key={type.name}
                style={{ background: colorType[`${type.name}`] }}
              >
                <Link to={`/type/${type.url.split("/")[6]}`}>
                  <img
                    className="card__logo__type"
                    src={`/type/${type.name}.png`}
                    alt={type.name}
                  />
                </Link>
                <Link to={`/type/${type.url.split("/")[6]}`}>
                  <p className="type_text">{type.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingPoke/>
      )}
    </>
  );
};

export default Type;
