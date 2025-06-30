import { PKMN_TYPES, MAX_STAT } from "../constants/constants";
import styles from "./PokemonStats.module.css";

const PokemonStats = ({ name, types, baseStats }) => {
	if (!types || !baseStats) return null; // ⛑ Protection indispensable

	return (
		<div className={styles.pokemonStatsSection}>
			<h2>{name}</h2>

			<div className={styles.typeBadges}>
				{types.map((type) => {
					const match = PKMN_TYPES.find(
						(t) => t.name.toLowerCase() === type.toLowerCase()
					);
					return (
						<span
							key={type}
							style={{ backgroundColor: match?.color || "#999" }}
							className={styles.typeBadge}
						>
							{type}
						</span>
					);
				})}
			</div>

			<div className={styles.stats}>
				{Object.entries(baseStats).map(([key, value]) => {
					const statKey = key.toLowerCase().replace(/\s+/g, "");
					const maxValue = MAX_STAT[statKey] || 100;
					const percent = Math.min((value / maxValue) * 100, 100);
					return (
						<div key={key} className={styles.statItem}>
							<label>{key}</label>
							<div className={styles.progressBar}>
								<div
									className={styles.progress}
									style={{ width: `${percent}%` }}
								></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { PokemonStats };
