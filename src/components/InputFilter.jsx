import { useState } from "react";

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
			placeholder="Search a Pokémon"
			value={search}
			onChange={handleChange}
		/>
	);
};

export { InputFilter };
