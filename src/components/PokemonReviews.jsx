import { FaHeart } from "react-icons/fa";
import styles from "./PokemonReviews.module.css";

const PokemonReviews = ({
	likes,
	onLike,
	reviews,
	newReview,
	onReviewChange,
	onReviewSubmit,
}) => {
	return (
		<div className={styles.reviewsSection}>
			<div className={styles.likeSection} onClick={onLike}>
				<FaHeart className={styles.heartIcon} />
				<span>{likes}</span>
			</div>

			<h3>Reviews</h3>

			<input
				type="text"
				placeholder="Add a review..."
				value={newReview}
				onChange={(e) => onReviewChange(e.target.value)}
				onKeyDown={onReviewSubmit}
				className={styles.reviewInput}
				maxLength={100}
			/>

			<div className={styles.reviewList}>
				{reviews.map((r) => (
					<div key={r.id} className={styles.reviewCard}>
						<p>{r.content}</p>
						<p className={styles.reviewAuthor}>Posted by: {r.author}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokemonReviews;
