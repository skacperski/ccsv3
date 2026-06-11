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
      // Steep design tokens (steep.app :root variables).
      colors: {
        steep: {
          green: "#00C67F",
          text: "#17191C",
          blue: "#2F6FE5",
          red: "#E53B79",
          "green-deep": "#17975E",
          purple: "#7A2BEC",
          gray: "#777B86",
          muted: "#A3A6AF",
          bg2: "#FAFAFB",
          "light-gray": "#F7F7F8",
          "light-blue": "#ECF2FE",
          "light-red": "#FEF1F1",
          "light-green": "#E9F6EF",
          "light-purple": "#F4EDFD",
        },
        trans: {
          5: "#04172B0D",
          10: "#0A172B1A",
          15: "#0E172B26",
          20: "#0E172B33",
        },
      },
      fontFamily: {
        serif: ['"Newsreader"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
