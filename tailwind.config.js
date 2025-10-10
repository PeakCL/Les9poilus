/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./*.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        // Palette "Les 9 Poilus"
        'poilu': {
          'terre': '#8B4513',      // Brun naturel principal
          'ocre': '#D2B48C',       // Beige chaleureux
          'prairie': '#7FB069',     // Vert nature
          'ciel': '#87CEEB',       // Bleu tendre
          'creme': '#FFF8DC',      // Fond doux
          'sunset': '#FF8C69',     // Orange énergie
          'rose': '#F4A460',       // Rose tendre
          'gris': '#696969'        // Gris doux
        },
        // Aliases pour faciliter l'usage
        'primary': '#8B4513',      // Terre
        'secondary': '#7FB069',    // Prairie
        'accent': '#FF8C69',       // Sunset
        'warm': '#D2B48C',         // Ocre
        'soft': '#87CEEB'          // Ciel
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],      // Titres modernes et ronds
        'body': ['Inter', 'sans-serif'],           // Corps de texte lisible
        'script': ['Dancing Script', 'cursive']    // Écriture manuscrite pour authenticité
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'warm': '0 4px 14px 0 rgba(139, 69, 19, 0.15)',
        'soft': '0 2px 8px 0 rgba(135, 206, 235, 0.2)',
      }
    },
  },
  plugins: [],
}

