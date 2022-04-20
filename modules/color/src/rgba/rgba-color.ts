import { type ColorWithAlpha } from '../color-with-alpha';
import { type RGBColor } from '../rgb/rgb-color';

/**
 * Color with a red, green, blue and alpha component
 */
export interface RGBAColor extends RGBColor, ColorWithAlpha {}
