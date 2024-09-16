import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonListV2 from './components/PokemonListRaiz/PokemonListV2';

function App() {
  return (
    <div className="App">      
      <PokemonList/>
      <PokemonListV2/>
    </div>
  );
}

export default App;
