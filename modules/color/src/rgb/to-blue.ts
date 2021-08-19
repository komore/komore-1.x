import type { RGB } from './rgb';

/**
 * Returns the blue component from an RGB color
 * @param color RGB color
 * @returns Blue component
 */
export function toBlue(color: RGB): number {
  return color.blue;
}
