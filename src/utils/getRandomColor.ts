import HEXADECIMAL from '@/constants/hexadecimal';

export default function getRandomColor(): string {
  const result = [];

  for (let idx = 0; idx < 6; idx++) {
    const random = Math.floor(Math.random() * 16);
    result.push(HEXADECIMAL[random]);
  }
  return '#' + result.join('');
}
