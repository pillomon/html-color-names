interface CardProps {
  name?: string;
  hex: string;
  negativeHex: string;
}

export default function Card({ name, hex, negativeHex }: CardProps) {
  return (
    <div className={`relative w-48 h-64`} style={{ backgroundColor: hex }}>
      {name !== '' ? (
        <span className="font-magilo absolute top-1 left-2">{name}</span>
      ) : (
        <></>
      )}
      <span
        className="inline-block font-magilio absolute bottom-1 right-2"
        style={{ color: negativeHex }}
      >
        {hex}
      </span>
    </div>
  );
}
