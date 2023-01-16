import { useState } from 'react';
import getRandomColor from '@/utils/createColor';

export default function Header() {
  const [logoColor, setLogoColor] = useState('#000');

  const onChangeColor = () => {
    console.log(getRandomColor());
  };
  return (
    <header>
      <div
        className="w-full h-auto border border-black"
        aria-label="haeder container"
      >
        <div>
          <h1 onClick={onChangeColor}>
            <span className={`font-anton text-${logoColor}`}>SUPISA-DEV</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
