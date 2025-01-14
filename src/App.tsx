import { useFoodContext } from "./contexts/FoodContext";
import Card from "./components/Card/Card";

function App() {
	const { listFood } = useFoodContext();

	return (
		<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{listFood.map((food, index) => (
				<Card key={index} food={food} />
			))}
		</section>
	);
}

export default App;
