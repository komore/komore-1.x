import type { RGB } from './rgb';
import { toHexColorString } from './to-hex-color-string';

describe('To hexadecimal color string', () => {
  it.each([
    [1, 0.5, 0.25, 'ff7f3f'],
    [0, 0.125, 1, '001fff']
  ])('returns an hexadecimal color string', (red, green, blue, expectedResult) => {
    given: 'an RGB color';
    const color: RGB = {
      red,
      green,
      blue
    };
    when: 'getting an hexadecimal color string';
    const result = toHexColorString(color);
    expect: 'a valid string to have been returned';
    expect(result).toBe(expectedResult);
  });
});
