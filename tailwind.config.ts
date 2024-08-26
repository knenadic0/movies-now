import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				'mn-green-0': '#22ec1c',
				'mn-green-1': '#00bd00',
				'mn-green-2': '#008f00',
				'mn-green-3': '#006200',
				'mn-green-4': '#003900',
				'mn-blue-0': '#00da6e',
				'mn-blue-1': '#00c4a9',
				'mn-blue-2': '#00abd9',
				'mn-blue-3': '#0091f6',
				'mn-blue-4': '#0073f8',
				'mn-dark-gray': '#77797e',
				'mn-gray': '#9ca3af',
				'mn-light-gray': '#e5e7eb',
			},
			borderWidth: {
				1: '1px',
				3: '3px',
			},
		},
	},
	plugins: [
		nextui({
			prefix: 'nextui',
			addCommonColors: false,
			defaultTheme: 'light',
			defaultExtendTheme: 'light',
			layout: {},
			themes: {
				light: {
					layout: {},
					colors: {
						primary: {
							DEFAULT: '#006200',
							foreground: '#ffffff',
						},
					},
				},
			},
		}),
	],
};
export default config;
