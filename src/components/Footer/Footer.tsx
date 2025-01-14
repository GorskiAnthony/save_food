function Footer() {
	return (
		<footer className="mt-auto text-gray-600 body-font">
			<div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
				<a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
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
				</a>
				<p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
					© 2020 Nous tous —
				</p>
				<p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
					Merci à{" "}
					<a
						href="https://twitter.com/knyttneve"
						className="ml-1 text-gray-600"
						rel="noopener noreferrer"
						target="_blank"
					>
						@knyttneve
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
