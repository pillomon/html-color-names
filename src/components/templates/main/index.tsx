import Link from 'next/link';
import Title from '@/components/atoms/title';
import SubTitle from '@/components/atoms/subtitle';
import Search from '@/components/blocks/search';
import Example from '@/components/blocks/example';
import { getNegativeHex } from '@/utils/getNegativeHex';
import ArrowBack from '@material-ui/icons/ArrowBack';

interface MainProps {
  type: string;
  hex?: string;
  name?: string;
}

export default function Main({ type, hex, name }: MainProps) {
  if (type === 'color') {
    return (
      <>
        <Link className="absolute top-2 left-2" href="/">
          <ArrowBack style={{ color: hex }} />
        </Link>
        <Example hex={hex} negativeHex={getNegativeHex(hex)} name={name} />
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
