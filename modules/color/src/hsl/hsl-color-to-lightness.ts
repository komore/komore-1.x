import { type HSLColor } from './hsl-color';

/**
 * Returns the lightness component from an HSL color
 * @param color HSL color
 * @returns Lightness component
 */
export function hslColorToLightness(color: HSLColor): number {
  return color.lightness;
}
