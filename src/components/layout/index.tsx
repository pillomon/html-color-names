import { ReactNode } from 'react';
import Header from '../templates/header';
import Footer from '../templates/footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-8rem)] relative">{children}</main>
      <Footer />
    </>
  );
}
