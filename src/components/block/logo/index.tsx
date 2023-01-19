interface LogoProps {
  logoColor: string;
  onChangeColor: (idx: void, color: void) => void;
}

export default function Logo({ logoColor, onChangeColor }: LogoProps) {
  return (
    <h1
      className="inline-block w-auto h-auto pt-4 pb-2 cursor-pointer"
      onClick={() => onChangeColor()}
    >
      <span
        className="font-magilio text-4xl leading-12 transition-colors duration-1000 ease-linear"
        style={{ color: logoColor }}
      >
        SUPISA-COLOR
      </span>
    </h1>
  );
}
