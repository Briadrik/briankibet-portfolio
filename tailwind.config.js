/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#06b6d4', // cyan-400
        'secondary': '#0ea5e9', // blue-400
        'accent': '#67e8f9', // cyan-300
        'bg-dark': '#0f172a', // slate-900
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'neon': '0 0 10px #06b6d4, 0 0 20px #0ea5e9',
      },
    },
  },
  plugins: [],
};
