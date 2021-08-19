import type { RGB } from './rgb';

/**
 * Returns an RGB string, given an RGB color
 * @param color Color
 * @returns RGB string
 */
export function toRGBString(color: RGB): string {
  const { red, green, blue } = color;
  const r = Math.floor(red * 255);
  const g = Math.floor(green * 255);
  const b = Math.floor(blue * 255);
  return `rgb(${r},${g},${b})`;
}
