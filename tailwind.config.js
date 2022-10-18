/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      fontSize: {
        "hero-text": ["5rem", "5.5rem"]
      }
    },
  },
  plugins: [],
};
