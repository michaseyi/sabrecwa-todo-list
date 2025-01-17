/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],

	safelist: [
		"bg-pink-100",
		"text-pink-900",
		"bg-blue-100",
		"text-blue-900",
		"bg-green-100",
		"text-green-900",
		"bg-yellow-100",
		"text-yellow-900",
		"bg-red-100",
		"text-red-900",
		"bg-pink-900",
		"text-pink-100",
		"bg-blue-900",
		"text-blue-100",
		"bg-green-900",
		"text-green-100",
		"bg-yellow-900",
		"text-yellow-100",
		"bg-red-900",
		"text-red-100",
	],
}
