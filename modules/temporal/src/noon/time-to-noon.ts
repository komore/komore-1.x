import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a temporal that occurs at noon on the same day as the given temporal with date time
 * @param temporal Temporal with date time
 * @returns Temporal occuring at noon
 */
export function timeToNoon<T extends TemporalWithTime>(temporal: T): T {
  return temporal.with({
    hour: 12,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0
  }) as T;
}
