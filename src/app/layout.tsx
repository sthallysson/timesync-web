import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Providers } from './providers';

import CalendarContextWrapper from '@/contexts/CalendarContextWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Timesync',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="light">
      <body className={inter.className} suppressHydrationWarning={true}>
        <CalendarContextWrapper>
          <Providers>{children}</Providers>
        </CalendarContextWrapper>
      </body>
    </html>
  );
}
