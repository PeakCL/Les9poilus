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
        // Nouvelle palette "Les 9 Poilus" - TikTok Friendly
        'poilu': {
          'soleil': '#F4D03F',      // Jaune doux - joie et énergie
          'turquoise': '#48CAE4',   // Turquoise - fraîcheur et modernité
          'roy': '#1E3A8A',        // Bleu roi - confiance et contraste
          'terre': '#8B4513',      // Brun - authenticité (gardé)
          'ocre': '#F7DC6F',       // Ocre jaune - harmonie avec soleil
          'prairie': '#52D1DC',     // Vert-turquoise - nature moderne
          'ciel': '#AED6F1',       // Bleu ciel doux
          'creme': '#FFFBF0',      // Crème légèrement dorée
          'sunset': '#FF8C69',     // Orange (gardé pour CTA)
          'gris': '#566573'        // Gris moderne
        },
        // Aliases optimisés pour TikTok/Instagram
        'primary': '#F4D03F',      // Jaune Soleil
        'secondary': '#48CAE4',    // Turquoise
        'accent': '#1E3A8A',       // Bleu Roy
        'warm': '#8B4513',         // Terre (authenticité)
        'soft': '#AED6F1',         // Ciel doux
        'energy': '#FF8C69'        // Sunset (CTA)
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

