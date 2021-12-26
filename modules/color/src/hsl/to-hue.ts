import { type HSL } from './hsl';

/**
 * Returns the hue component from an HSL color
 * @param color HSL color
 * @returns Hue component
 */
export function toHue(color: HSL): number {
  return color.hue;
}
