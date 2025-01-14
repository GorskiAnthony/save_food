import { LuWifiZero, LuWifiLow, LuWifiHigh, LuWifi } from "react-icons/lu";

function Card() {
	return (
		<section>
			<img
				src="https://picsum.photos/200"
				alt="card "
				className="lg:h-48 md:h-36 w-full object-cover object-center"
			/>
			<div className="flex">
				<button
					type="button"
					className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 flex-1"
				>
					<LuWifiZero className="inline-block w-5 h-5" />
				</button>
				<button
					type="button"
					className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 flex-1"
				>
					<LuWifiLow className="inline-block w-5 h-5" />
				</button>
				<button
					type="button"
					className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 flex-1"
				>
					<LuWifiHigh className="inline-block w-5 h-5" />
				</button>
				<button
					type="button"
					className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 flex-1"
				>
					<LuWifi className="inline-block w-5 h-5" />
				</button>
			</div>
		</section>
	);
}

export default Card;
