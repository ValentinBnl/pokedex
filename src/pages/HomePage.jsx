import { useState, useEffect } from "react";
import { fetchPokemons } from "../utils/fetch";
import { Header } from "../components/Header";
import { PokemonCard } from "../components/PokemonCard";
import { InputFilter } from "../components/InputFilter";

const HomePage = () => {
	const [pokemons, setPokemons] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const getPokemons = async () => {
			try {
				const data = await fetchPokemons();
				setPokemons(data);
			} catch (error) {
				console.error("Error fetching pokemons:", error);
			}
		};
		getPokemons();
	}, []);

	const filteredPokemons = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<Header />
			<h1>Pokédex</h1>
			<InputFilter onSearch={setSearchTerm} />
			<div>
				{filteredPokemons.length > 0 ? (
					filteredPokemons.map((pokemon) => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))
				) : (
					<p>No result for “{searchTerm}”</p>
				)}
			</div>
		</>
	);
};

export { HomePage };
