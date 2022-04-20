import { type RGBColor } from '../rgb/rgb-color';
import { type RGBAColor } from './rgba-color';

/**
 * Creates a function that converts an RGB color to an RGBA color, adding a provided alpha component
 *
 * @param alpha Alpha component
 * @returns Function that converts an RGB color to an RGBA color, adding the provided alpha component
 */
export function rgbColorToRGBAColor(alpha = 1): (color: RGBColor) => RGBAColor {
  return color => ({ ...color, alpha });
}
