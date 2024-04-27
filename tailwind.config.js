/** @type {import('tailwindcss').Config} */
import {
	// Blue
	blue10,
	blue20,
	blue30,
	blue40,
	blue60,
	blue70,
	blue100,

	// Gray
	gray10,
	gray10Hover,
	gray20,
	gray20Hover,
	gray30,
	gray40,
	gray50,
	gray60,
	gray70,
	gray80,
	gray80Hover,
	gray100,

	// Support
	blue50,
	green40,
	green50,
	yellow30,
	orange40,
	red50,
	red60,
	purple60,

	// Constants
	black,
	white,
	whiteHover,
	rgba,
} from '@carbon/colors';
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'white': white,
				'white-hover': whiteHover,
				'black': black,
				'gray-10': gray10,
				'gray-10-hover': gray10Hover,
				'gray-20': gray20,
				'gray-20-hover': gray20Hover,
				'gray-30': gray30,
				'gray-40': gray40,
				'gray-50': gray50,
				'gray-60': gray60,
				'gray-70': gray70,
				'gray-80': gray80,
				'gray-80-hover': gray80Hover,
				'gray-100': gray100,
				'blue-10': blue10,
				'blue-20': blue20,
				'blue-30': blue30,
				'blue-40': blue40,
				'blue-50': blue50,
				'blue-60': blue60,
				'blue-70': blue70,
				'blue-100': blue100,
				'green-40': green40,
				'green-50': green50,
				'yellow-30': yellow30,
				'orange-40': orange40,
				'red-50': red50,
				'red-60': red60,
				'purple-60': purple60,

			}
		},
	},
	plugins: [],
}
