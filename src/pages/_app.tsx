import type { AppProps } from 'next/app';
import 'normalize.css';
import '@/styles/globals.css';
import Layout from '@/components/templates/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
