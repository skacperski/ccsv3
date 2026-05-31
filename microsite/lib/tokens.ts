export const colors = {
  ink: '#0a0a0a',
  ink2: '#111111',
  paper: '#f2f2ef',
  paper2: '#e6e6e1',
  line: '#2a2a2a',
  lineLight: '#d6d6d1',
  blue: '#1f4cff',
  blueDeep: '#0a1f99',
  green: '#00d68f',
  muted: '#8a8a86',
  mutedDark: '#6c6c68',
  redStamp: '#ff3030',
  amber: '#f59f00',
} as const;

export const breakpoints = {
  desktop: '1100px',
} as const;

export const fonts = {
  display: '"Helvetica Neue", "Arial Black", Arial, sans-serif',
  body: '"Helvetica Neue", Arial, sans-serif',
  mono: 'var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, monospace',
} as const;
