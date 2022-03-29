import { type Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { isIntervalWithPartialDates } from './is-interval-with-partial-dates';

/**
 * Creates a duration from an interval
 * @param interval Interval
 * @returns Duration
 */
export function intervalToDuration(interval: Interval<IntervalTemporal>): Temporal.Duration {
  if (isIntervalWithPartialDates(interval)) {
    const { start, end } = interval;
    const startDate = asPlainDate(start);
    const endDate = asPlainDate(end);
    return startDate.until(endDate);
  } else {
    const { start, end } = interval;
    return (start as Temporal.PlainDateTime).until(end);
  }
}
