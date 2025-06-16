import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";
import { PKMN_TYPES } from "../constants/constants";

const PokemonCard = ({ pokemon }) => {
	const getTypeColor = (type) => {
		const match = PKMN_TYPES.find(
			(t) => t.name.toLowerCase() === type.toLowerCase()
		);
		return match ? match.color : "#888";
	};

	return (
		<Link
			to={`/pokemon/${pokemon.id}`}
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<div className={styles.pokemonCard}>
				<img
					className={styles.pokemonImage}
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
					alt={pokemon.name}
				/>
				<div className={styles.pokemonName}>
					#{pokemon.id} {pokemon.name}
				</div>
				<div className={styles.pokemonTypes}>
					{pokemon.types.map((type) => (
						<span
							key={type}
							className={styles.pokemonTypeBadge}
							style={{ backgroundColor: getTypeColor(type) }}
						>
							{type}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export { PokemonCard };
