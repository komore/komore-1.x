import { type RGB } from './rgb';

/**
 * Returns the green component from an RGB color
 * @param color RGB color
 * @returns Green component
 */
export function toGreen(color: RGB): number {
  return color.green;
}
