import { transformWithEsbuild } from "vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        frameOut: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-75%)",
          },
        },
      },
      animation: {
        frameOut: "frameOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
