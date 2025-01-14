import { Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<section className="w-[80%] mx-auto">
				<form className="flex items-stretch justify-center w-full mb-8 h-12">
					<input
						type="text"
						placeholder="Aliment"
						className="px-4 text-lg border border-gray-300 rounded-l-md focus:outline-none"
					/>
					<button className="flex items-center justify-center px-8 text-white bg-indigo-500 border-l border-indigo-500 rounded-r-md focus:outline-none hover:bg-indigo-600">
						<IoIosSearch className="mr-2" />
					</button>
				</form>
				<Outlet />
			</section>
			<Footer />
		</div>
	);
}

export default Layout;
