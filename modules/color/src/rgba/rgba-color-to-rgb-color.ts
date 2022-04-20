import { type RGBColor } from '../rgb/rgb-color';
import { type RGBAColor } from './rgba-color';

/**
 * Returns an RGB color, given an RGBA color
 *
 * @param color Color
 * @returns RGB color
 */
export function rgbaColorToRGBColor(color: RGBAColor): RGBColor {
  const { alpha: _, ...rgb } = color;
  return rgb;
}
