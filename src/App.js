import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Types from './components/Types';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import PokemonDetail from './components/PokemonDetail';


const App = props => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => setPokemon(res.data.results));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <PokemonList pokemon={pokemon}/>
          </React.Fragment>
        )} />

        <Route path="/about" component={About}></Route>

        <Route exact path="/detail" render={props => (
          <React.Fragment>
            <PokemonDetail></PokemonDetail>
          </React.Fragment>
        )}></Route>

        <Route path="/types" component={Types}></Route>   
      </div>
    </Router>
  );
}

export default App;
