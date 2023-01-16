import HEXADECIMAL from '@/constants/hexadecimal';

export default function getRandomColor(): string {
  const RANDOM = Math.floor(Math.random() * 17);

  console.log(RANDOM);

  return HEXADECIMAL[RANDOM];
}
