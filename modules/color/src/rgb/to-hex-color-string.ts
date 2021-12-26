import { type HexColorCharacter } from '../hex/hex-color-character';
import { type HexColorString } from '../hex/hex-color-string';
import { type RGB } from './rgb';

/**
 * Returns an hexadecimal color string
 * @param color Color
 * @returns Hexadecimal color string
 */
export function toHexColorString(color: RGB): HexColorString {
  const { red, green, blue } = color;
  const r = Math.floor(red * 255).toString(16).padStart(2, '0') as HexColorCharacter;
  const g = Math.floor(green * 255).toString(16).padStart(2, '0') as HexColorCharacter;
  const b = Math.floor(blue * 255).toString(16).padStart(2, '0') as HexColorCharacter;
  return `#${r}${g}${b}`;
}
