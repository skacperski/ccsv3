import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ReportStage } from './ReportStage';

const meta = {
  title: 'Stages/ReportStage',
  component: ReportStage,
  parameters: { backgrounds: { default: 'ink' } },
  args: {
    data: {
      reportStamp: 'REPORT · KSC · 2026-Q1',
      reportTitle: 'CyCommSec / Audyt NIS2 — ENTITAS S.A.',
      pageCode: 'PG-002 / POUFNE',
      score: [
        { key: 'Krytyczne', value: '7', tone: 'red' },
        { key: 'Średnie', value: '14', tone: 'amber' },
        { key: 'Zgodne', value: '41', tone: 'green' },
      ],
      bars: [
        { label: 'Art. 21.2.a', pct: 78, tone: 'r' },
        { label: 'Art. 21.2.d', pct: 54, tone: 'a' },
        { label: 'Art. 23.1', pct: 92, tone: 'g' },
        { label: 'Art. 23.4', pct: 46, tone: 'a' },
        { label: 'Art. 24', pct: 34, tone: 'r' },
      ],
      sticky: {
        headline: 'STARTUJEMY OD',
        bigNumber: '9 900 zł',
        subline: '14 dni roboczych. Bez vendor-locku.',
      },
    },
  },
} satisfies Meta<typeof ReportStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllGreen: Story = {
  args: {
    data: {
      reportStamp: 'REPORT · KSC · 2026-Q2',
      reportTitle: 'CyCommSec / Re-audit NIS2 — ENTITAS S.A.',
      pageCode: 'PG-008 / POUFNE',
      score: [
        { key: 'Krytyczne', value: '0', tone: 'green' },
        { key: 'Średnie', value: '3', tone: 'amber' },
        { key: 'Zgodne', value: '59', tone: 'green' },
      ],
      bars: [
        { label: 'Art. 21.2.a', pct: 98, tone: 'g' },
        { label: 'Art. 21.2.d', pct: 91, tone: 'g' },
        { label: 'Art. 23.1', pct: 100, tone: 'g' },
        { label: 'Art. 23.4', pct: 87, tone: 'g' },
        { label: 'Art. 24', pct: 94, tone: 'g' },
      ],
      sticky: {
        headline: 'ZGODNOŚĆ UTRZYMANA',
        bigNumber: '100%',
        subline: 'Re-audit 2026-Q2. Brak krytycznych.',
      },
    },
  },
};
