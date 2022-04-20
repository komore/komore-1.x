import { type RGBColor } from './rgb-color';

/**
 * Returns the blue component from an RGB color
 * @param color RGB color
 * @returns Blue component
 */
export function rgbColorToBlue(color: RGBColor): number {
  return color.blue;
}
