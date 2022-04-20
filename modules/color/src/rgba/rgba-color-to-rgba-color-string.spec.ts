import { type RGBAColor } from './rgba-color';
import { rgbaColorToRGBAColorString } from './rgba-color-to-rgba-color-string';

describe('RGBA color to RGBA color string', () => {
  it.each([
    [1, 0.5, 0.25, 1.0, 'rgba(255,127,63,1)'],
    [1, 0.5, 0.25, 0.5, 'rgba(255,127,63,0.5)'],
  ])('returns an RGBA string', (red, green, blue, alpha, expectedResult) => {
    given: 'an RGBA color';
    const color: RGBAColor = {
      red,
      green,
      blue,
      alpha,
    };

    when: 'getting an RGBA string';
    const result = rgbaColorToRGBAColorString(color);

    expect: 'a valid string to have been returned';
    expect(result).toBe(expectedResult);
  });
});
