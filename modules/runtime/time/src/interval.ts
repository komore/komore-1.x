import type { Temporal } from './temporal';

/**
 * Interval
 * @template T Temporal type
 */
export interface Interval<T extends Temporal> {
  readonly start: T;
  readonly end: T;
}
