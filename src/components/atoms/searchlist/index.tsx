import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import { ColorType } from '@/constants/color';

interface SearchListProps {
  element: ColorType;
}

export default function SearchList({ element }: SearchListProps) {
  return (
    <Link
      href={`/color/${encodeURIComponent(element.hex.slice(1))}`}
      className="block w-auto h-auto"
    >
      <li className="flex items-center justify-between w-96 h-auto cursor-pointer py-2 bg-[#10172a] hover:bg-[#101F4a] last:rounded-b-md">
        <span className="flex items-center gap-2 pl-4">
          <span className="flex items-center w-auto h-auto">
            <SearchIcon fontSize="small" className="blcok text-[#fffeee]" />
          </span>
          <span className="inline-block text-[#fffeee] text-base">
            {element.name}
          </span>
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
      </li>
    </Link>
  );
}
