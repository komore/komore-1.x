import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Rounds a temporal with time to the following hour
 * @param temporal Temporal with time
 * @returns Temporal rounded to the following hour
 * @template T Temporal type
 */
export function toStartOfFollowingHour<T extends TemporalWithTime>(temporal: T): T {
  return temporal.add({ hours: 1 }).with({ minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 }) as T;
}
