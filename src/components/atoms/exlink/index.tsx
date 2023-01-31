import Link from 'next/link';
import { IconType } from 'react-icons';

export interface ExLinkProps {
  url: string;
  Icon: IconType;
  color: string;
}

export default function ExLink({ url, Icon, color }: ExLinkProps) {
  return (
    <Link href={url} target="_blank" rel="noreferrer noopener">
      <Icon
        className="block w-8 h-8 hover:scale-110"
        style={{ color: color }}
      />
    </Link>
  );
}
