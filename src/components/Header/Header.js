import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="header__title">Poke-React</h1>
      <div className="container__form">
        <form className="form">
          <input type="text" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <nav className="nav">
        <Link to="/">
          <i className="fas fa-home"></i>Home
        </Link>
        <Link to="/type">
          <i className="fas fa-globe"></i>Type
        </Link>
        <Link to="/favs">
          <i className="fas fa-heart"></i>favorite
        </Link>
      </nav>
    </header>
  );
};

export default Header;
