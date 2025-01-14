import { Radio, RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import {
	LuWifiZero,
	LuWifiLow,
	LuWifiHigh,
	LuWifi,
	LuTrash2,
} from "react-icons/lu";

interface QuantityOption {
	name: JSX.Element;
	inStock: boolean;
	value: number;
}

function classNames(...classes: (string | boolean | undefined)[]): string {
	return classes.filter(Boolean).join(" ");
}

const quantityOptions: QuantityOption[] = [
	{
		name: <LuTrash2 className="inline-block w-5 h-5" />,
		inStock: true,
		value: 0,
	},
	{
		name: <LuWifiZero className="inline-block w-5 h-5" />,
		inStock: true,
		value: 1,
	},
	{
		name: <LuWifiLow className="inline-block w-5 h-5" />,
		inStock: true,
		value: 2,
	},
	{
		name: <LuWifiHigh className="inline-block w-5 h-5" />,
		inStock: true,
		value: 3,
	},
	{
		name: <LuWifi className="inline-block w-5 h-5" />,
		inStock: true,
		value: 4,
	},
];

function Card({ food }: { food: string }) {
	const [selectedQuantity, setSelectedQuantity] = useState<number | null>(
		null
	);

	useEffect(() => {
		const existingData = localStorage.getItem("food");
		const data = existingData ? JSON.parse(existingData) : [];
		const selectedFood = data.find(
			(item: { food: string }) => item.food === food
		);

		if (selectedFood) {
			setSelectedQuantity(selectedFood.value);
		}
	}, [food]);

	const handleClick = ({ value, food }: { value: number; food: string }) => {
		// Je récupère les données existantes dans le localStorage
		const existingData = localStorage.getItem("food");
		const data = existingData ? JSON.parse(existingData) : [];
		// Je met à jour les données
		const updatedData =
			value === 0
				? data.filter((item: { food: string }) => item.food !== food)
				: [
						...data.filter(
							(item: { food: string }) => item.food !== food
						),
						{ food, value },
				  ];

		// Je sauvegarde les données
		localStorage.setItem("food", JSON.stringify(updatedData));
		// Je met à jour l'état local
		setSelectedQuantity(value === 0 ? null : value);
	};

	return (
		<section>
			<h1 className="text-lg font-bold">{food}</h1>
			<RadioGroup
				value={selectedQuantity}
				onChange={(value) => setSelectedQuantity(value)}
				className="mt-2 flex gap-2"
			>
				{quantityOptions.map((option, index) => (
					<Radio
						key={index}
						value={option.value}
						className={classNames(
							option.inStock
								? "cursor-pointer focus:outline-none"
								: "cursor-not-allowed opacity-25",
							"flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset"
						)}
						onClick={() =>
							handleClick({ value: option.value, food })
						}
					>
						{option.name}
					</Radio>
				))}
			</RadioGroup>
		</section>
	);
}

export default Card;
