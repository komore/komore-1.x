import { type RGBA } from '../rgba/rgba';
import { type RGB } from './rgb';

/**
 * Returns an RGB color given an RGBA color
 * @param color Color
 * @returns RGB color
 */
export function toRGB(color: RGBA): RGB {
  const { alpha: _, ...rgb } = color;
  return rgb;
}
