import type { Preview } from '@storybook/nextjs-vite';
import { JetBrains_Mono } from 'next/font/google';
import React from 'react';
import '../app/globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#f2f2ef' },
        { name: 'ink', value: '#0a0a0a' },
        { name: 'blue', value: '#1f4cff' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile (375)', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop (1280)', styles: { width: '1280px', height: '900px' } },
        wide: { name: 'Wide (1440)', styles: { width: '1440px', height: '900px' } },
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className={jetbrainsMono.variable} style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
