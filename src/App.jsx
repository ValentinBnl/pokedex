import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import PokemonDetailPage from "./pages/PokemonDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/pokemon/:id" element={<PokemonDetailPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default App;
