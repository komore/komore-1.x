import { type RGB } from '../rgb/rgb';
import { type RGBA } from './rgba';

/**
 * Creates a function that converts an RGB color to an RGBA color, adding a provided alpha component
 * @param alpha Alpha component
 * @returns Function that converts an RGB color to an RGBA color, adding the provided alpha component
 */
export function toRGBA(alpha: number): (color: RGB) => RGBA;

/**
 * Returns an RGBA color given an RGB color, setting the alpha component to 1
 * @param color Color
 * @returns RGBA color
 */
export function toRGBA(color: RGB): RGBA;

/**
 * Returns an RGBA color given an RGB color, setting the alpha component
 * @param color Color
 * @param alpha Alpha
 * @returns RGBA color
 */
export function toRGBA(color: RGB, alpha: number): RGBA;

export function toRGBA(colorOrAlpha: RGB | number, optionalAlpha?: number): ((color: RGB) => RGBA) | RGBA {
  if (typeof colorOrAlpha === 'number') {
    const alpha = colorOrAlpha ?? 1;
    return (color: RGB) => ({ ...color, alpha });
  } else {
    const color = colorOrAlpha;
    const alpha = optionalAlpha ?? 1;
    return {
      ...color,
      alpha
    };
  }
}
