import { type RGBColor } from '../rgb/rgb-color';
import { rgbColorToRGBAColor } from './rgb-color-to-rgba-color';

describe('RGB color to RGBA color', () => {
  it('returns an RGBA color from an RGB color', () => {
    given: 'an RGB color';
    const color: RGBColor = {
      red: 0.75,
      green: 0.5,
      blue: 0.25,
    };
    and: 'an alpha component';
    const alpha = 0.5;

    when: 'creating a function that converts an RGB color to an RGBA color';
    const func = rgbColorToRGBAColor(alpha);
    and: 'calling it';
    const result = func(color);

    expect: 'the RGBA color to match the RGB color with a 1.0 alpha component';
    expect(result.red).toBe(color.red);
    expect(result.green).toBe(color.green);
    expect(result.blue).toBe(color.blue);
    expect(result.alpha).toBe(alpha);
  });
});
