import type { ColorWithAlpha } from '../color-with-alpha';
import type { RGB } from '../rgb/rgb';

/**
 * Color with a red, green, blue and alpha component
 */
export interface RGBA extends RGB, ColorWithAlpha {}
