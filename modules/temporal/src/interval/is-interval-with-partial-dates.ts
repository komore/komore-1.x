import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';

/**
 * Tests whether an interval holds partial date values
 *
 * @param interval Interval
 * @returns true if the interval holds partial date values
 */
export function isIntervalWithPartialDates(
  interval: Interval<IntervalTemporal>
): interval is Interval<TemporalWithPartialDate> {
  const start = interval.start;
  return start instanceof Temporal.PlainYearMonth || start instanceof Temporal.PlainMonthDay;
}
