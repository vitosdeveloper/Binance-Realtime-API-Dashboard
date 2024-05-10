import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Binance Realtime API Dashboard',
  description:
    'Processo Seletivo | Pessoa Desenvolvedora Web Sênior | Etapa Técnica | Allintra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='binance-logo.svg' sizes='any' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
