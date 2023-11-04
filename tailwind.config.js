/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      colors: {
        // Modo oscuro
        dark: {
          primary: "#000",
          secondary: "#555",
          accent: "#999",
          background: "#111",
          text: "#ccc",
        },
      },
  },
  plugins: [],
}
