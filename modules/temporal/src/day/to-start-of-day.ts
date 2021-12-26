import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns a temporal that occurs at the start of the day on the same date as another temporal
 * @param temporal Temporal
 * @returns Temporal at the start of the day
 * @template T Temporal with time type
 */
export function toStartOfDay<T extends TemporalWithTime>(temporal: T): T {
  return temporal.with({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0
  }) as T;
}
