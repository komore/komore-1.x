import { type HSLColor } from './hsl-color';

/**
 * Returns the hue component from an HSL color
 *
 * @param color HSL color
 * @returns Hue component
 */
export function hslColorToHue(color: HSLColor): number {
  return color.hue;
}
