import Head from 'next/head';
import Main from '@/components/template/main';
import YearOfColor from '@/components/block/yoc';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HTML Color Names</title>
      </Head>
      <Main type={'home'} />
    </>
  );
}
