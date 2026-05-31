import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CyCommSec /NIS2 — Zgodność, której zarząd nie boi się podpisać",
  description:
    'NIS2 i KSC 2026 — kary do 10 mln EUR, osobista odpowiedzialność zarządu. Audyt od 9 900 zł, wdrożenie w 6 miesięcy, MSS od 15 900 zł/mies.',
  metadataBase: new URL('https://ccsv3.vercel.app'),
  openGraph: {
    title: 'CyCommSec /NIS2',
    description:
      'NIS2/KSC 2026: kary, kwalifikacja, audyt, wdrożenie, MSS, zarząd — w jednym miejscu.',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}
