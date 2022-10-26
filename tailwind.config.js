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
		fontSize: {
			xs: ['0.75rem'],
			sm: ['0.875rem'],
			base: ['1rem'],
			lg: ['1.125rem'],
			xl: ['1.25rem'],
			'2xl': ['1.5rem'],
			'3xl': ['1.875rem'],
			'4xl': ['2.125rem'],
			'5xl': ['3rem'],
			'6xl': ['3.75rem'],
			'7xl': ['4.5rem'],
			'8xl': ['6rem'],
			'9xl': ['7rem'],
			'1vw': ['calc(calc(1vw + 1vh) * 1.3)'],
			'2vw': ['calc(calc(1vw + 1vh) * 2.6)'],
			'4vw': ['calc(calc(1vw + 1vh) * 4)'],
		},
		colors: {
			dark: '#25262B',
			blue: '#00A6EB',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			gray: colors.gray,
			white: colors.white,
			red: '#ED1C24',
			orange: '#F26621',
			yellow: '#F2C230',
			greenLigth: '#7AA342',
			green: '#269447',
		},
		extend: {
			fontFamily: {
				sans: ['Raleway', 'hyunday-st', ...defaultTheme.fontFamily.sans],
			},
			dropShadow: {
				'blue': '0px 0px 15px #00A6EB',
				'blue2': ['3px 0 0 #00A6EB', '-3px 0 0 #00A6EB', '0 3px 0 #00A6EB', '0 -3px 0 #00A6EB', '0px 0px 20px #00A6EB'],
				'red': '0px 0px 20px #ED1C24',
				'green': '0px 0px 20px #269447',
			},
			boxShadow: {
				'3xl': '0 0 35px rgba(0, 166, 235, 0.35)',
			}
		},
	},
}
