import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E1624",
        surface: "#111D2F",
        accent: "#3DD68C",
        muted: "#1A2A41",
        textPrimary: "#F5F8FF",
        textSecondary: "#9DA9BE",
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0, 0, 0, 0.35",
      },
      fontFamily: {
        sans: ["IDM Plex Sans", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config
