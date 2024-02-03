import { asPlainDate } from '../as-plain-date';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';

/**
 * Creates a function that returns an interval from a start reference temporal to an end computed as a duration since the start
 *
 * @param start Start
 * @returns Function that returns an interval from the start temporal to an end computed as a duration since the start
 */
export function durationToIntervalSince<T extends IntervalTemporal>(
  start: T
): (duration: Temporal.Duration) => Interval<T> {
  if (start instanceof Temporal.PlainMonthDay) {
    const startPlainDate = asPlainDate(start);
    return duration => ({
      start,
      end: startPlainDate.add(duration).toPlainMonthDay() as T,
    });
  } else {
    return duration => ({
      start,
      end: start.add(duration) as T,
    });
  }
}
