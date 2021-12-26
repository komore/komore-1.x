import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns a temporal representing the end of the passed temporal's day
 * @param temporal Temporal
 * @returns Temporal at the end of the day
 * @template T Temporal with time type
 */
export function toEndOfDay<T extends TemporalWithTime>(temporal: T): T {
  return temporal.with({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
    microsecond: 999,
    nanosecond: 999
  }) as T;
}
