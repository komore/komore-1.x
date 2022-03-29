import { Temporal } from '@js-temporal/polyfill';
import {
  intervalToRepeatingInterval,
  type TemporalWithDate,
  type TemporalWithTime,
  type Interval,
  type IntervalTemporal,
  type RepeatingInterval,
  durationToMilliseconds,
} from '@komore/temporal';
import { toJavaScriptDate } from '@komore/temporal/compatibility';
import { interval as rxjsInterval, timer as rxjsTimer } from 'rxjs';
import { type Observable } from '../observable';
import { type SchedulerLike } from '../scheduler/scheduler-like';

/**
 * Creates an observable that emits an infinite sequence of incrementing numbers, with a delay between each emission
 * @param period Period as a number of milliseconds or a duration
 * @param scheduler Scheduler
 * @returns Observable that emits an infinite sequence of incrementing numbers
 */
export function interval(period: number | Temporal.Duration, scheduler?: SchedulerLike): Observable<number>;

/**
 * Creates an observable that will emit 0 at the start of the interval and 1 at the end of the interval
 * @param interval Interval
 * @param scheduler Scheduler
 * @returns Observable that emits 0 at the start of the interval and 1 at the end of the interval
 */
export function interval(
  interval: Interval<TemporalWithDate> | Interval<TemporalWithTime>,
  scheduler?: SchedulerLike
): Observable<number>;

/**
 * Creates an observable that will emit 0 at the start of the interval then an incrementing number each time the
 * interval repeats
 * @param interval Repeating interval
 * @param scheduler Scheduler
 * @returns Observable that emits 0 at the start of the interval then an incrementing number on each repetition
 */
export function interval(
  interval: RepeatingInterval<TemporalWithDate> | RepeatingInterval<TemporalWithTime>,
  scheduler?: SchedulerLike
): Observable<number>;

export function interval(
  intervalOrPeriod:
    | number
    | Temporal.Duration
    | Interval<TemporalWithDate>
    | Interval<TemporalWithTime>
    | RepeatingInterval<TemporalWithDate>
    | RepeatingInterval<TemporalWithTime>,
  scheduler?: SchedulerLike
): Observable<number> {
  if (typeof intervalOrPeriod === 'number' || intervalOrPeriod instanceof Temporal.Duration) {
    const milliseconds =
      typeof intervalOrPeriod === 'number' ? intervalOrPeriod : intervalOrPeriod.total({ unit: 'milliseconds' });
    return rxjsInterval(milliseconds, scheduler);
  } else {
    const interval = intervalOrPeriod;

    const repeatingInterval = isRepeatingInterval(interval) ? interval : intervalToRepeatingInterval()(interval);
    const start = repeatingInterval.start;
    const startDateTime =
      start instanceof Temporal.PlainDateTime || start instanceof Temporal.ZonedDateTime
        ? start
        : start instanceof Temporal.PlainTime
        ? start.toPlainDateTime(Temporal.Now.plainDateISO())
        : start.toPlainDateTime(Temporal.Now.plainTimeISO());
    const due = toJavaScriptDate(startDateTime);
    const duration = durationToMilliseconds(startDateTime)(repeatingInterval.duration);
    if (duration < 0) {
      throw new Error('Negative duration not implemented yet');
    }

    // TODO: proper implementation, as this one can drift
    return rxjsTimer(due, duration, scheduler);
  }
}

function isRepeatingInterval(
  interval:
    | Interval<TemporalWithDate>
    | Interval<TemporalWithTime>
    | RepeatingInterval<TemporalWithDate>
    | RepeatingInterval<TemporalWithTime>
): interval is RepeatingInterval<TemporalWithDate> | RepeatingInterval<TemporalWithTime> {
  const potentialInterval = interval as Partial<RepeatingInterval<IntervalTemporal>>;
  return potentialInterval.duration !== undefined;
}
