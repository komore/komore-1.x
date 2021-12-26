import { type RGB } from './rgb';
import { type RGBString } from './rgb-string';

/**
 * Returns an RGB string, given an RGB color
 * @param color Color
 * @returns RGB string
 */
export function toRGBString(color: RGB): RGBString {
  const { red, green, blue } = color;
  const r = Math.floor(red * 255);
  const g = Math.floor(green * 255);
  const b = Math.floor(blue * 255);
  return `rgb(${r},${g},${b})`;
}
