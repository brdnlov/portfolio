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
        soft: "0 20px 40px rgba(0, 0, 0, 0.35)",
        lift: "0 28px 60px rgba(0, 0, 0, 0.5)",
        glow: "0 0 0 1px rgba(61, 214, 140, 0.25), 0 18px 45px rgba(61, 214, 140, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config
