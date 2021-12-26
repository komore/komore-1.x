import { type RGBA } from './rgba';
import { type RGBAString } from './rgba-string';

/**
 * Returns an RGBA string, given an RGBA color
 * @param color Color
 * @returns RGBA string
 */
export function toRGBAString(color: RGBA): RGBAString {
  const { red, green, blue, alpha } = color;
  const r = Math.floor(red * 255);
  const g = Math.floor(green * 255);
  const b = Math.floor(blue * 255);
  return `rgba(${r},${g},${b},${alpha})`;
}
