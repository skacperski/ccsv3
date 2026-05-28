import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StackStage } from './StackStage';

const meta = {
  title: 'Stages/StackStage',
  component: StackStage,
  parameters: { backgrounds: { default: 'ink' } },
  args: {
    data: {
      alerts: [
        { ts: '02:14:08', text: 'EDR · suspicious lsass dump', pos: 'a1' },
        { ts: '02:14:11', text: 'SIEM · lateral movement detected', pos: 'a2' },
        { ts: '02:14:19', text: 'IR · isolation triggered', pos: 'a3' },
        { ts: '02:14:33', text: 'STATUS · contained < 5 min', pos: 'a4' },
      ],
    },
  },
} satisfies Meta<typeof StackStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
