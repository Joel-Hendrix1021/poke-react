import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

import Pokemons from "./components/pokemons/Pokemons";



function App() {

  return (
      <div className="App">
        <Header/>
        <Pokemons />
        <Footer/>
      </div>
  );
}

export default App;
