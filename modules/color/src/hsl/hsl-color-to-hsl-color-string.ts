import { type HSLColor } from './hsl-color';
import { type HSLColorString } from './hsl-color-string';

/**
 * Returns an HSL color string, given an HSL color
 *
 * @param color HSL color
 * @returns HSL color string
 */
export function hslColorToHSLColorString(color: HSLColor): HSLColorString {
  const { hue, saturation, lightness } = color;
  const h = hue * 360;
  const s = saturation * 100;
  const l = Math.floor(lightness * 255);
  return `hsl(${h},${s},${l})`;
}
