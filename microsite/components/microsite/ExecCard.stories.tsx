import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ExecCard } from './ExecCard';

const meta = {
  title: 'Primitives/ExecCard',
  component: ExecCard,
  args: {
    theme: 'default',
    quote: {
      name: 'MARTA KOZŁOWSKA',
      role: 'PARTNER, COMPLIANCE',
      quote: '„NIS2 nie zostawia miejsca na pomyłki. <em>To nie problem IT — to problem zarządu.</em> Audyt nie pyta, czy wdrożyliście. Pyta, czy odpowiedzialny członek zarządu rozumie, co podpisał."',
    },
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['default', 'paper', 'dark', 'blue'] },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ExecCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  parameters: { backgrounds: { default: 'ink' } },
  args: {
    theme: 'dark',
    quote: {
      name: 'TOMASZ WÓJCIK',
      role: 'HEAD OF SOC',
      quote: '„Nasz SOC nie sprzedaje godzin. <em>Sprzedaje wynik: czas reakcji 15 minut na incydent krytyczny</em>, 24/7, ze zobowiązaniem w SLA."',
    },
  },
};

export const Blue: Story = {
  parameters: { backgrounds: { default: 'blue' } },
  args: {
    theme: 'blue',
    quote: {
      name: 'JAKUB LEWANDOWSKI',
      role: 'CEO · CYCOMMSEC',
      quote: '„Dziewięć na dziesięć rozmów o NIS2 zaczyna się od CIO. <em>Powinno zaczynać się od zarządu.</em> Sankcja jest osobista."',
    },
  },
};
