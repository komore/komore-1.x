import { type RGBColor } from './rgb-color';
import { type RGBColorString } from './rgb-color-string';

/**
 * Returns an RGB string, given an RGB color
 *
 * @param color Color
 * @returns RGB string
 */
export function rgbColorToRGBColorString(color: RGBColor): RGBColorString {
  const { red, green, blue } = color;
  const r = Math.floor(red * 255);
  const g = Math.floor(green * 255);
  const b = Math.floor(blue * 255);
  return `rgb(${r},${g},${b})`;
}
