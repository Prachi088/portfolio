module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f5f3ef",
        surface: "#edeae4",
        surface2: "#e4e0d8",
        border: "#d4cfc6",
        accent: "#4a6fa5",
        "accent-light": "#6b8fc4",
        "accent-warm": "#8b6f4e",
        text: "#1a1916",
        "text-2": "#3d3a35",
        muted: "#7a7269",
        card: "#f9f7f4",
        line: "#ccc8bf",
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
