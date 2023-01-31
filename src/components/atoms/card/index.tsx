import Link from 'next/link';

export interface CardProps {
  name: string;
  hex: string;
  negativeHex: string;
}

export default function Card({ name, hex, negativeHex }: CardProps) {
  return (
    <div
      className={`w-48 h-64 cursor-pointer hover:scale-105`}
      style={{ backgroundColor: hex }}
    >
      <Link
        className="relative block w-full h-full"
        href={{
          pathname: `/color/${encodeURIComponent(hex.slice(1))}`,
          query: { name: name || '' },
        }}
      >
        {name !== '' ? (
          <span
            className="font-magilio absolute top-1 left-2"
            style={{ color: negativeHex }}
          >
            {name}
          </span>
        ) : (
          <></>
        )}
        <span
          className="inline-block font-magilio absolute bottom-1 right-2"
          style={{ color: negativeHex }}
        >
          {hex.toUpperCase()}
        </span>
      </Link>
    </div>
  );
}
