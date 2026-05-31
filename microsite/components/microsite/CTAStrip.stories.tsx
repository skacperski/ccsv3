import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CTAStrip } from './CTAStrip';

const meta = {
  title: 'Primitives/CTAStrip',
  component: CTAStrip,
  args: {
    line1: 'NIS2 zaczyna się od zarządu.',
    line2: 'Sankcja kończy się tam samym.',
    cta: 'UMÓW SPOTKANIE Z PARTNEREM',
  },
  argTypes: {
    line1: { control: 'text' },
    line2: { control: 'text' },
    cta: { control: 'text' },
  },
} satisfies Meta<typeof CTAStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
