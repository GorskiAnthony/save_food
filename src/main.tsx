import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Layout from "./pages/Layout/Layout.tsx";
import App from "./App.tsx";
import { FoodProvider } from "./contexts/FoodContext.tsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(
		`Your HTML Document should contain a <div id="root"></div>`
	);
}

createRoot(rootElement).render(
	<StrictMode>
		<FoodProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</FoodProvider>
	</StrictMode>
);
