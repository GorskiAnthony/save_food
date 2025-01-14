import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<section className="w-[80%] mx-auto bg-red-500">
				<Outlet />
			</section>
			<Footer />
		</div>
	);
}

export default Layout;
