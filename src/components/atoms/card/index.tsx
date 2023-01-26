interface CardProps {
  name?: string;
  hex: string;
  negativeHex: string;
}

export default function Card({ name, hex, negativeHex }: CardProps) {
  return (
    <div className={`relative w-48 h-64`} style={{ backgroundColor: hex }}>
      <span
        className="inline-block absolute bottom-2 right-2"
        style={{ color: negativeHex }}
      >
        {hex}
      </span>
    </div>
  );
}
