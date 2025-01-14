import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

function App() {
	const [listFood, setListFood] = useState<string[]>([]);

	useEffect(() => {
		const existingData = localStorage.getItem("listFood");
		const data = existingData ? JSON.parse(existingData) : [];
		setListFood(data);
	}, []);

	return (
		<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{listFood.map((food, index) => (
				<Card key={index} food={food} />
			))}
		</section>
	);
}

export default App;
