import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Portfolio - 개발자 포트폴리오',
  description: '개발자 포트폴리오 웹사이트입니다. 다양한 프로젝트와 경험을 확인하세요.',
  keywords: ['포트폴리오', '개발자', '프로젝트', 'Portfolio', 'Developer'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
