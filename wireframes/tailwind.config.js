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
      // Ventriloc design tokens — "analytics console on parchment".
      // Mist canvas, white cards, carbon actions, signal orange data accents.
      colors: {
        vent: {
          orange: "#FF682C",
          bronze: "#816729",
          carbon: "#202020",
          graphite: "#4D4D4D",
          slate: "#828282",
          fog: "#F5F5F5",
          mist: "#EFEFEF",
          chalk: "#E8E8E8",
          paper: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
