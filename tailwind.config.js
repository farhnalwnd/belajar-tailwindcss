/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        Geist: ["Geist"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 2s linear infinite",
      },
      // * menambahkan bentuk animasi
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
    },
  },
  plugins: [],
};
