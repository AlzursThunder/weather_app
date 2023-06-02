/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				"light-gray": "#ced4da",
				"light-black": "#212529",
				"medium-gray": "#555",
			},
			boxShadow: {
				"input-shadow": "0 0 0 .25rem rgb(216, 180, 254)",
			},
			backgroundImage: {
				"drop-down-img":
					'url("/search.svg")',
			},
			backgroundSize: {
				16: "16px",
				12: "12px",
			},
		},
		plugins: [],
	},
};
