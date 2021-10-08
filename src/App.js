import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

import Pokemons from "./components/pokemons/Pokemons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favs from "./pages/Favs";
import Type from "./pages/type/Type";
import TypePoke from "./components/typePoke/TypePoke";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={TypePoke} path="/type/:id" />
          <Route component={Type} path="/type" />
          <Route componen={Favs} path="/favs" />
          <Route component={Pokemons} path="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
