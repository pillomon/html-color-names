export function getNegativeHex(hex: string): string {
  const tempHexArr = hex.split('');
  const result = [];

  for (let i = 0; i < tempHexArr.length; i++) {
    const tempNum = parseInt(tempHexArr[i], 16);
    result.push((15 - tempNum).toString(16));
  }

  return result.join('');
}
