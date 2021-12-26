import { getIntervalDuration } from '../duration/get-interval-duration';
import { toISO8601Duration } from '../duration/get-iso-8601-duration';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { type ISO8601IntervalOptions } from './iso-8601-interval-options';

/**
 * Returns a recurring ISO 8610 interval string
 * @param interval Interval
 * @param repetitions Repetitions
 * @param options Options
 * @returns ISO 8601 interval string
 */
export function toRecurringISO8601Interval(interval: Interval<IntervalTemporal>, repetitions: number, options?: ISO8601IntervalOptions): string {
  const duration = options?.duration;
  const start = duration === 'start' ? toISO8601Duration(getIntervalDuration(interval)) : toISO8601(interval.start);
  const end = duration === 'end' ? toISO8601Duration(getIntervalDuration(interval)) : toISO8601(interval.end);
  const recurring = getRecurringString(repetitions);
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
