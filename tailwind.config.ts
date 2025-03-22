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
        forest: {
          DEFAULT: "#0A1F2F", // Main background color
          light: "#132B41", // Slightly lighter variant for cards/sections
        },
        mint: {
          DEFAULT: "#64FFDA", // Primary accent color
        },
        divine: {
          DEFAULT: "#FFD700", // Secondary accent color
        }
      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#FFFFFF',
            h1: {
              color: '#64FFDA',
            },
            h2: {
              color: '#64FFDA',
            },
            h3: {
              color: '#64FFDA',
            },
            h4: {
              color: '#64FFDA',
            },
            strong: {
              color: '#FFFFFF',
            },
            a: {
              color: '#64FFDA',
              '&:hover': {
                color: '#64FFDA',
                opacity: 0.8,
              },
            },
            code: {
              color: '#FFFFFF',
              backgroundColor: '#132B41',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            blockquote: {
              borderLeftColor: '#64FFDA',
              color: '#FFFFFF',
              opacity: 0.9,
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;