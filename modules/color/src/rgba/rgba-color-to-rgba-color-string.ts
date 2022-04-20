import { type RGBAColor } from './rgba-color';
import { type RGBAColorString } from './rgba-color-string';

/**
 * Returns an RGBA string, given an RGBA color
 * @param color Color
 * @returns RGBA string
 */
export function rgbaColorToRGBAColorString(color: RGBAColor): RGBAColorString {
  const { red, green, blue, alpha } = color;
  const r = Math.floor(red * 255);
  const g = Math.floor(green * 255);
  const b = Math.floor(blue * 255);
  return `rgba(${r},${g},${b},${alpha})`;
}
