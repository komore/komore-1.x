import { type RGBColor } from './rgb-color';
import { rgbColorToRGBColorString } from './rgb-color-to-rgb-color-string';

describe('RGB color to RGB color string', () => {
  it.each([
    [1, 0.5, 0.25, 'rgb(255,127,63)'],
    [0, 0.125, 1, 'rgb(0,31,255)'],
  ])('returns an RGB string', (red, green, blue, expectedResult) => {
    given: 'an RGB color';
    const color: RGBColor = {
      red,
      green,
      blue,
    };

    when: 'getting an RGB string';
    const result = rgbColorToRGBColorString(color);

    expect: 'a valid string to have been returned';
    expect(result).toBe(expectedResult);
  });
});
