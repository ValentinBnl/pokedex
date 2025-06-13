import { useState, useEffect } from "react";
import { fetchPokemons } from "../utils/fetch";
import { PokemonCard } from "../components/PokemonCard";
import { Header } from "../components/Header";

const HomePage = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function getPokemons() {
			try {
				const data = await fetchPokemons();
				setPokemons(data);
			} catch (error) {
				console.error("Error in HomePage:", error);
			}
		}

		getPokemons();
	}, []);

	return (
		<>
			<Header />
			<h1>Pokédex</h1>
			<div>
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</>
	);
};

export { HomePage };
