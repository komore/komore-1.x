import type { Instant } from '../instant';

/**
 * Interval
 * @template T Instant type
 */
export interface Interval<T extends Instant> {
  readonly start: T;
  readonly end: T;
}
