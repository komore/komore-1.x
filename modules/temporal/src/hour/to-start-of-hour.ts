import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Rounds a temporal with time to start of the hour
 * @param temporal Temporal with time
 * @returns Temporal rounded to start of the hour
 * @template T Temporal type
 */
export function toStartOfHour<T extends TemporalWithTime>(temporal: T): T {
  return temporal.with({ minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 }) as T;
}
