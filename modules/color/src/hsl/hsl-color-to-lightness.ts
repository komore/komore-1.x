import { type HSL } from './hsl';

/**
 * Returns the lightness component from an HSL color
 * @param color HSL color
 * @returns Lightness component
 */
export function toLightness(color: HSL): number {
  return color.lightness;
}
