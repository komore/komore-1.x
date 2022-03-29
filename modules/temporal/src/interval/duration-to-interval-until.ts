import { Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';

/**
 * Creates a function that returns an interval from a start computed as a duration until a reference end temporal
 * @param end End
 * @returns Function that returns an interval from a start computed as a duration until the reference end temporal
 */
export function durationToIntervalUntil<T extends IntervalTemporal>(
  end: T
): (duration: Temporal.Duration) => Interval<T> {
  if (end instanceof Temporal.PlainMonthDay) {
    const endPlainDate = asPlainDate(end);
    return duration => ({
      end,
      start: endPlainDate.subtract(duration).toPlainMonthDay() as T,
    });
  } else {
    return duration => ({
      end,
      start: end.subtract(duration) as T,
    });
  }
}
