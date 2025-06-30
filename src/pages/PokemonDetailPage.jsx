import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	fetchPokemonById,
	fetchReviewsByPokemonId,
	postReview,
	patchLike,
} from "../utils/fetch";
import { PokemonNavigation } from "../components/PokemonNavigation";
import { Header } from "../components/Header";
import { PokemonImage } from "../components/PokemonImage";
import { PokemonStats } from "../components/PokemonStats";
import { PokemonReviews } from "../components/PokemonReviews";
import styles from "./PokemonDetailPage.module.css";

const PokemonDetailPage = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState(null);
	const [likes, setLikes] = useState(0);
	const [reviews, setReviews] = useState([]);
	const [newReview, setNewReview] = useState("");

	useEffect(() => {
		async function loadData() {
			try {
				const data = await fetchPokemonById(id);
				setPokemon(data);
				setLikes(data.like || 0);
				const reviewsData = await fetchReviewsByPokemonId(id);
				setReviews(reviewsData);
			} catch (error) {
				console.error("Error loading Pokémon detail:", error);
			}
		}
		loadData();
	}, [id]);

	const handleLike = async () => {
		const updatedLikes = likes + 1;
		setLikes(updatedLikes);
		await patchLike(id, updatedLikes);
	};

	const handleReviewSubmit = async (e) => {
		if (e.key === "Enter" && newReview.trim()) {
			const reviewToPost = {
				pokemonId: parseInt(id),
				author: "Me",
				content: newReview.trim().slice(0, 100),
			};
			try {
				const posted = await postReview(reviewToPost);
				setReviews((prev) => [...prev, posted]);
				setNewReview("");
			} catch (error) {
				console.error("Failed to post review:", error);
			}
		}
	};

	if (!pokemon) return <div>Loading...</div>;

	return (
		<main className={styles.detailBg}>
			<Header />
			<PokemonNavigation />
			<div className={styles.detailPage}>
				<PokemonImage id={pokemon.id} name={pokemon.name} />
				<PokemonStats
					name={pokemon.name}
					types={pokemon.types}
					baseStats={pokemon.base}
				/>
				<PokemonReviews
					likes={likes}
					onLike={handleLike}
					reviews={reviews}
					newReview={newReview}
					onReviewChange={(value) => setNewReview(value)}
					onReviewSubmit={handleReviewSubmit}
				/>
			</div>
		</main>
	);
};

export { PokemonDetailPage };
