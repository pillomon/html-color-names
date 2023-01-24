import Link from 'next/link';
import Title from '@/components/atoms/title';
import SubTitle from '@/components/atoms/subtitle';
import Search from '@/components/blocks/search';
import Example from '@/components/blocks/example';
import { getNegativeHex } from '@/utils/getNegativeHex';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useEffect } from 'react';

interface MainProps {
  type: string;
  id: string;
  name: string;
}

export default function Main({ type, id, name }: MainProps) {
  if (type === 'color') {
    return (
      <>
        <Link className="absolute top-2 left-2" href="/">
          <ArrowBack style={{ color: '#' + id }} />
        </Link>
        <Example
          hex={'#' + id}
          negativeHex={'#' + getNegativeHex(id)}
          name={name}
        />
      </>
    );
  }
  return (
    <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-screen-full">
      <Title />
      <SubTitle />
      <Search />
    </div>
  );
}
