import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { QuizStage } from './QuizStage';

const meta = {
  title: 'Stages/QuizStage',
  component: QuizStage,
  parameters: { backgrounds: { default: 'blue' } },
  args: {
    data: {
      questionLabel: 'PYTANIE 4 / 6',
      timeLabel: '~ 1 MIN POZOSTAŁO',
      questionText: 'Czy świadczycie usługi krytyczne dla podmiotu z sektora regulowanego?',
      options: [
        { label: 'Tak, w sektorze energetycznym' },
        { label: 'Tak, jako dostawca IT dla szpitala / banku', picked: true },
        { label: 'Pośrednio (poddostawca poddostawcy)' },
        { label: 'Nie' },
      ],
      result: {
        tag: 'PODLEGASZ',
        entity: 'Important Entity',
        reason: 'Art. 3 ust. 2 lit. b — sektor cyfrowy jako dostawca usług ICT dla podmiotu kluczowego.',
      },
    },
  },
} satisfies Meta<typeof QuizStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstQuestion: Story = {
  args: {
    data: {
      questionLabel: 'PYTANIE 1 / 6',
      timeLabel: '~ 2 MIN POZOSTAŁO',
      questionText: 'W jakim sektorze działa wasza firma?',
      options: [
        { label: 'Energetyka' },
        { label: 'Transport' },
        { label: 'Bankowość / ubezpieczenia' },
        { label: 'Infrastruktura cyfrowa / IT' },
      ],
      result: {
        tag: 'SPRAWDZAMY',
        entity: 'Sektor krytyczny',
        reason: 'Podaj więcej informacji, aby określić zakres NIS2.',
      },
    },
  },
};
