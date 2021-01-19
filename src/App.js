import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Types from './components/Types';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import CaughtPokemon from './components/CaughtPokemon';
import axios from 'axios';
import { CaughtPokemonProvider } from './components/CaughtPokemonContext';


const GlobalStyle = createGlobalStyle`
  body, .card, .list-group-item, .navbar {
    background-color: ${props => 
      props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => 
      props.theme.mode === 'dark' ? '#EEE' : '#111'}
  }

  th, td{
    color: ${props => 
      props.theme.mode === 'dark' ? 'white' : 'black'}
  }
`;

const App = props => {

  const [pokemon, setPokemon] = useState([]);
  const [theme, setTheme] = useState({ mode: 'light' })

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => setPokemon(res.data.results));
  }, []);

  return (
    <CaughtPokemonProvider>
      <ThemeProvider theme = {theme}>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Header setTheme={setTheme}/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <PokemonList pokemon={pokemon}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About}></Route>

            <Route path="/caught" component={CaughtPokemon}></Route>

            <Route exact path="/detail" render={props => (
              <React.Fragment>
                <PokemonDetail></PokemonDetail>
              </React.Fragment>
            )}></Route>

            <Route path="/types" component={Types}></Route>   
          </div>
        </Router>
      </ThemeProvider>
    </CaughtPokemonProvider>
  );
}

export default App;
