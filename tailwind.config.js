/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat', sans-serif",
        outfit: "'Outfit', sans-serif",
        pacifico: "'Pacifico', cursive",
      },
      boxShadow: {
        myshadow: "0px 2px 24px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        gradient: "url('../src/assets/gradient.svg')",
        faqGradient: "url('../src/assets/faqGradient.png')",
        templateFooterBg: "url('../src/assets/templateFooterBg.png')"
      },
      colors: {
        blurblack: "rgba(0, 0, 0, 0.42)",
      },
    },
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
  plugins: [],
};
