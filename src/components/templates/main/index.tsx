import Title from '@/components/atoms/title';
import SubTitle from '@/components/atoms/subtitle';
import Search from '@/components/blocks/search';

interface MainProps {
  type: string;
}

export default function Main({ type }: MainProps) {
  if (type === 'color') {
    return (
      <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
        test
      </div>
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
