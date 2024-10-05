/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f9fd",
          100: "#e4f0fa",
          200: "#c2e3f5",
          300: "#8ccbed",
          400: "#4eb0e2",
          500: "#2897cf",
          600: "#1979b0",
          700: "#145a85",
          800: "#165276",
          900: "#174563",
          950: "#102c41",
        },
      },
    },
  },
  plugins: [],
};
