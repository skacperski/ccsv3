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
      // Design tokens ported from getfuseai.com/pentest (:root variables).
      colors: {
        fuse: {
          blue: "#005AED",
          "blue-deep": "#0047BE",
          ink: "#0A0A0F",
          "ink-soft": "#15151B",
          paper: "#F5F7FB",
          text: "#1A1A1A",
          muted: "#6B6B73",
          line: "#E5E7EE",
          lime: "#E1FE00",
          "lime-deep": "#CFE800",
          red: "#FD4957",
          cyan: "#00D4FF",
        },
      },
      fontFamily: {
        display: ['"Roboto Flex"', '"Helvetica Neue"', "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"Roboto Mono"', "ui-monospace", "monospace"],
      },
    },
  },
};
