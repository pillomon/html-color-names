import { Span } from './styled';

interface LogoProps {
  logoColor: string;
  onChangeColor: () => void;
}

export default function Logo({ logoColor, onChangeColor }: LogoProps) {
  return (
    <h1 onClick={onChangeColor}>
      <Span className="font-anton cursor-pointer" color={logoColor}>
        SUPISA-DEV
      </Span>
    </h1>
  );
}
