import { createContext, useContext, useState, ReactNode } from "react";

type FoodContextType = {
	listFood: string[];
	addFood: (food: string) => void;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
	const [listFood, setListFood] = useState<string[]>(() => {
		// Charger les données du localStorage au démarrage
		const existingData = localStorage.getItem("listFood");
		return existingData ? JSON.parse(existingData) : [];
	});

	const addFood = (food: string) => {
		if (listFood.includes(food)) {
			alert("Cet aliment existe déjà dans la liste !");
			return;
		}

		const updatedList = [...listFood, food];
		setListFood(updatedList);
		localStorage.setItem("listFood", JSON.stringify(updatedList));
	};

	return (
		<FoodContext.Provider value={{ listFood, addFood }}>
			{children}
		</FoodContext.Provider>
	);
};

export const useFoodContext = () => {
	const context = useContext(FoodContext);
	if (!context) {
		throw new Error(
			"useFoodContext doit être utilisé dans un FoodProvider"
		);
	}
	return context;
};
