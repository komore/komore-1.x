import type { Interval } from './interval';
import type { IntervalTemporal } from './interval-temporal';

/**
 * Creates an interval
 * @param start Start temporal
 * @param end End temporal
 * @returns Interval
 * @template T Temporal type
 */
export function createInterval<T extends IntervalTemporal>(start: T, end: T): Interval<T> {
  return {
    start,
    end
  };
}
