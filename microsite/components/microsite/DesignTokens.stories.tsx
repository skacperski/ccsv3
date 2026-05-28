import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { colors } from '@/lib/tokens';

const meta = {
  title: 'Design System/Tokens',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const Swatch = ({ name, hex }: { name: string; hex: string }) => {
  const dark = ['ink', 'ink2', 'line', 'blueDeep'].includes(name);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div
        style={{
          background: hex,
          width: 80,
          height: 80,
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />
      <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#555' }}>{name}</span>
      <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#888' }}>{hex}</span>
    </div>
  );
};

export const Palette: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <h2 style={{ fontFamily: '"Helvetica Neue", sans-serif', fontWeight: 900, fontSize: 24, marginBottom: 24 }}>
        Color Tokens
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {Object.entries(colors).map(([name, hex]) => (
          <Swatch key={name} name={name} hex={hex} />
        ))}
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
      <h2 style={{ fontWeight: 900, fontSize: 24, marginBottom: 32, letterSpacing: '-0.01em' }}>
        Typography Scale
      </h2>
      <div style={{ display: 'grid', gap: 24 }}>
        {[
          { label: 'Display XL — font-display 900 clamp(48px,6vw,88px) ls -0.03em', size: 'clamp(48px,6vw,88px)', weight: 900, ls: '-0.03em', text: 'Kary / Audyt / MSS' },
          { label: 'Display LG — font-display 900 42px ls -0.02em', size: 42, weight: 900, ls: '-0.02em', text: 'Skala odpowiedzialności' },
          { label: 'Display MD — font-display 900 28px ls -0.01em', size: 28, weight: 900, ls: '-0.01em', text: 'Raport, który zarząd przeczyta' },
          { label: 'Body LG — 18px / 1.45 lh', size: 18, weight: 400, ls: '0', text: 'Od 9 900 zł. Raport dla zarządu, nie dla działu IT. Czternaście dni roboczych.' },
          { label: 'Body — 16px / 1.5 lh', size: 16, weight: 400, ls: '0', text: 'Wasi dostawcy IT są wasim ryzykiem. Brak weryfikacji bezpieczeństwa kontrahentów to samodzielna podstawa do sankcji.' },
          { label: 'Body SM — 14px / 1.45 lh', size: 14, weight: 400, ls: '0', text: 'Do 10 mln EUR lub 2% globalnego obrotu rocznego (essential entities).' },
          { label: 'Mono label — JetBrains Mono 11px ls 0.08em uppercase', size: 11, weight: 500, ls: '0.08em', text: 'CZYTAJ DALEJ', mono: true },
          { label: 'Mono label LG — JetBrains Mono 13px ls 0.05em', size: 13, weight: 500, ls: '0.05em', text: '01/ KARY · 02/ KWALIFIKACJA · 03/ AUDYT', mono: true },
        ].map((t) => (
          <div key={t.label} style={{ borderTop: '1px solid #d6d6d1', paddingTop: 16 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#8a8a86', marginBottom: 8, letterSpacing: '0.05em' }}>
              {t.label}
            </div>
            <div
              style={{
                fontFamily: t.mono ? 'var(--font-jetbrains-mono, monospace)' : '"Helvetica Neue", Arial, sans-serif',
                fontSize: t.size,
                fontWeight: t.weight,
                letterSpacing: t.ls,
                lineHeight: 1.2,
                textTransform: t.mono ? 'uppercase' : undefined,
                color: '#0a0a0a',
              }}
            >
              {t.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
