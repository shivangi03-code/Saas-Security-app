/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0CC8A8",
        critical: "#EF4444",
        high: "#F97316",
        medium: "#F59E0B",
        low: "#22C55E",
        darkbg: "#0F0F0F",
        darksurface: "#171717",
      },
      borderRadius: { xl: "16px" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
    },
  },
  plugins: [],
};