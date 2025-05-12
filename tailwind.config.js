// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure to include all relevant files
  ],
  theme: {
    extend: {
      
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        vibes: ['Great Vibes', 'cursive'],
      },
    },
  },

  plugins: [],
}
