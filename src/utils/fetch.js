import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const fetchPokemons = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/pokemons`);
		return response.data;
	} catch (error) {
		console.error("Error fetch pokemons:", error);
		throw error;
	}
};

const fetchPokemonById = async (id) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/pokemons/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetch pokemon with id ${id}:`, error);
		throw error;
	}
};

export { fetchPokemons, fetchPokemonById };
