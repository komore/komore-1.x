import { type IntervalTemporal } from './interval-temporal';

/**
 * Repeating interval
 *
 * @template T Temporal type
 */
export interface RepeatingInterval<T extends IntervalTemporal> {
  /**
   * Duration until the end of the interval
   */
  readonly duration: Temporal.Duration;
  /**
   * Number of repetitions, or undefined for infinite repetitions
   */
  readonly repetitions?: number;
  /**
   * Start temporal for the interval
   */
  readonly start: T;
}
