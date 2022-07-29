import React from 'react';
import logo from './logo.svg';
import PokeCard from './PokeCard';
import PokeDex from './Pokedex';
import pokelist from './pokelist';
import './App.css';

function App() {
	return (
		<div>
			<PokeDex info={pokelist} />
		</div>
	);
}

export default App;
