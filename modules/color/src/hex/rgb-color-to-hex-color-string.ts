import { type RGBColor } from '../rgb/rgb-color';
import { type HexColorCharacter } from './hex-color-character';
import { type HexColorString } from './hex-color-string';

/**
 * Returns an hexadecimal color string
 *
 * @param color Color
 * @returns Hexadecimal color string
 */
export function rgbColorToHexColorString(color: RGBColor): HexColorString {
  const { red, green, blue } = color;
  const r = colorComponentToHexComponent(red);
  const g = colorComponentToHexComponent(green);
  const b = colorComponentToHexComponent(blue);
  return `#${r}${g}${b}`;
}

/**
 * Returns an hexadecimal representation of a color component
 *
 * @param component Color component
 * @returns Hexadecimal color character
 */
function colorComponentToHexComponent(component: number): HexColorCharacter {
  return Math.floor(component * 255)
    .toString(16)
    .padStart(2, '0') as HexColorCharacter;
}
