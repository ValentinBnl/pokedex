import styles from "./PokemonImage.module.css";

const PokemonImage = ({ id, name }) => (
	<div className={styles.pokemonImageSection}>
		<img
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
			alt={name}
		/>
	</div>
);

export { PokemonImage };
