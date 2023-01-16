import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/template/header';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Browser Named Color</title>
      </Head>
      <Header />
      <main>Test</main>
    </>
  );
}
