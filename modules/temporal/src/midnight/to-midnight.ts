import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Returns a temporal that is set at midnight for the given day
 *
 * In practice, this means the date changes to the next day.
 *
 * To get a temporal that occurs at midnight but does not affect the date, the {@link toStartOfDay} function may be
 * used.
 * @param temporal Temporal with date and time
 * @returns Temporal set at midnight
 */
export function toMidnight<T extends TemporalWithDateTime>(temporal: T): T {
  return temporal
    .with({ hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 })
    .add({ days: 1 }) as T;
}
