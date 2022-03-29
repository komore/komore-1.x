import { type Temporal } from '@js-temporal/polyfill';
import { type IntervalTemporal } from './interval-temporal';
import { type RepeatingInterval } from './repeating-interval';

/**
 * Creates a repeating interval
 * @param start Start temporal
 * @param duration Duration
 * @param repetitions Repetitions
 * @returns Interval
 * @template T Temporal type
 */
export function createRepeatingInterval<T extends IntervalTemporal>(
  start: T,
  duration: Temporal.Duration,
  repetitions?: number
): RepeatingInterval<T> {
  return {
    duration,
    repetitions,
    start,
  };
}
