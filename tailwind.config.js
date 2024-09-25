/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('./assets/bg.jpg')",
      },
      boxShadow: {
        'top-right': '10px -10px 0px 5px rgba(255, 255, 255, 1)',
        'top-right-small': '5px -5px 0px 2.5px rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'], // Add Space Mono font
        'daisyogre': ['Daisyogre', 'sans-serif'],
        'unlock': ['"Unlock"', 'sans-serif'],
      },
      colors: {
        'lavender': '#c8aaff', // Lavender color
        'deeppurple': '#9664ff', // Deeper purple color
        'neonpink': '#f72798',
        'coral': '#ff6f61',
        'turquoise': '#40e0d0',
        'peach': '#ffcc99',
        'seafoamgreen': '#2e8b57',
        'mintgreen': '#98ff98',
        'skyblue': '#87ceeb',
        'sunsetorange': '#ff4500',
        'gold': '#ffd700',
        'slateblue': '#6a5acd',
        'aqua': '#00ffff',
        'orchid': '#da70d6',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

