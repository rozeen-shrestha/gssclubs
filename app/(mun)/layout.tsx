import type { Metadata } from 'next';
import './mun.css';
import { Header } from '@/components/mun/layout/header';
import { Footer } from '@/components/mun/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'GSSMUN',
  description: 'Official website for the GSSMUN | Global School of Science Model United Nations.',
  keywords: ['GSSMUN', 'Model UN', 'MUN', 'Conference', 'Debate', 'Global Issues'],
};

export default function MunLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="dark font-body antialiased background-logo">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
