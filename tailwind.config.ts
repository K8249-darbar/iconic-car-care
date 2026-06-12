import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        carbon: "#0b0b0d",
        graphite: "#141416",
        "soft-black": "#101011",
        gold: {
          100: "#c35555",
          200: "#a33737",
          300: "#942332",
          400: "#660d0d",
          500: "#690b0b",
          600: "#6c0606"
        },
        platinum: "#e5e1d8"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      boxShadow: {
        gold: "0 0 44px rgba(200, 157, 59, 0.22)",
        "gold-soft": "0 18px 80px rgba(167, 119, 34, 0.18)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, rgba(248,223,149,0), rgba(167, 14, 14, 0.8), rgba(248,223,149,0))",
        "carbon-grid": "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
