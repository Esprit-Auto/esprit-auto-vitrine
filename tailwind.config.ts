import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0e0e0e",
        bg2: "#141414",
        bg3: "#1c1c1c",
        or: "#D4521A",
        or2: "#e06030",
        text: "#f5f5f5",
        muted: "rgba(245,245,245,0.5)",
        bd: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
