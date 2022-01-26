import { type HSL } from './hsl';
import { type HSLString } from './hsl-string';

/**
 * Returns an HSL string, given an HSL color
 * @param color Color
 * @returns HSL string
 */
export function toHSLString(color: HSL): HSLString {
  const { hue, saturation, lightness } = color;
  const h = hue * 360;
  const s = saturation * 100;
  const l = Math.floor(lightness * 255);
  return `hsl(${h},${s},${l})`;
}
