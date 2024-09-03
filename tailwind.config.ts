import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paragraph: {
          primary: "#c2c8d1",
          secondary: "#9ca3af",
        },
        accent: {
          primary: "#F8CC38",
          secondary: "#F8CC38",
        },
        dark: {
          primary: "#111827",
          secondary: "#1F2937",
        },
        gray:{
          light: "#F3F4F6",
          dark: "#4B5563",
        },
        light: {
          primary: "#E5E7EB",
          secondary: "#D1D5DB",
        },
        warning: {
          primary: "#EAB308",
          secondary: "#FDE047",
          hover: "#FACC15",
        },
        success: {
          primary: "#22C55E",
          secondary: "#86EFAC",
          hover: "#4ADE80",
        },
        info: {
          primary: "#3B82F6",
          secondary: "#93C5FD",
          hover: "#60A5FA",
        },
        error: {
          primary: "#EF4444",
          secondary: "#FCA5A5",
          hover: "#F87171",
        },
        link: {
          primary: "#1D4ED8"
        },
        darkBG: "#030711",
        lightBG: "#FFFFFF",
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
