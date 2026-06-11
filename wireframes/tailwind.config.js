import relumePreset from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [relumePreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Awesomic design tokens (awesomic.com :root) — zinc gray scale +
      // a single orange accent.
      colors: {
        awe: {
          orange: "#FF5A00",
          950: "#09090B",
          900: "#18181B",
          800: "#27272A",
          700: "#3F3F46",
          600: "#52525B",
          500: "#71717A",
          400: "#A1A1AA",
          300: "#D4D4D8",
          200: "#E4E4E7",
          150: "#ECECEE",
          100: "#F4F4F5",
          50: "#FAFAFA",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
      },
    },
  },
};
