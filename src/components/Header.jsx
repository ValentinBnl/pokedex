import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import pokeball from "../assets/pokeball.png";
import pokedex from "../assets/pokedex.png";

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logoLink}>
				<img src={pokeball} alt="Pokeball" className={styles.pokeball} />
				<img src={pokedex} alt="Pokedex" className={styles.pokedexText} />
			</Link>
		</header>
	);
};

export { Header };
