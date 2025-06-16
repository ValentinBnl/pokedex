import { useState } from "react";
import styles from "./InputFilter.module.css";

const InputFilter = ({ onSearch }) => {
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setSearch(value);
		onSearch(value);
	};

	return (
		<input
			type="text"
			className={styles.searchInput}
			placeholder="Filter the pokemon list, ex: Pikachu..."
			value={search}
			onChange={handleChange}
		/>
	);
};

export { InputFilter };
