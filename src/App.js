import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

import Pokemons from "./components/pokemons/Pokemons";
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import Type from "./pages/type/Type";
import TypePoke from "./components/typePoke/TypePoke";
import FavsPages from "./pages/favsPages/FavsPages";
import SinglePoke from "./pages/SinglePoke"
import Error404 from "./pages/Error404";





function App() {
  
   return (
    <div className="App">
      <BrowserRouter basename="/poke-react">
        <Header />
        <Switch>
        <Route component={Pokemons} exact path="/" />
          <Route component={TypePoke} path="/type/:id" />
          <Route component={Type} path="/type" />
          <Route component={FavsPages}  path="/favs" />
          <Route component={SinglePoke} path="/poke/:keyword" />
          <Route component={Error404} path="*" />
        </Switch>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

