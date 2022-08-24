/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: '1rem',

      screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1168px',
				'2xl': '1496px',
			},
		},

    extend: {
      colors: {
        primaryGreen: '#737A6D',
        primaryGray: '#1C1C17',
        primaryBrown: '#4C4741',
      },
    },
  },
  plugins: [],
};
