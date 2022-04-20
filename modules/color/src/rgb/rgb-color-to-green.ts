import { type RGBColor } from './rgb-color';

/**
 * Returns the green component from an RGB color
 *
 * @param color RGB color
 * @returns Green component
 */
export function rgbColorToGreen(color: RGBColor): number {
  return color.green;
}
