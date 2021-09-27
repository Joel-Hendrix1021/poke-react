import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";



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
