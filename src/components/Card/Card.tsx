import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

import { LuWifiZero, LuWifiLow, LuWifiHigh, LuWifi } from "react-icons/lu";

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
	const [selectedQuantity, setSelectedQuantity] = useState(
		quantityOptions[0]
	);

	const handleClick = ({ value, food }: { value: number; food: string }) => {
		const selected = JSON.stringify({ food, value });

		localStorage.setItem("food", selected);
	};

	return (
		<section>
			<img
				src="https://picsum.photos/200"
				alt="card "
				className="lg:h-48 md:h-36 w-full object-cover object-center"
			/>

			<RadioGroup
				value={selectedQuantity}
				onChange={setSelectedQuantity}
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

			{/* <div className="flex">
				<div>
					<input
						type="radio"
						name={`quantity-${index}`}
						className="rounded-md bg-red-50 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-200 flex-1"
					/>
				</div>
				<div>
					<input
						type="radio"
						name={`quantity-${index}`}
						className="rounded-md bg-yellow-50 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-yellow-200 flex-1"
					/>
				</div>
				<div>
					<input
						type="radio"
						name={`quantity-${index}`}
						className="rounded-md bg-green-50 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-200 flex-1"
					/>
				</div>
				<div>
					<input
						type="radio"
						name={`quantity-${index}`}
						className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-200 flex-1"
					/>
				</div>
			</div> */}
		</section>
	);
}

export default Card;
