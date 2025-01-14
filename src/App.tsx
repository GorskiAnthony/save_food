import Card from "./components/Card/Card";

function App() {
	const fakeFood = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
	return (
		<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{fakeFood.map((food, index) => (
				<Card key={index} food={food} />
			))}
		</section>
	);
}

export default App;
