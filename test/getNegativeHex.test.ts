import { getNegativeHex } from '@/utils/getNegativeHex';

it('test', () => {
  expect(getNegativeHex('FFFFFF').toBe('#000000'));
});
