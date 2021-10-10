import { useFech } from "../../hooks/useFech";
import { backgroundType } from "../../lib/colorType";

import "./modal.css";

const URL_EVOLUTIONS = "https://pokeapi.co/api/v2/evolution-chain/";
const URL_IMG =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const Modal = ({ poke, setShowModal }) => {
  const handleCloseClick = () => {
    setShowModal(false);
  };

  console.log(poke);
  return (
    <div
      className="modal__container"
      style={{
        backgroundImage: `${backgroundType[`${poke.types[0].type.name}`]}`,
      }}
    >
      <button className="modal__close" onClick={handleCloseClick}>
        x
      </button>
      <img
        className="modal__img"
        src={`${URL_IMG}${poke.id}.svg`}
        alt={poke.name}
      />
      <h1 className="modal__title">{poke.name}</h1>
      <div className="modal__info">
        {poke.stats.map((item) => {
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
      <div className="modal__poke__body">
        <div className="modal__poke__item">
          <p>Height</p>
          <p>{poke.height/10} mts</p>
        </div>
        <div className="modal__poke__item">
          <p>Weight</p>
          <p>{poke.weight/10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// <i class="fas fa-shield-alt"></i> defense
// <i class="fas fa-tachometer-alt"></i> speed
// <i class="far fa-hand-rock"></i>attack
// <i class="fas fa-magic"></i>hp
//<i class="fas fa-meteor"></i>special-attack
//<i class="fas fa-transporter-2"></i>special-defense
