/**
 * Random number between options
 */
export interface RandomNumberBetweenOptions {
  /**
   * Whether the numbers should be integers
   */
  readonly integer?: boolean;
  /**
   * Maximum value
   */
  readonly maximum: number;
  /**
   * Minimum value
   */
  readonly minimum: number;
  /**
   * Random number generator
   *
   * @note Defaults to `Math.random`
   */
  readonly rng?: () => number;
}
