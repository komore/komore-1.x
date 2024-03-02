import { type RandomStringCapitalization } from './random-string-capitalization';
import { type RandomStringCharacterSet } from './random-string-character-set';

/**
 * Random string options
 */
export interface RandomStringOptions {
  /**
   * Capitalization
   */
  readonly capitalization?: RandomStringCapitalization;
  /**
   * Character set
   *
   * @note Defaults to `'alphanumeric'`
   */
  readonly characterSet?: RandomStringCharacterSet | (string & {});
  /**
   * Length of the string
   *
   * @note Defaults to `32`
   */
  readonly length?: number;
  /**
   * Random number generator
   *
   * @note Defaults to `Math.random`
   */
  readonly rng?: () => number;
}
