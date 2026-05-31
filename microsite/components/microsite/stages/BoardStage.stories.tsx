import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BoardStage } from './BoardStage';

const meta = {
  title: 'Stages/BoardStage',
  component: BoardStage,
  parameters: { backgrounds: { default: 'blue' } },
  args: {
    data: {
      docNumber: 'UCHWAŁA NR 12/2026 / ZARZĄD ENTITAS S.A.',
      docStatus: 'PROJEKT / DO PODPISU',
      title: 'W sprawie wdrożenia Krajowego Systemu Cyberbezpieczeństwa zgodnie z dyrektywą NIS2',
      bullets: [
        'Zatwierdzenie polityki bezpieczeństwa informacji',
        'Akceptacja mapy ryzyk i ryzyka rezydualnego',
        'Wyznaczenie członka zarządu odpowiedzialnego',
        'Powołanie pełnomocnika ds. cyberbezpieczeństwa',
        'Zatwierdzenie procedury notyfikacji 24/72h',
        'Akceptacja budżetu rocznego — 1 240 000 zł',
      ],
      signLeft: 'Prezes Zarządu',
      signRight: 'Członek Zarządu ds. Cyber',
      stamp: 'PILNE',
    },
  },
} satisfies Meta<typeof BoardStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Approved: Story = {
  args: {
    data: {
      docNumber: 'UCHWAŁA NR 12/2026 / ZARZĄD ENTITAS S.A.',
      docStatus: 'ZATWIERDZONA',
      title: 'W sprawie wdrożenia Krajowego Systemu Cyberbezpieczeństwa zgodnie z dyrektywą NIS2',
      bullets: [
        'Zatwierdzenie polityki bezpieczeństwa informacji',
        'Akceptacja mapy ryzyk i ryzyka rezydualnego',
        'Wyznaczenie członka zarządu odpowiedzialnego',
        'Powołanie pełnomocnika ds. cyberbezpieczeństwa',
        'Zatwierdzenie procedury notyfikacji 24/72h',
        'Akceptacja budżetu rocznego — 1 240 000 zł',
      ],
      signLeft: 'Prezes Zarządu',
      signRight: 'Członek Zarządu ds. Cyber',
      stamp: 'PODPISANO',
    },
  },
};
