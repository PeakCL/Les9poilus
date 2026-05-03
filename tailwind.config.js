/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        poilu: {
          soleil: "#F4D03F",
          turquoise: "#48CAE4",
          roy: "#1E3A8A",
          terre: "#8B4513",
          ocre: "#F7DC6F",
          prairie: "#52D1DC",
          ciel: "#AED6F1",
          creme: "#FFFBF0",
          sunset: "#FF8C69",
          gris: "#566573",
        },
        primary: "#F4D03F",
        secondary: "#48CAE4",
        accent: "#1E3A8A",
        warm: "#8B4513",
        soft: "#AED6F1",
        energy: "#FF8C69",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        heading: ["Fraunces", "Georgia", "serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        warm: "0 4px 14px 0 rgba(139, 69, 19, 0.15)",
        soft: "0 2px 8px 0 rgba(135, 206, 235, 0.2)",
        glow: "0 0 60px -12px rgba(72, 202, 228, 0.45)",
        card: "0 8px 40px -12px rgba(30, 58, 138, 0.18)",
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(ellipse 120% 80% at 10% 20%, rgba(244,208,63,0.35), transparent 50%), radial-gradient(ellipse 90% 70% at 90% 30%, rgba(72,202,228,0.4), transparent 45%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(30,58,138,0.55), transparent 55%)",
        "noise-soft":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(4px, -6px)" },
          "66%": { transform: "translate(-6px, 4px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
