import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFoodContext } from "../../contexts/FoodContext";

function Navbar() {
	const { resetList } = useFoodContext();

	const handleResetList = () => {
		const confirmation = window.confirm(
			"Êtes-vous sûr de vouloir supprimer tous les aliments de la liste ?"
		);

		if (confirmation) {
			resetList();
		}
	};

	return (
		<header className="text-gray-600 body-font">
			<div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row justify-between">
				<Link
					to="/"
					className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Save food</span>
				</Link>
				<button
					className="bg-gray-100 px-6 py-2 flex items-center text-sm text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none"
					onClick={handleResetList}
				>
					Supprimer la liste
					<FaRegTrashAlt className="ml-2 w-4 h-4 text-red-500" />
				</button>
			</div>
		</header>
	);
}

export default Navbar;
