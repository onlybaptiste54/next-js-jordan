/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#000000', // Définir le noir pour le fond
        'gold-rose': '#deb879 ', // Doré rosé
        'silver': '#C0C0C0', // Argent classique
        'white': '#FFFFFF', // Blanc classique (au cas où)

      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'], // Ajout de la police personnalisée
      },
    },
  },
  plugins: [],
};
