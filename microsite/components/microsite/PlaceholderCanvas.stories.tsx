import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PlaceholderCanvas } from './PlaceholderCanvas';

const meta = {
  title: 'Primitives/PlaceholderCanvas',
  component: PlaceholderCanvas,
  args: {
    kind: 'striped-dark',
    tag: 'screenshot · rejestr kar',
  },
  argTypes: {
    kind: {
      control: 'inline-radio',
      options: ['striped-dark', 'striped-light', 'plain-dark', 'plain-light'],
    },
    tag: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof PlaceholderCanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StripedDark: Story = {
  parameters: { backgrounds: { default: 'ink' } },
  args: { kind: 'striped-dark', tag: 'screenshot · rejestr kar' },
};

export const StripedLight: Story = {
  args: { kind: 'striped-light', tag: 'photo · sala szkoleniowa' },
};

export const PlainDark: Story = {
  parameters: { backgrounds: { default: 'ink' } },
  args: { kind: 'plain-dark', tag: 'dashboard · SOC console' },
};

export const PlainLight: Story = {
  args: { kind: 'plain-light', tag: 'document · uchwała zarządu' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, padding: 24, background: '#f2f2ef' }}>
      <PlaceholderCanvas kind="striped-dark" tag="striped-dark · SOC console" />
      <PlaceholderCanvas kind="striped-light" tag="striped-light · runbook" />
      <PlaceholderCanvas kind="plain-dark" tag="plain-dark · doc" />
      <PlaceholderCanvas kind="plain-light" tag="plain-light · org chart" />
    </div>
  ),
};
