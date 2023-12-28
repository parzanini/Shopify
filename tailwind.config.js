/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				color1: "#775040",
				color2: "#aea89b",
			},
			fontFamily: {
				mainFont: ["Montserrat", "Calibri", "sans-serif"],
			},
		},
	},
	plugins: [],
};
