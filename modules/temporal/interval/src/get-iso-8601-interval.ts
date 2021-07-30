import { getIntervalDuration } from '../duration/get-interval-duration';
import { getISO8601Duration } from '../duration/get-iso-8601-duration';
import type { Instant } from '../instant';
import type { Interval } from './interval';
import type { ISO8601IntervalOptions } from './iso-8601-interval-options';

/**
 * Gets an ISO 8610 interval string
 * @param interval Interval
 * @param options Options
 * @returns ISO 8601 interval string
 */
export function getISO8601Interval(interval: Interval<Instant>, options?: ISO8601IntervalOptions): string {
  const duration = options?.duration;
  const start = duration === 'start' ? getISO8601Duration(getIntervalDuration(interval)) : getISO8601(interval.start);
  const end = duration === 'end' ? getISO8601Duration(getIntervalDuration(interval)) : getISO8601(interval.end);

  const recurring = getRecurringString(options?.repetitions);
  return `${recurring}${start}/${end}`;
}

function getRecurringString(repetitions?: number): string {
  switch (repetitions) {
    case undefined:
      return '';
    case -1:
      return 'R/';
    default:
      return `R${repetitions}/`;
  }
}
