/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0f172a",
        accent: "#14b8a6",
        accentMuted: "#2dd4bf",
        primary: "#38bdf8",
        ink: "#e2e8f0"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 35px 120px -30px rgba(148, 163, 184, 0.45)"
      }
    }
  },
  plugins: []
}
