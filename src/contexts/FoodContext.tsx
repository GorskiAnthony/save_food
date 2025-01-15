import { createContext, useContext, useState, ReactNode } from "react";
import { successToast, errorToast } from "../helpers/toastify";

type FoodContextType = {
	listFood: string[];
	addFood: (food: string) => void;
	deleteFood: (food: string) => void;
	resetList: () => void;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
	const [listFood, setListFood] = useState<string[]>(() => {
		const existingData = localStorage.getItem("listFood");
		return existingData ? JSON.parse(existingData) : [];
	});

	const addFood = (food: string) => {
		if (listFood.includes(food)) {
			errorToast("Cet aliment existe déjà dans la liste !");
			return;
		}

		const updatedList = [...listFood, food];
		setListFood(updatedList);
		localStorage.setItem("listFood", JSON.stringify(updatedList));
		successToast("Aliment ajouté à la liste !");
	};

	const deleteFood = (food: string) => {
		const result = confirm(
			"Êtes-vous sûr de vouloir supprimer cet aliment de la liste ?"
		);

		if (!result) {
			return;
		}

		const updatedList = listFood.filter((item) => item !== food);
		setListFood(updatedList);
		localStorage.setItem("listFood", JSON.stringify(updatedList));
		// Je supprime aussi l'aliment dans mon localStorage "foods"
		const existingData = localStorage.getItem("foods");
		const data = existingData ? JSON.parse(existingData) : [];
		const updatedData = data.filter(
			(item: { food: string }) => item.food !== food
		);
		localStorage.setItem("foods", JSON.stringify(updatedData));
		successToast("Aliment supprimé de la liste !");
	};

	const resetList = () => {
		setListFood([]);
		localStorage.removeItem("listFood");
		localStorage.removeItem("foods");
		successToast("Liste réinitialisée !");
	};

	return (
		<FoodContext.Provider
			value={{ listFood, addFood, deleteFood, resetList }}
		>
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
