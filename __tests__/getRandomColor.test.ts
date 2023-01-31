import { getRandomColor } from '@/utils/getRandomColor';

test('getNegativeHex', () => {
  const hexRegExp = /^#[0-9a-f]{6}$/i;
  expect(getRandomColor()).toMatch(hexRegExp);
});
