import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeatureTable } from './FeatureTable';

const ROWS = [
  { label: 'Sankcje administracyjne', body: 'Do 10 mln EUR lub 2% globalnego obrotu rocznego (essential entities). Dla podmiotów important — do 7 mln EUR lub 1,4% obrotu.', more: 'CZYTAJ DALEJ' },
  { label: 'Tymczasowy zakaz pełnienia funkcji', body: 'Organ nadzoru może zawiesić w obowiązkach członka zarządu odpowiedzialnego za nadzór nad cyberbezpieczeństwem.', more: 'CZYTAJ DALEJ' },
  { label: 'Publikacja naruszenia', body: 'Decyzja sankcyjna jest publikowana z nazwą podmiotu. Reputacyjny koszt sankcji bywa wyższy niż samej kary finansowej.', more: 'CZYTAJ DALEJ' },
  { label: 'Solidarna odpowiedzialność', body: 'W przypadku rażącego niedbalstwa członkowie organu zarządzającego mogą odpowiadać własnym majątkiem.', more: 'CZYTAJ DALEJ' },
];

const meta = {
  title: 'Primitives/FeatureTable',
  component: FeatureTable,
  args: {
    rows: ROWS,
    theme: 'dark',
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['default', 'paper', 'dark', 'blue'] },
  },
  parameters: { backgrounds: { default: 'ink' } },
} satisfies Meta<typeof FeatureTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Default: Story = {
  parameters: { backgrounds: { default: 'paper' } },
  args: { theme: 'default' },
};

export const Paper: Story = {
  parameters: { backgrounds: { default: 'paper' } },
  args: { theme: 'paper' },
};

export const Blue: Story = {
  parameters: { backgrounds: { default: 'blue' } },
  args: { theme: 'blue' },
};
