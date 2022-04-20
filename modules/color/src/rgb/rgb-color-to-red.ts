import { type RGBColor } from './rgb-color';

/**
 * Returns the red component from an RGB color
 * @param color RGB color
 * @returns Red component
 */
export function rgbColorToRed(color: RGBColor): number {
  return color.red;
}
