export function getNegativeHex(hex: string | undefined): string {
  if (hex === undefined) return '';
  const tempHexArr = hex.slice(1).split('');
  const result = [];

  for (let i = 0; i < tempHexArr.length; i++) {
    const tempNum = parseInt(tempHexArr[i], 16);
    result.push((15 - tempNum).toString(16));
  }

  return '#' + result.join('').toUpperCase();
}
