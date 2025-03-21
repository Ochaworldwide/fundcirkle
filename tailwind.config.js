/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-out": "fadeInOut 5s ease-in-out",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      boxShadow: {
        custom: "0 4px 10px rgba(0, 0, 0, 1)", // Custom shadow
      },
    },
  },
  plugins: [],
};
