/** @type {import('tailwindcss').Config} */

// Fonts
const spaceGrotesk = ['Space Grotesk', 'sans-serif'];
const inter = ['Inter', 'sans-serif'];

// Colours
const black = '#000000';
const white = '#ffffff';
const dark = '#3A4048';
const blue = '#A0ABBC';
const pink = '#CAA1A5';
const sand = '#BFB6AD';

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				'2xl': '1620px',
			},
			fontFamily: {
				accent: [spaceGrotesk],
				main: [inter],
			},
			colors: {
				black,
				white,
				main: dark,
				secondary: blue,
				tertiary: sand,
				cta: pink,
			},
		},
	},
	plugins: [],
};
