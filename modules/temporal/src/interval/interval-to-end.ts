import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';

/**
 * Returns an interval's end temporal
 * @param interval Interval
 * @returns End temporal
 * @template T Interval temporal type
 */
export function intervalToEnd<T extends IntervalTemporal>(interval: Interval<T>): T {
  return interval.end;
}
