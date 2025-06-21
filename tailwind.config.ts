
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Aangepaste Nederlandse Algarve kleuren
        primary: {
          50: "#f0f9f4",
          100: "#dcf2e7", 
          200: "#bbe5d0",
          300: "#8dd2b0",
          400: "#58b889",
          500: "#2A6B3F", // Hoofdkleur natuur groen
          600: "#1f5d35",
          700: "#1a4d2c",
          800: "#154025",
          900: "#11351e",
          950: "#081d10",
        },
        secondary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#E07A5F", // Hoofdkleur zon oranje
          600: "#dc6847",
          700: "#c2533d",
          800: "#9c4536",
          900: "#7c3a2e",
          950: "#431a14",
        },
        accent: {
          50: "#fefcf3",
          100: "#fef9e7",
          200: "#fef2ca",
          300: "#fde8a7",
          400: "#fbda74",
          500: "#F4F1DE", // Hoofdkleur strand beige
          600: "#f0e8b8",
          700: "#e8d993",
          800: "#dcca6e",
          900: "#d4bc4a",
          950: "#786a26",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
