import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

// Get all pokemons
const fetchPokemons = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/pokemons`);
		return response.data;
	} catch (error) {
		console.error("Error fetching pokemons:", error);
		throw error;
	}
};

// Get one pokemon by ID
const fetchPokemonById = async (id) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/pokemons/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching pokemon with id ${id}:`, error);
		throw error;
	}
};

// PATCH a pokemon's like count
const patchLike = async (id, likeCount) => {
	try {
		const response = await axios.patch(`${API_BASE_URL}/pokemons/${id}`, {
			like: likeCount,
		});
		return response.data;
	} catch (error) {
		console.error("Error patching like count:", error);
		throw error;
	}
};

// GET reviews for a pokemon
const fetchReviewsByPokemonId = async (pokemonId) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/reviews`, {
			params: { pokemonId },
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching reviews:", error);
		throw error;
	}
};

// POST a new review
const postReview = async (review) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/reviews`, review);
		return response.data;
	} catch (error) {
		console.error("Error posting review:", error);
		throw error;
	}
};

export {
	fetchPokemons,
	fetchPokemonById,
	patchLike,
	fetchReviewsByPokemonId,
	postReview,
};
