import { getNegativeHex } from '@/utils/getNegativeHex';

test('getNegativeHex', () => {
  expect(getNegativeHex(undefined)).toBe('');
  expect(getNegativeHex('#FFFFFF')).toBe('#000000');
  expect(getNegativeHex('#012345')).toBe('#FEDCBA');
});
