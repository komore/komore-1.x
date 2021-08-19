import type { RGB } from '../rgb/rgb';
import { toRGBA } from './to-rgba';

describe('To RGBA', () => {
  it('returns an RGBA color from an RGB color', () => {
    given: 'an RGB color';
    const color: RGB = {
      red: 0.75,
      green: 0.5,
      blue: 0.25
    };
    when: 'converting to an RGBA color';
    const result = toRGBA(color);
    expect: 'the RGBA color to match the RGB color with a 1.0 alpha component';
    expect(result.red).toBe(color.red);
    expect(result.green).toBe(color.green);
    expect(result.blue).toBe(color.blue);
    expect(result.alpha).toBe(1);
  });
});
