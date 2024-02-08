/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			height: {
				"screen-title": "calc(100vh - 80px)",
				"res-1": "40vh",
				"res-2": "7vh",
				"half-screen": "50vh",
				"third-screen": "75vh",
				"quarter-screen": "25vh",
			},
			grayscale: {
				50: "50%",
			},
			fontSize: {
				xss: "10px",
			},
		},
	},
	plugins: [],
};
