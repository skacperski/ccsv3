import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ExecStill } from './ExecStill';

const meta = {
  title: 'Primitives/ExecStill',
  component: ExecStill,
  args: {
    name: 'MARTA KOZŁOWSKA',
    role: 'PARTNER, COMPLIANCE',
  },
  argTypes: {
    name: { control: 'text' },
    role: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ExecStill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllExecs: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, padding: 24 }}>
      <ExecStill name="MARTA KOZŁOWSKA" role="PARTNER, COMPLIANCE" />
      <ExecStill name="PAWEŁ NOWAK" role="LEAD AUDITOR · CISA" />
      <ExecStill name="ANIA SZYMAŃSKA" role="DELIVERY DIRECTOR" />
      <ExecStill name="TOMASZ WÓJCIK" role="HEAD OF SOC" />
      <ExecStill name="JAKUB LEWANDOWSKI" role="CEO · CYCOMMSEC" />
    </div>
  ),
};
