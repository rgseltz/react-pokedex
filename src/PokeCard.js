import React from 'react';
import './PokeCard.css';

const PokeCard = ({ name, type, image }) => {
	return (
		<div className="PokeCard">
			<h2 className="PokeCard-header">{name}</h2>
			<img
				className="PokeCard-image"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`}
			/>

			<h3 className="PokeCard-type">Type:{type}</h3>
		</div>
	);
};

export default PokeCard;
