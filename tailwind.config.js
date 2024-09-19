import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        teal: "#008080",
        winblue: "#010081",
        winpink: "#ff0081",
        coral: "#ff8360",
        rose: "#ff57bb",
        sage: "#b5ba72",
        celadon: "#b4edd2",
        persianPink: "#F890CE",
        gradient1: "#BBD0FF",
        gradient2: "#B8C0FF",
        gradient3: "#C8B6FF",
        gradient4: "#E7C6FF",
        gradient5: "#FFD6FF",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
