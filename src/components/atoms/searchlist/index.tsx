import Link from 'next/link';
import useStore from '@/store/useStore';
import SearchIcon from '@material-ui/icons/Search';
import { ColorType } from '@/constants/color';

interface SearchListProps {
  idx: number;
  element: ColorType;
  selected: boolean;
}

export default function SearchList({
  idx,
  element,
  selected,
}: SearchListProps) {
  const setFocusItem = useStore((state) => state.setFocusItem);

  return (
    <li
      className={`w-96 h-auto cursor-pointer ${
        selected ? 'bg-[#101f4a]' : 'bg-[#10172a]'
      }`}
      onMouseEnter={() => setFocusItem(idx)}
      onMouseLeave={() => setFocusItem(null)}
    >
      <Link
        className="flex items-center justify-between py-2 w-auto h-auto focus:bg-[#101f4a]"
        href={{
          pathname: `/color/${encodeURIComponent(element.hex.slice(1))}`,
          query: { name: element.name || '' },
        }}
      >
        <span className="flex items-center gap-2 pl-4">
          <span className="flex items-center w-auto h-auto">
            <SearchIcon fontSize="small" className="block text-[#fffeee]" />
          </span>
          {element.name !== '' ? (
            <span className="inline-block text-[#fffeee] text-base">
              {element.name}
            </span>
          ) : (
            <></>
          )}
          <span
            className={`inline-block text-[#fffeee] ${
              element.name === '' ? 'text-base' : 'text-xs'
            }`}
          >
            {element.hex.toUpperCase()}
          </span>
        </span>
        <div
          className="rounded w-3 h-3 mr-4"
          style={{ backgroundColor: element.hex }}
        />
      </Link>
    </li>
  );
}
