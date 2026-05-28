import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        'ink-2': '#111111',
        paper: '#f2f2ef',
        'paper-2': '#e6e6e1',
        line: '#2a2a2a',
        'line-light': '#d6d6d1',
        blue: '#1f4cff',
        'blue-deep': '#0a1f99',
        green: '#00d68f',
        muted: '#8a8a86',
        'muted-dark': '#6c6c68',
        'red-stamp': '#ff3030',
        amber: '#f59f00',
        'paper-quote-dark': '#b8b8b3',
        'paper-quote-blue': '#d4dcff',
        'card-body-dark': '#a5a5a0',
      },
      fontFamily: {
        display: ['"Helvetica Neue"', '"Arial Black"', 'Arial', 'sans-serif'],
        body: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: [
          'var(--font-jetbrains-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      screens: {
        desktop: '1100px',
      },
      maxWidth: {
        container: '1400px',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      transitionDelay: {
        '80': '80ms',
        '160': '160ms',
        '240': '240ms',
        '320': '320ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
