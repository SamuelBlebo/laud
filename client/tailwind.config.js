/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        "6/10": "60%",
        "4/10": "40%",
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
      },
    },
  },
  plugins: [],
};
