import { type RepeatingIntervalDirection } from './repeating-interval-direction';

/**
 * Repeating interval options
 */
export interface RepeatingIntervalOptions {
  /**
   * Direction
   */
  readonly direction: RepeatingIntervalDirection;
  /**
   * Repetitions
   */
  readonly repetitions: number;
}
