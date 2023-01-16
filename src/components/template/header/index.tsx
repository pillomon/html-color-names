import { useState } from 'react';
import Logo from '@/components/block/logo';
import getRandomColor from '@/utils/createColor';

export default function Header() {
  const [logoColor, setLogoColor] = useState('#000000');

  const onChangeColor = () => {
    setLogoColor(getRandomColor());
  };

  return (
    <header>
      <div
        className="w-full h-auto border border-black"
        aria-label="haeder container"
      >
        <div>
          <Logo logoColor={logoColor} onChangeColor={onChangeColor} />
        </div>
      </div>
    </header>
  );
}
