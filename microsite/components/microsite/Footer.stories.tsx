import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './Footer';

const FOOTER_DATA = {
  legal: '© 2026 CyCommSec sp. z o.o. · KRS 0000123456 · ul. Wspólna 70, Warszawa',
  links: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'www.cycommsec.pl', href: '#' },
  ],
  wordmark: '/NIS2',
};

const meta = {
  title: 'Primitives/Footer',
  component: Footer,
  args: { data: FOOTER_DATA },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
