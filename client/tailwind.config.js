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
        sm: "640px", // Phone (up to 640px)
        md: "768px", // Tablet (641px to 768px)
        lg: "1024px", // Laptop (769px to 1024px)
        xl: "1280px", // Desktop (1025px to 1280px)
        "2xl": "1440px", // Large Screen (1281px and above)
      },
    },
  },
  plugins: [],
};
