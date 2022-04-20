/**
 * Color with a hue, saturation and lightness component
 */
export interface HSLColor {
  /**
   * Hue component
   */
  readonly hue: number;
  /**
   * Saturation component
   */
  readonly saturation: number;
  /**
   * Lightness component
   */
  readonly lightness: number;
}
