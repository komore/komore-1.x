import type { Color } from './color';
import { toHuePercentage } from './to-hue-percentage';

export function fromHsvString(h: number, s: number, v: number): Omit<Color, 'a'> {
  h = h * 3.6;

  const c = v * s;

  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));

  const m = v - c;

  let RGB = { r: 0, g: 0, b: 0 };

  if (0 <= h && h < 60) {
    RGB = { r: c, g: x, b: 0 };
  } else if (60 <= h && h < 120) {
    RGB = { r: x, g: c, b: 0 };
  } else if (120 <= h && h < 180) {
    RGB = { r: 0, g: c, b: x };
  } else if (180 <= h && h < 240) {
    RGB = { r: 0, g: x, b: c };
  } else if (240 <= h && h < 300) {
    RGB = { r: x, g: 0, b: c };
  } else if (300 <= h && h < 360) {
    RGB = { r: c, g: 0, b: x };
  }

  const rgbValue = {
    r: Math.round((RGB.r + m) * 255),
    g: Math.round((RGB.g + m) * 255),
    b: Math.round((RGB.b + m) * 255)
  };

  console.log('[hue after]', toHuePercentage(rgbValue));

  return rgbValue;
}
