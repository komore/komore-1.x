import type { Instant } from '../instant';
import type { Interval } from './interval';

/**
 * Creates an interval
 * @param start Start instant
 * @param end End instant
 * @returns Interval
 * @template T Instant type
 */
export function createInterval<T extends Instant>(start: T, end: T): Interval<T> {
  return {
    start,
    end
  };
}
