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
        paper: "#f3ede1",
        "paper-2": "#e7dcc6",
        ink: "#14100c",
        "ink-2": "#2b231b",
        crimson: "#a63030",
        indigo: "#1b1a29",
        sub: "#756758",
        line: "rgba(20, 16, 12, 0.15)",
      },
      fontFamily: {
        serif: ['"Shippori Mincho"', "serif"],
        latin: ['"Cormorant Garamond"', "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
