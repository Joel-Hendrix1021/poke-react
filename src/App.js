import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

import Pokemons from "./components/pokemons/Pokemons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Type from "./pages/type/Type";
import TypePoke from "./components/typePoke/TypePoke";
import { useState } from "react";
import FavsPages from "./pages/favsPages/FavsPages";



function App() {
  const local = localStorage.getItem("favs")
  const [favs, setFavs] = useState(local? local.split(",").map(item=> Number(item)):[])


  const  handleFavs = (id)=> {
    if(favs.includes(id)){
      setFavs(favs.filter(f=> f !== id))
    }else {
     setFavs((favs)=> [...favs, id])
    }
 }
 
 localStorage.setItem("favs", favs)


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={TypePoke} path="/type/:id" />
          <Route component={Type} path="/type" />
          <Route component={FavsPages}  path="/favs" />
          <Route component={Pokemons} path="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
