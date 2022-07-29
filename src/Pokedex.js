import React from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';
import pokelist from './pokelist';
const PokeDex = ({ info }) => {
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-header">PokeDex!</h1>
			<section className="Pokedex-container">
				{info.map((p) => <PokeCard key={p.id} name={p.name} type={p.type} image={p.id} />)}
			</section>
		</div>
	);
};
export default PokeDex;
