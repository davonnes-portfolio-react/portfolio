/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audio: "'Audiowide', sans-serif",
        fugaz: "'Fugaz One', sans-serif",
        lobster: "'Lobster', cursive",
      },
    },
  },
  plugins: [],
};
