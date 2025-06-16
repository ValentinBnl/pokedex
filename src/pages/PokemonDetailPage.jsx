import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPokemonById } from "../utils/fetch";
import { PKMN_TYPES } from "../constants/constants";
import { Header } from "../components/Header";

const PokemonDetailPage = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		async function getPokemon() {
			try {
				const data = await fetchPokemonById(id);
				setPokemon(data);
			} catch (error) {
				console.error("Error in PokemonDetailPage:", error);
			}
		}

		getPokemon();
	}, [id]);

	if (!pokemon) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Header />
			<h1>{pokemon.name}</h1>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
				alt={pokemon.name}
			/>
			<div>
				{pokemon.types.map((type) => {
					const typeData = PKMN_TYPES.find(
						(t) => t.name.toLowerCase() === type.toLowerCase()
					);
					return <span key={type}>{type}</span>;
				})}
			</div>
		</>
	);
};

export { PokemonDetailPage };
