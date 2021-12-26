import { type HSL } from './hsl';

/**
 * Returns the saturation component from an HSL color
 * @param color HSL color
 * @returns Saturation component
 */
export function toSaturation(color: HSL): number {
  return color.saturation;
}
