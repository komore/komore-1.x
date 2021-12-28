import { toISO8601 } from '@komore/temporal';
import { toISO8601Duration } from '@komore/temporal/duration';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { type ISO8601IntervalOptions } from './iso-8601-interval-options';

/**
 * Returns an ISO 8610 interval string with a duration
 * @param interval Interval
 * @param duration Whether the start or end temporal should be replaced with a duration
 * @returns ISO 8601 interval string
 */
export function toISO8601IntervalWithDuration(interval: Interval<IntervalTemporal>, duration: 'start' | 'end'): string {
  const start = duration === 'start' ? toISO8601Duration(getIntervalDuration(interval)) : toISO8601(interval.start);
  const end = duration === 'end' ? toISO8601Duration(getIntervalDuration(interval)) : toISO8601(interval.end);
  return `${start}/${end}`;
}
