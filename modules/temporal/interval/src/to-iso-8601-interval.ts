import { toISO8601 } from '@komore/temporal';
import type { Interval } from './interval';
import type { IntervalTemporal } from './interval-temporal';

/**
 * Returns an ISO 8610 interval string
 * @param interval Interval
 * @returns ISO 8601 interval string
 */
export function toISO8601Interval(interval: Interval<IntervalTemporal>): string {
  const start = toISO8601(interval.start);
  const end = toISO8601(interval.end);
  return `${start}/${end}`;
}
