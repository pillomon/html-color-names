import Title from '@/components/block/title';
import Search from '@/components/block/search';

export default function Main() {
  return (
    <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto">
      <Title />
      <Search />
    </div>
  );
}
