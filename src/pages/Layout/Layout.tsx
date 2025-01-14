import { Outlet } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

function Layout() {
	const [valueFood, setValueFood] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const existingData = localStorage.getItem("listFood");
		const data = existingData ? JSON.parse(existingData) : [];

		if (data.includes(valueFood)) {
			alert("Cet aliment existe déjà dans la liste !");
			return;
		}

		const updatedData = [...data, valueFood];

		localStorage.setItem("listFood", JSON.stringify(updatedData));

		setValueFood("");
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<section className="w-[80%] mx-auto">
				<form
					onSubmit={handleSubmit}
					className="flex items-stretch justify-center w-full mb-8 h-12"
				>
					<input
						type="text"
						value={valueFood}
						onChange={(e) => setValueFood(e.target.value)}
						placeholder="Aliment"
						className="px-4 text-lg border border-gray-300 rounded-l-md focus:outline-none"
					/>
					<button className="flex items-center justify-center px-8 text-white bg-indigo-500 border-l border-indigo-500 rounded-r-md focus:outline-none hover:bg-indigo-600">
						<IoMdAddCircle className="mr-2" />
					</button>
				</form>
				<Outlet />
			</section>
			<Footer />
		</div>
	);
}

export default Layout;
