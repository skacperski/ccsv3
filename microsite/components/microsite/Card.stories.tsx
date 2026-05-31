import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';

const BASE_ITEM = {
  canvas: { kind: 'striped-dark' as const, tag: 'screenshot · rejestr kar' },
  title: 'Rejestr decyzji UKE',
  body: 'Mapujemy każdą decyzję sankcyjną krajowego organu właściwego do konkretnego artykułu KSC.',
  cta: { label: 'CZYTAJ DALEJ', variant: 'blue' as const },
};

const meta = {
  title: 'Primitives/Card',
  component: Card,
  args: {
    item: BASE_ITEM,
    theme: 'default',
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['default', 'paper', 'dark', 'blue'] },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  parameters: { backgrounds: { default: 'ink' } },
  args: { theme: 'dark' },
};

export const Blue: Story = {
  parameters: { backgrounds: { default: 'blue' } },
  args: {
    theme: 'blue',
    item: {
      canvas: { kind: 'stat-blue' as const, bigText: '18', smallText: 'SEKTORÓW KRYTYCZNYCH' },
      title: 'Sektory objęte regulacją',
      body: 'Energia, transport, bankowość, infrastruktura cyfrowa, administracja publiczna, dostawcy ICT.',
      cta: { label: 'SPRAWDŹ SEKTOR', variant: 'white' as const },
    },
  },
};

export const StatCanvas: Story = {
  args: {
    item: {
      canvas: { kind: 'stat-blue' as const, bigText: '50+', smallText: 'PRACOWNIKÓW / 10 MLN EUR' },
      title: 'Próg wielkości',
      body: 'Dyrektywa ustawia jasne progi — średni i duży podmiot kwalifikuje się automatycznie.',
      cta: { label: 'PROGI SZCZEGÓŁOWO', variant: 'white' as const },
    },
    theme: 'blue',
  },
  parameters: { backgrounds: { default: 'blue' } },
};

export const LightCanvas: Story = {
  args: {
    item: {
      canvas: { kind: 'striped-light' as const, tag: 'illustration · org chart' },
      title: 'Jeden kierownik projektu',
      body: 'Wasz pojedynczy punkt kontaktu — odpowiedzialny za harmonogram, dostawców i raportowanie.',
      cta: { label: 'JAK PRACUJEMY', variant: 'blue' as const },
    },
    theme: 'paper',
  },
};
