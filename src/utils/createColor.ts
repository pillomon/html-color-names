import HEXADECIMAL from '@/constants/hexadecimal';

export default function getRandomColor(): string {
  const result = [];

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    result.push(HEXADECIMAL[random]);
  }
  return '#' + result.join('');
}
