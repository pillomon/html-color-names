import Head from 'next/head';
import { useRouter } from 'next/router';
import Main from '@/components/templates/main';

export default function List() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HTML Color Names</title>
      </Head>
      <Main type={'color'} hex={'#' + id} name={name} />
    </>
  );
}
