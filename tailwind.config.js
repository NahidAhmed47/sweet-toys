/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4ACDD5",

          "secondary": "#FF6799",

          "accent": "#838181",

          "neutral": "#1C1A2D",

          "base-100": "#FFFFFF",

          "info": "#A5CAE3",

          "success": "#35E9C8",

          "warning": "#EF9943",

          "error": "#E25A75",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

