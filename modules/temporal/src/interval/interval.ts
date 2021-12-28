import { type IntervalTemporal } from './interval-temporal';

/**
 * Interval
 * @template T Temporal type
 */
export interface Interval<T extends IntervalTemporal> {
  readonly start: T;
  readonly end: T;
}
