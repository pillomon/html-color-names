import Title from '@/components/block/title';
import SubTitle from '@/components/block/subtitle';
import Search from '@/components/block/search';
import YearOfColor from '@/components/block/yoc';

interface MainProps {
  type: string;
}

export default function Main({ type }: MainProps) {
  if (type === 'detail') {
    return (
      <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
        <Title />
        <Search />
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
