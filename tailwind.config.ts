import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F4F2E9",
          100: "#E9E9DB",
          300: "#BAC2B2",
          500: "#D2E4A4",
          700: "#BED18F",
          900: "#171916",
        },
        accent: {
          500: "#D2E4A4",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
