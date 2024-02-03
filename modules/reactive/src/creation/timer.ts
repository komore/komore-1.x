import { timer as rxjsTimer } from 'rxjs';

import { temporalToJavaScriptDate } from '@komore/temporal/compatibility';

import { type SchedulerLike } from '../scheduler/scheduler-like';
import { type Observable } from '../observable';

/**
 * Creates an observable that will wait for a number of milliseconds, then emit the number 0
 *
 * @param millisecondsFromNow Milliseconds to wait for
 * @param scheduler Scheduler
 * @returns Observable that waits for the specified number of milliseconds then emits 0
 */
export function timer(millisecondsFromNow: number, scheduler?: SchedulerLike): Observable<0>;

/**
 * Creates an observable that will wait until a specific time, then emit the number 0
 *
 * @param temporal Temporal
 * @param scheduler Scheduler
 * @returns Observable that waits until the specified time then emits 0
 */
export function timer(temporal: Temporal.PlainDateTime, scheduler?: SchedulerLike): Observable<0>;

/**
 * Creates an observable that will wait for a number of milliseconds, then emit a sequence of numbers that starts with 0
 * with an interval between each emitted value
 *
 * @param millisecondsFromNow Milliseconds to wait for before emitting the sequence
 * @param intervalDuration Interval between each emitted value, as a number of milliseconds or a duration
 * @param scheduler Scheduler
 * @returns Observable that waits for the specified number of milliseconds then emits a sequence
 */
export function timer(
  millisecondsFromNow: number,
  intervalDuration: number | Temporal.Duration,
  scheduler?: SchedulerLike
): Observable<number>;

/**
 * Creates an observable that will wait until a specific time, then emit a sequence of numbers that starts with 0 with
 * interval between each emitted value
 *
 * @param millisecondsFromNow Milliseconds to wait for before emitting the sequence
 * @param intervalDuration Interval between each emitted value, as a number of milliseconds or a duration
 * @param scheduler Scheduler
 * @returns Observable that waits until the specified time then emits a sequence
 */
export function timer(
  start: Temporal.PlainDateTime,
  intervalDuration: number | Temporal.Duration,
  scheduler?: SchedulerLike
): Observable<number>;

export function timer(
  start: number | Temporal.PlainDateTime,
  intervalDurationOrScheduler?: number | Temporal.Duration | SchedulerLike,
  scheduler?: SchedulerLike
): Observable<number> {
  const due = typeof start === 'number' ? start : temporalToJavaScriptDate(start);
  const isIntervalDurationNumber = typeof intervalDurationOrScheduler === 'number';
  const isIntervalDuration = intervalDurationOrScheduler instanceof Temporal.Duration;
  if (isIntervalDurationNumber || isIntervalDuration) {
    const intervalDuration = isIntervalDuration
      ? intervalDurationOrScheduler.total({ unit: 'millisecond' })
      : intervalDurationOrScheduler;
    return rxjsTimer(due, intervalDuration, scheduler);
  } else {
    return rxjsTimer(due, intervalDurationOrScheduler);
  }
}
