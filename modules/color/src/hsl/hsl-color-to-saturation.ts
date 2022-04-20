import { type HSLColor } from './hsl-color';

/**
 * Returns the saturation component from an HSL color
 *
 * @param color HSL color
 * @returns Saturation component
 */
export function hslColorToSaturation(color: HSLColor): number {
  return color.saturation;
}
