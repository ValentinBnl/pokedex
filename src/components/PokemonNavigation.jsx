import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./PokemonNavigation.module.css";

const PokemonNavigation = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const currentId = parseInt(id);

	const handlePrev = () => {
		if (currentId > 1) navigate(`/pokemon/${currentId - 1}`);
	};

	const handleNext = () => {
		if (currentId < 151) navigate(`/pokemon/${currentId + 1}`);
	};

	return (
		<div className={styles.navWrapper}>
			<button
				onClick={handlePrev}
				disabled={currentId <= 1}
				className={styles.arrowBtn}
			>
				<FaArrowLeft />
			</button>
			<button
				onClick={handleNext}
				disabled={currentId >= 151}
				className={styles.arrowBtn}
			>
				<FaArrowRight />
			</button>
		</div>
	);
};

export { PokemonNavigation };
