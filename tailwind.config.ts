import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#359759",
				secondary: "#4c4c4c",
				textcolor: "#696969",
			},
			screens: {
				xs: { max: "480px" },
				mobile: { min: "200px", max: "480px" },
				sm: { max: "768px" },
				tablet: { min: "481px", max: "768px" },
				md: "769px",
				laptop: { min: "769px", max: "1024px" },
			},
		},
	},
	plugins: [],
};
export default config;

