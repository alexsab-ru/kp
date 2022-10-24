const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./docs/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		colors: {
			dark: '#25262B',
			blue: '#00A6EB',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			gray: colors.gray,
			white: colors.white,
		},
		extend: {
			fontFamily: {
				sans: ['Raleway', 'hyunday-st', ...defaultTheme.fontFamily.sans],
			},
			dropShadow: {
        'blue': '0px 0px 9px #00A6EB',
      },
		},
	},
}
