import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FineStage } from './FineStage';

const meta = {
  title: 'Stages/FineStage',
  component: FineStage,
  parameters: { backgrounds: { default: 'ink' } },
  args: {
    data: {
      amount: '10',
      amountSup: 'MLN EUR',
      ticker: 'LUB 2% GLOBALNEGO OBROTU ROCZNEGO — KTÓRA KWOTA WYŻSZA',
      stamps: [
        { label: 'ART. 34', color: 'blue', pos: 's1' },
        { label: 'CRITICAL', color: 'red', pos: 's2' },
        { label: 'ESSENTIAL ENTITY', color: 'white', pos: 's3' },
      ],
    },
  },
} satisfies Meta<typeof FineStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ImportantEntity: Story = {
  args: {
    data: {
      amount: '7',
      amountSup: 'MLN EUR',
      ticker: 'LUB 1,4% GLOBALNEGO OBROTU ROCZNEGO',
      stamps: [
        { label: 'ART. 34', color: 'blue', pos: 's1' },
        { label: 'IMPORTANT', color: 'white', pos: 's2' },
        { label: 'IMPORTANT ENTITY', color: 'blue', pos: 's3' },
      ],
    },
  },
};
