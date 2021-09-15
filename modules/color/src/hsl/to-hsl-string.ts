import type { HSL } from './hsl';

/**
 * Returns an HSL string, given an HSL color
 * @param color Color
 * @returns HSL string
 */
export function toHSLString(color: HSL): string {
  const { hue, saturation, lightness } = color;
  const h = hue * 360;
  const s = saturation * 100;
  const l = Math.floor(lightness * 255);
  return `hsl(${h},${s},${l})`;
}
