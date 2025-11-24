import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Portfolio - Kim Jung Yeol',
  description: '포트폴리오 웹사이트입니다. 지금까지 경험한 다양한 프로젝트를 확인할 수 있습니다.',
  keywords: ['포트폴리오', '프로젝트', 'Portfolio', 'Developer'],
  icons: {
    icon: '/icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
