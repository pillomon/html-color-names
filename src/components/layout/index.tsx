import { ReactNode } from 'react';
import Header from '../templates/header';
import Footer from '../templates/footer';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
