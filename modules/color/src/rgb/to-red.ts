import { type RGB } from './rgb';

/**
 * Returns the red component from an RGB color
 * @param color RGB color
 * @returns Red component
 */
export function toRed(color: RGB): number {
  return color.red;
}
