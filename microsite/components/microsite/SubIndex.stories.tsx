import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SubIndex } from './SubIndex';

const meta = {
  title: 'Primitives/SubIndex',
  component: SubIndex,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['default', 'paper', 'dark', 'blue'],
    },
    label: { control: 'text' },
  },
  args: {
    label: '01/A',
    theme: 'default',
  },
} satisfies Meta<typeof SubIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  parameters: { backgrounds: { default: 'ink' } },
  args: { theme: 'dark' },
};

export const Blue: Story = {
  parameters: { backgrounds: { default: 'blue' } },
  args: { theme: 'blue' },
};

export const Paper: Story = {
  args: { theme: 'paper' },
};
