export default {
  darkMode: 'class', // 👈 Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3562eb',
        background: '#0f172a',
        text: '#f8fafc',
      },
    },
  },
  plugins: [],
};