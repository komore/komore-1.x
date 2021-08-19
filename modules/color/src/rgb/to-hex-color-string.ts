import type { RGB } from './rgb';

/**
 * Returns an hexadecimal color string
 * @param color Color
 * @returns Hexadecimal color string
 */
export function toHexColorString(color: RGB): string {
  const { red, green, blue } = color;
  const r = Math.floor(red * 255).toString(16).padStart(2, '0');
  const g = Math.floor(green * 255).toString(16).padStart(2, '0');
  const b = Math.floor(blue * 255).toString(16).padStart(2, '0');
  return `${r}${g}${b}`;
}
