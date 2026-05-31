import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ReadMore } from './ReadMore';

const meta = {
  title: 'Primitives/ReadMore',
  component: ReadMore,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['blue', 'white', 'ghost'],
    },
    label: { control: 'text' },
    href: { control: 'text' },
  },
  args: {
    label: 'CZYTAJ DALEJ',
    href: '#',
    variant: 'blue',
  },
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: { variant: 'blue', label: 'CZYTAJ DALEJ' },
};

export const White: Story = {
  parameters: { backgrounds: { default: 'blue' } },
  args: { variant: 'white', label: 'SPRAWDŹ SEKTOR' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'METODOLOGIA' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, padding: 32, flexWrap: 'wrap' }}>
      <ReadMore label="BLUE — CZYTAJ DALEJ" variant="blue" />
      <ReadMore label="GHOST — METODOLOGIA" variant="ghost" />
      <div style={{ background: '#1f4cff', padding: 16 }}>
        <ReadMore label="WHITE — URUCHOM TEST" variant="white" />
      </div>
    </div>
  ),
};
