import "./header.css";
import { Link,useHistory } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [keyword, setKeyword] = useState(null)
  const history = useHistory()

  const handleKeyword=(e)=> {
    e.preventDefault()
    
    history.push(`/poke/${keyword}`)
  }
 

  return (
    <header>
      <h1 className="header__title">Poke-React</h1>
      <div className="container__form">
        <form className="form" onSubmit={handleKeyword}>
          <input type="text" onChange={(e)=> setKeyword(e.target.value)}/>
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
