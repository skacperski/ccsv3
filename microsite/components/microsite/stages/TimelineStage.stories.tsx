import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TimelineStage } from './TimelineStage';

const meta = {
  title: 'Stages/TimelineStage',
  component: TimelineStage,
  parameters: { backgrounds: { default: 'paper' } },
  args: {
    data: {
      startLabel: 'START',
      startSub: 'M+0 · kick-off',
      endLabel: 'ZGODNOŚĆ',
      endSub: 'M+6 · sign-off zarządu',
      nodes: [
        { month: 'M+1', label: 'ASSESSMENT', active: true, leftPct: 18 },
        { month: 'M+2', label: 'DESIGN', leftPct: 34 },
        { month: 'M+3', label: 'BUILD', leftPct: 50 },
        { month: 'M+4', label: 'TEST', leftPct: 66 },
        { month: 'M+5', label: 'DRY-RUN', leftPct: 82 },
      ],
      marker: 'JESTEŚCIE TUTAJ → ASSESSMENT',
    },
  },
} satisfies Meta<typeof TimelineStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MidProject: Story = {
  args: {
    data: {
      startLabel: 'START',
      startSub: 'M+0 · kick-off',
      endLabel: 'ZGODNOŚĆ',
      endSub: 'M+6 · sign-off zarządu',
      nodes: [
        { month: 'M+1', label: 'ASSESSMENT', leftPct: 18 },
        { month: 'M+2', label: 'DESIGN', leftPct: 34 },
        { month: 'M+3', label: 'BUILD', active: true, leftPct: 50 },
        { month: 'M+4', label: 'TEST', leftPct: 66 },
        { month: 'M+5', label: 'DRY-RUN', leftPct: 82 },
      ],
      marker: 'JESTEŚCIE TUTAJ → BUILD',
    },
  },
};
