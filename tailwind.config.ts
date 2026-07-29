import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'Space Mono'", "'Space Grotesk'", "monospace"],
        subheading: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Monument Extended'", "'Unbounded'", "'Syne'", "sans-serif"],
      },
      colors: {
        background: "#F2EFE7",
        foreground: "#2F2E2F",
        accent: {
          red: "#A92C1F",
          blush: "#DBCDC9",
          muted: "#B45348",
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
