import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { type RepeatingInterval } from './repeating-interval';

/**
 * Returns an interval's start temporal
 * @param interval Interval
 * @returns Start temporal
 * @template T Interval temporal type
 */
export function intervalToStart<T extends IntervalTemporal>(interval: Interval<T> | RepeatingInterval<T>): T {
  return interval.start;
}
