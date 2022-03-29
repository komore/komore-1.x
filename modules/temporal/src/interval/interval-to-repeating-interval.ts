import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type TemporalWithTime } from '../temporal-with-time';
import { type Interval } from './interval';
import { type IntervalTemporalType } from './interval-temporal-type';
import { intervalToDuration } from './interval-to-duration';
import { type RepeatingInterval } from './repeating-interval';
import { type RepeatingIntervalOptions } from './repeating-interval-options';

/**
 * Creates a function that turns an interval into a repeating interval
 * @param options Options, defaulting to a `future` direction and `0` repetitions
 * @returns Repeating interval
 */
export function intervalToRepeatingInterval(
  options?: Partial<RepeatingIntervalOptions>
): <T extends Interval<TemporalWithDate> | Interval<TemporalWithTime> | Interval<TemporalWithPartialDate>>(
  interval: T
) => RepeatingInterval<IntervalTemporalType<T>> {
  const direction = options?.direction ?? 'future';
  const repetitions = options?.repetitions;

  return <T extends Interval<TemporalWithDate> | Interval<TemporalWithTime> | Interval<TemporalWithPartialDate>>(
    interval: T
  ) => {
    const intervalDuration = intervalToDuration(interval);
    const [duration, start] =
      direction === 'future' ? [intervalDuration, interval.start] : [intervalDuration.negated(), interval.end];
    return {
      duration,
      repetitions,
      start: start as IntervalTemporalType<T>,
    };
  };
}
