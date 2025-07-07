
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
        // Algarve Website Colors
        primary: {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80c0ff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0066CC", // Ocean blue
          600: "#0052a3",
          700: "#003d7a",
          800: "#002952",
          900: "#001429",
        },
        secondary: {
          50: "#fef2ed",
          100: "#fcdcc7",
          200: "#fac5a1",
          300: "#f8ae7b",
          400: "#f69755",
          500: "#E85D2F", // Algarve terracotta  
          600: "#ba4a26",
          700: "#8b381c",
          800: "#5d2513",
          900: "#2e1309",
        },
        accent: {
          50: "#fefcf8",
          100: "#fdf6ea",
          200: "#fbf0dc",
          300: "#f9eace",
          400: "#f7e4c0",
          500: "#F4E8D0", // Sandy beige
          600: "#c3baa7",
          700: "#928b7d",
          800: "#625d54",
          900: "#312e2a",
        },
        support: {
          50: "#f4f6f0",
          100: "#e5eadb",
          200: "#d5dec5",
          300: "#c6d2b0",
          400: "#b7c69a",
          500: "#6B8E23", // Olive green
          600: "#56721c",
          700: "#415515",
          800: "#2b390e",
          900: "#161c07",
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
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
