import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
	return (
		<Link
			to={`/pokemon/${pokemon.id}`}
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<div>
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
					alt={pokemon.name}
				/>
				<h3>{pokemon.name}</h3>
				<div>
					{pokemon.types.map((type) => (
						<span key={type}>{type}</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export { PokemonCard };
